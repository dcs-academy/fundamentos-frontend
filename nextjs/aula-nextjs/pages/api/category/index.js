const categories = [
  { id: 1, name: "Informática", slug: "informatica" },
  { id: 2, name: "Livros", slug: "livros" },
];

export default function handler(req, res) {
  res.status(200).json(categories);
}
