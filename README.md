# Product Manager

A Next.js app for browsing and searching product listings from Supabase.

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Create a Supabase project and set up the `products`
4. Copy `.env.local` and fill in your Supabase URL and anon key.
5. Run development server: `npm run dev`

## Deployment to Vercel

1. Push the code to a GitHub repository.
2. Connect the repo to Vercel.
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy.

## Features

- Browse products in a grid layout.
- Search by product name.
- Pagination for large datasets.
- Product detail pages.
