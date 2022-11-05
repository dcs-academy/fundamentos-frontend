import { useRouter } from "next/router";

export default function PageCategoryDetails() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Categorias</h1>
      {slug?.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
