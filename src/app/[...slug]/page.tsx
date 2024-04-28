'use client';

import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];

  return(
    <>
      {slug ? <h1>Slug: {slug.join("/")}</h1> : <h1>Home</h1>} 
    </>
  );
}