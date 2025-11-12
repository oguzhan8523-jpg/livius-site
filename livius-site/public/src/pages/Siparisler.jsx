import React, { useEffect, useState } from "react";

export default function Siparisler() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://livius-backend.vercel.app/orders")
      .then(res => res.json())
      .then(data => setOrders(data.content || []))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Trendyol Siparişleri</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Sipariş No</th>
            <th>Müşteri</th>
            <th>Ürün</th>
            <th>Tarih</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer?.name}</td>
              <td>{o.lines?.[0]?.productName}</td>
              <td>{new Date(o.orderDate).toLocaleDateString()}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
