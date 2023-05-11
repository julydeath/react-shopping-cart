import React, { useEffect, useReducer } from "react";
import CartReducer from "./reducers/CartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: [],
  });

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const products = data.products;
    dispatch({ type: "ADD_PRODUCTS", payload: products });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} />
    </div>
  );
}

export default App;
