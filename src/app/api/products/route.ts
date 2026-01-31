import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

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
      slug,
      description,
      brand,
      thumbnail,
      images,
      price,
      category,
      categoryId,
      tags,
      stock,
      istrending,
      isbestselling,
    } = body;

    if (!name || !price || !category || stock === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const db = await getDatabase();

    const product = {
      name,
      slug,
      description: description || "",
      brand: brand || "",
      thumbnail: thumbnail || "",
      images: images || [],
      price: Number(price),
      category,
      categoryId,
      istrending: Boolean(istrending),
      isbestselling: Boolean(isbestselling),
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
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 },
    );
  }
}
