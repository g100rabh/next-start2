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

  const updatedPostData = JSON.parse(body);

  const updatedPost = await prisma.post.update({
    where: { id },
    data: updatedPostData,
  });

  return NextResponse.json(updatedPost);
}
