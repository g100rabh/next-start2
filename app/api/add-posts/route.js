import prisma from "@/lib/prisma";

const { NextResponse } = require("next/server");

export async function POST(request) {
    const res = await request.json();
    console.log(res);
    const {title, content} = res;

    const result = await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            // author: {create: {name: 'sam'}}
        }
    })
    return NextResponse.json({result});

}