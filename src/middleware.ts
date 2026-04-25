import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that don't require authentication
const publicPaths = [
  '/',
  '/login',
  '/signup',
  '/what-is-heyron',
  '/getting-started',
  '/tutorials',
  '/personas',
  '/skills',
  '/templates',
  '/faq',
  '/support',
  '/the-den',
  '/meet-robby',
  '/resources',
  '/security',
  '/business',
  '/love',
  '/models',
  '/api-docs',
  '/troubleshooting',
  '/prompts',
  '/community',
  '/ai-terms',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is public
  const isPublicPath = publicPaths.some(path => 
    pathname === path || pathname.startsWith(path + '/')
  );
  
  // Also allow static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // For non-public paths, we'd normally check auth here
  // Since we're using client-side auth with localStorage,
  // the client-side Navigation component handles the redirect
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
};