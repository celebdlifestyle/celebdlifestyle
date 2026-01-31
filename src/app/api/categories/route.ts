import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

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

    const { name, slug, image } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { error: "Missing required fields (name, slug)" },
        { status: 400 },
      );
    }

    const db = await getDatabase();

    // Check if slug already exists
    const existingCategory = await db
      .collection("categories")
      .findOne({ slug });

    if (existingCategory) {
      return NextResponse.json(
        { error: "Category with this slug already exists" },
        { status: 409 },
      );
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
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to add category" },
      { status: 500 },
    );
  }
}
