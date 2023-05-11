import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((li) => (
        <div
          key={li.id}
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "column",
            border: "1px solid Grey",
            marginTop: 10,
            width: "30%",
            gap: 10,
          }}
        >
          <img src={li.thumbnail} alt={li.title} />
          <p>{li.title}</p>
          {cart.some((p) => p.id === li.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: { id: li.id } })
              }
            >
              REMOVE FROM CART
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: { id: li.id, title: li.title, price: li.price },
                })
              }
            >
              ADD TO CART
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
