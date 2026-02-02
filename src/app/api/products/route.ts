import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import slugify from "slugify";

export async function GET() {
  try {
    const db = await getDatabase();

    const products = await db
      .collection("products")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(products);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      description,
      brand,
      thumbnail,
      images,
      price,
      category,
      categorySlug,
      gender,
      tags,
      stock,
      isTrending,
      isBestSelling,
      isCelebdGoldPlated,
      isCelebdSilverPlated,
      isCelebdWhitePlated,
      isCelebdBlackPlated,
    } = body;

    if (
      !name ||
      !price ||
      !brand ||
      !category ||
      !categorySlug ||
      stock === undefined
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const db = await getDatabase();

    // 🔐 Ensure unique index exists (safe to call multiple times)
    await db.collection("products").createIndex({ slug: 1 }, { unique: true });

    // 🧠 Generate slug from name
    let baseSlug = slugify(name, {
      lower: true,
      strict: true,
    });

    let slug = baseSlug;
    let count = 1;

    // 🔁 Auto-increment if slug already exists
    while (await db.collection("products").findOne({ slug })) {
      slug = `${baseSlug}-${count++}`;
    }

    const product = {
      name,
      slug,
      description: description || "",
      brand: brand || "",
      thumbnail: thumbnail || "",
      images: images || [],
      price: Number(price),
      category,
      categorySlug,
      gender,
      isTrending: Boolean(isTrending),
      isBestSelling: Boolean(isBestSelling),
      isCelebdGoldPlated: Boolean(isCelebdGoldPlated),
      isCelebdSilverPlated: Boolean(isCelebdSilverPlated),
      isCelebdWhitePlated: Boolean(isCelebdWhitePlated),
      isCelebdBlackPlated: Boolean(isCelebdBlackPlated),
      tags: tags || [],
      stock: Number(stock),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("products").insertOne(product);

    return NextResponse.json(
      { _id: result.insertedId, ...product },
      { status: 201 },
    );
  } catch (err: any) {
    console.error(err);

    // 🛡 Handle duplicate slug race condition
    if (err.code === 11000) {
      return NextResponse.json(
        { error: "Product slug already exists" },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 },
    );
  }
}
