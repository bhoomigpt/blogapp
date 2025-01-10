import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
const fs = require('fs');

// Connect to the database
const LoadDB = async () => {
  try {
    await ConnectDB();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
  }
};

LoadDB();

// GET API to fetch all blogs
export async function GET(request) {
  try {
    await ConnectDB();
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return NextResponse.json({ success: false, msg: "Failed to fetch blogs" });
  }
}

// POST API to handle blog creation
export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    if (!image) throw new Error("Image file is required!");

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);

    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };

    await BlogModel.create(blogData);
    console.log("Blog Saved Successfully!");

    return NextResponse.json({ success: true, msg: "Blog Added Successfully!" });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ success: false, msg: `Failed to add blog: ${error.message}` });
  }
}

// DELETE API to handle blog deletion
export async function DELETE(request) {
  try {
    const id = await request.nextUrl.searchParams.get('id');
    if (!id) return NextResponse.json({ msg: "Blog ID is required" }, { status: 400 });

    const blog = await BlogModel.findById(id);
    if (!blog) return NextResponse.json({ msg: "Blog not found" }, { status: 404 });

    // Delete the associated image file
    const imagePath = `./public/${blog.image}`;
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error(`Error deleting image: ${err}`);
      } else {
        console.log(`Image deleted: ${imagePath}`);
      }
    });

    // Delete the blog from the database
    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Blog Deleted Successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    return NextResponse.json({ success: false, msg: "Failed to delete blog" });
  }
}
