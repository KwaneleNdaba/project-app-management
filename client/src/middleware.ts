import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher,  } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher(['/signin(.*)', '/signup(.*)']);

export default clerkMiddleware((auth, request) => {
  // If the user is not accessing a public route and is not authenticated, redirect to the sign-in page
  if (!isPublicRoute(request)) {
    const user = auth();
    if (!user) {
      return NextResponse.redirect("/auth/signin");
    }
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
