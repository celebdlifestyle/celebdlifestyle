import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import slugify from "slugify";

export async function GET() {
  try {
    const db = await getDatabase();

    const categories = await db
      .collection("categories")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(categories);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, image } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Missing required field (name)" },
        { status: 400 },
      );
    }

    const db = await getDatabase();

    // 🔐 Ensure unique index exists
    await db
      .collection("categories")
      .createIndex({ slug: 1 }, { unique: true });

    // 🧠 Generate slug from name
    let baseSlug = slugify(name, {
      lower: true,
      strict: true,
    });

    let slug = baseSlug;
    let count = 1;

    // 🔁 Auto-increment if exists
    while (await db.collection("categories").findOne({ slug })) {
      slug = `${baseSlug}-${count++}`;
    }

    const category = {
      name,
      slug,
      image: image || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("categories").insertOne(category);

    return NextResponse.json(
      { _id: result.insertedId, ...category },
      { status: 201 },
    );
  } catch (err: any) {
    console.error(err);

    // 🛡 Duplicate slug protection
    if (err.code === 11000) {
      return NextResponse.json(
        { error: "Category slug already exists" },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { error: "Failed to add category" },
      { status: 500 },
    );
  }
}
