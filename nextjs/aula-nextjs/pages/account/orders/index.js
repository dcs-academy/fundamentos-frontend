import { useRouter } from "next/router";
import Link from "next/link";

export default function PageOrders() {
  const router = useRouter();
  const { year, month } = router.query;
  return (
    <div>
      <h1>
        Pedidos {month} {year}
      </h1>
      <ul>
        <li>
          <Link href={`/account/orders/1?year=${year}&month=${month}`}>
            Pedido 1
          </Link>
        </li>
        <li>
          <Link href="/account/orders/2">Pedido 2</Link>
        </li>
        <li>
          <Link href="/account/orders/3">Pedido 3</Link>
        </li>
      </ul>
    </div>
  );
}
