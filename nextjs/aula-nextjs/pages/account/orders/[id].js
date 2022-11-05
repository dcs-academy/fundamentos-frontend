import { useRouter } from "next/router";

export default function PageOrderDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalhes do pedido {id}</h1>
    </div>
  );
}
