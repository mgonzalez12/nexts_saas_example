import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const publicRoutes = ['/', '/api/webhooks/clerk', '/api/webhooks/stripe'];

import { NextRequest } from 'next/server';

export default async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname } = req.nextUrl;

  // Si la ruta es pública, permite el acceso sin autenticación.
  if (publicRoutes.some(route => pathname === route || pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // En caso contrario, usa clerkMiddleware para proteger la ruta.
  const result = await clerkMiddleware()(req, {} as any);
  if (result) {
    return result as NextResponse;
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Excluir archivos estáticos y _next
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Ejecutar siempre para rutas API
    '/(api|trpc)(.*)',
  ],
};
