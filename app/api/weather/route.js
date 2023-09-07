import { NextResponse } from 'next/server';

export async function GET(req) {
  console.log('in route api/weather GET');
  console.log(req);
  // const res = await fetch(
  //   'http://api.weatherstack.com/current?access_key=3345628948a784f73efdffebc7ba6afb&query=New-York'
  // );
  // const data = await res.json();
  // return NextResponse.json(data);
}

export async function POST(req) {
  console.log('in route api/weather POST');
  const reqJson = await req.json();
  const town = reqJson.town;
  const url = `http://api.weatherstack.com/current?access_key=3345628948a784f73efdffebc7ba6afb&query=${town}`;
  const res = await fetch(url);
  const data = await res.json();
  return NextResponse.json(data);
}
