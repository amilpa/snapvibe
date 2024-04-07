import { connectDB, disconnectDB } from "@/utils/connectdb";
import { NextResponse } from "next/server";

import imagekit from "@/config/imagekit";
import Post from "@/models/posts";
import fs from "fs";

export async function POST(req) {
  const data = await req.formData();
  console.log(data);
  await connectDB();

  const post = await Post.create({
    desc: data.get("desc"),
    username: data.get("username"),
    userImg: data.get("userImg"),
    likes: data.get("likes"),
  });

  fs.readFile(data.get("img"), function (err, data) {
    if (err) throw err; // Fail if the file can't be read.
    imagekit.upload(
      {
        file: data, //required
        fileName: `${post._id}.jpg`, //required
        folder: "/SnapVibe/",
      },
      function (error, result) {
        if (error) console.log(error);
        else console.log(result);
      }
    );
  });

  // const form = new FormData();
  // form.append("file", data.get("img"));
  // form.append("fileName", `${post._id}.jpg`);
  // form.append("folder", "/SnapVibe/");

  // const res = await UploadImage(form);

  console.log(res);

  // await Post.findByIdAndUpdate(post._id, { img: url });
  await disconnectDB();
  return NextResponse.json({ message: "Success" }, { status: 200 });
}
