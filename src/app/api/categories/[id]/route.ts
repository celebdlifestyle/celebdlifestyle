import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const updates = await req.json();
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const db = await getDatabase();

    // If slug is being updated, check for duplicates
    if (updates.slug) {
      const existingCategory = await db.collection("categories").findOne({
        slug: updates.slug,
        _id: { $ne: new ObjectId(id) },
      });

      if (existingCategory) {
        return NextResponse.json(
          { error: "Category with this slug already exists" },
          { status: 409 },
        );
      }
    }

    const result = await db.collection("categories").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updates,
          updatedAt: new Date(),
        },
      },
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Category updated" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const db = await getDatabase();

    // Optional: Check if any products are using this category
    const productsWithCategory = await db
      .collection("products")
      .countDocuments({ category: id });

    if (productsWithCategory > 0) {
      return NextResponse.json(
        {
          error: `Cannot delete category. ${productsWithCategory} product(s) are using this category`,
        },
        { status: 409 },
      );
    }

    const result = await db.collection("categories").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      deletedCount: result.deletedCount,
      message: "Category deleted",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
