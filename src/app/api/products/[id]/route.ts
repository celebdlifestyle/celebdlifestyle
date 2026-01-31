import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(req: Request, context: any) {
  return NextResponse.json({
    receivedParams: await context.params,
    receivedId: context.params?.id,
  });
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const updates = await req.json();
    const { id } = await params; // Await params here

    const db = await getDatabase();

    await db.collection("products").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updates,
          updatedAt: new Date(),
        },
      },
    );

    return NextResponse.json({ message: "Product updated" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params; // Await params here

    console.log("ID:", id);

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const db = await getDatabase();

    const result = await db.collection("products").deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({
      deletedCount: result.deletedCount,
      message: "Product deleted",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
