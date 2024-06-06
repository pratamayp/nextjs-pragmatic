export async function GET(request: Request) {
  const res = await fetch('http://localhost:3001/user');
  const result = await res.json();

  return Response.json(result);
}

export async function POST() {
  return Response.json({
    message: 'This is a POST Route Handler',
  });
}
