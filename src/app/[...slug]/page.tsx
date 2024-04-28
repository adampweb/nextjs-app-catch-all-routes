'use client';

import { usePathname } from 'next/navigation';

const Segment = (name: string) => {
  return(
    <p>{name}</p>
  )
}

export default function Page() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const json_uri = JSON.stringify(segments);

  return (
    <>
      <h1>Current pathname: {pathname}</h1>
      <code>
        <pre>
          {segments}
        </pre>
      </code>
    </>
  )

}