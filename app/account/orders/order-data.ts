export type AccountOrder = {
  id: string;
  date: string;
  total: string;
  status: "Delivered" | "Processing";
  items: string[];
};

export const orders: AccountOrder[] = [
  { id: "ORD-78945", date: "2026-02-15", total: "$220", status: "Delivered", items: ["Velvet Oud"] },
  { id: "ORD-78944", date: "2026-02-10", total: "$430", status: "Processing", items: ["Amber Noir", "Rose Ombre"] },
  { id: "ORD-78943", date: "2026-02-05", total: "$195", status: "Delivered", items: ["Amber Noir"] },
  { id: "ORD-78942", date: "2026-01-28", total: "$375", status: "Delivered", items: ["Midnight Musk", "Velvet Oud"] }
];
