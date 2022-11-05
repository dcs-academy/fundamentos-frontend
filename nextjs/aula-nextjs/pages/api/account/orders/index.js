const orders = [
  {
    id: 1,
    createdAt: "2021-01-01T00:00:00.000Z",
    items: [
      {
        id: 1,
        name: "Mouse",
        price: 29.9,
        quantity: 1,
      },
      {
        id: 1,
        name: "Teclado",
        price: 35.5,
        quantity: 2,
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(orders);
}
