import Link from "next/link";

export default function Siderbar() {
  return (
    <aside>
      <ul>
        <li>
          <Link href="/account">Minha Conta</Link>
        </li>
        <li>
          <Link href="/orders">Pedidos</Link>
        </li>
      </ul>
    </aside>
  );
}
