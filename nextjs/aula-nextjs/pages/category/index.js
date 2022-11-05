import Link from "next/link";

export default function PageCategory({ categories }) {
  return (
    <div>
      <h1>Categorias</h1>
      <ul>
        {categories?.map((category) => (
          <li>
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/category");
  const categories = await response.json();

  return {
    props: {
      categories,
    },
  };
}
