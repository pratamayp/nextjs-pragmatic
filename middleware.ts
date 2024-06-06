import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path === '/about-company') {
    return NextResponse.rewrite(new URL('/about', request.nextUrl));
  }
}

// export async function middleware(request: NextRequest) {
//   const cookies = request.cookies;
//   const pathname = request.nextUrl.pathname;

//   if (!cookies.has('token') && pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
// }
