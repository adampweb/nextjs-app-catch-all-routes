export default function Page({ params }: { params: { slug: string } }) {
  return(
    <>
      {params.slug ? <h1>Slug: {params.slug}</h1> : <h1>Home</h1>} 
    </>
  );
}
