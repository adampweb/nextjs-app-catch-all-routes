'use client';

import { useRouter } from 'next/router';

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];

  return(
    <>
      {params.slug ? <h1>Slug: {params.slug}</h1> : <h1>Home</h1>} 
    </>
  );
}