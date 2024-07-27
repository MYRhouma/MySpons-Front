// app/api/companies/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json({ message: 'Authorization header missing' }, { status: 401 });
  }
  const token = authHeader.split(' ')[1];

  try {
    const response = await fetch('http://mysponsr.com/api/companies/', {
        method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(token);
    if (!response.ok) {
      throw new Error('Failed to fetch companies');
    }

    const data = await response.json();
    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching companies', error: (error as Error).message }, { status: 500 });
  }
}
