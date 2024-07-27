import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { sponsorId: string } }) {
  const sponsorId = params.sponsorId;
  const authHeader = req.headers.get('authorization');
  
  if (!authHeader) {
    return NextResponse.json({ message: 'Authorization header missing' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    const response = await fetch(`http://mysponsr.com/api/sponsor/${sponsorId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch sponsor');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching sponsor', error: (error as Error).message }, { status: 500 });
  }
}
