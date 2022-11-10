import Link from "next/link";

const paths = [
  { path: "/", label: "Página inicial" },
  { path: "/account", label: "Minha Conta" },
  { path: "/category", label: "Categorias" },
  { path: "/contact", label: "Contato" },
];

export default function Header() {
  return (
    <header>
      <nav>
        {paths.map((path) => (
          <Link href={path.path} key={path.path}>
            {path.label}
          </Link>
        ))}
        <input type="text" placeholder="Pesquisar" />
      </nav>
    </header>
  );
}
