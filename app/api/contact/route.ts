import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  // In production, this would send an email or save to database
  console.log('Contact form submission:', body)
  
  return NextResponse.json({
    success: true,
    message: 'Message received! Built by GPT-5',
    data: body
  })
}