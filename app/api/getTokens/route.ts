import { NextRequest, NextResponse } from 'next/server';

const USERNAME = 'yassine';
const PASSWORD = '@YassineLeBro5518';

export async function POST(req: NextRequest) {
  try {
    const response = await fetch('http://mysponsr.com/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: USERNAME, password: PASSWORD }),
    });

    if (!response.ok) {
      throw new Error('Failed to obtain token');
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Authentication failed', error: (error as Error).message }, { status: 401 });
  }
}
