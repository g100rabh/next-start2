import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function DELETE(request, { params }) {
  const id = params.Id;

  const post = await prisma.post.delete({
    where: { id },
  });
  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  const id = params.Id;
  console.log("put",id);

  const updatedPostData = JSON.parse(request.body);

  const updatedPost = await prisma.post.update({
    where: { id },
    data: updatedPostData,
  });

  return NextResponse.json(updatedPost);
}

export async function GET(request, { params }) {

  const id = params.Id;

  const post = await prisma.post.findUnique({
    where: { id },
  });

  return NextResponse.json(post);
}