import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
/* 
Next.js’s hot-reloading feature reloads modules frequently to reflect code changes 
instantly. However, this can lead to multiple instances of Prisma Client being created, 
which consumes resources and might cause unexpected behavior.
*/
// prisma打印会卡进程
import { prisma } from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  console.log("postpost");
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
