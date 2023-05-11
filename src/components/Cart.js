import React, { useEffect, useState } from "react";

const Cart = ({ state }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(state.cart.reduce((a, b) => a + Number(b.price), 0));
  }, [state.cart]);
  console.log(state.cart);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        padding: 10,
        width: "30%",
      }}
    >
      {state.cart.map((c) => (
        <div key={c.id}>
          <p>{c.title}</p>
          <p>${c.price}</p>
        </div>
      ))}
      <hr />
      <div>Total : ${total}</div>
    </div>
  );
};

export default Cart;
