import { useRouter } from "next/router";
import Link from "next/link";

export default function PageOrders({ orders }) {
  const router = useRouter();
  const { year, month } = router.query;
  return (
    <div>
      <h1>
        Pedidos {month} {year}
      </h1>
      <ul>
        {orders?.map((order) => (
          <li>
            <Link
              href={`/account/orders/${order.id}?year=${year}&month=${month}`}
            >
              Pedido {order.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/account/orders");
  const orders = await response.json();

  return {
    props: {
      orders,
    },
  };
}
