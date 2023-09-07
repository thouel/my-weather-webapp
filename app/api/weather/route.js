import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log('in route api/weather POST');
  const reqJson = await req.json();
  const town = reqJson.town;
  const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${town}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  if (data.success != null && data.success == false) {
    return NextResponse.json({ message: 'Something bad just happened' });
  }
  return NextResponse.json(data);
}
