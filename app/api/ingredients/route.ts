import { prisma } from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const limit = searchParams.get('limit')

  const ingredients = await prisma.ingredient.findMany({
    take: limit ? Number(limit) : undefined,
  })

  return NextResponse.json(ingredients)
}
