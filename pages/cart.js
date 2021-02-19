import Head from "next/head";
import { DataContext } from "./../store/GlobalsState";
import { useContext, useState, useEffect } from "react";

import CartItem from "./../components/CartItem";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  if (cart.length === 0) return <h1>Cart Empty</h1>;

  return (
    <div className="row mx-auto">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="col-md-8 text-secondary table-responsive my-3">
        <h2 className="text-uppercase"> Shopping Cart</h2>

        <table className="table my-3">
          <tbody>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                dispatch={dispatch}
                cart={cart}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
        <form>
          <h2>Shipping</h2>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control mb-2"
          />
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="form-control mb-2"
          />
        </form>
        <h3>
          Total: <span className="text-danger">${Math.round(total)}</span>
        </h3>
        <a className="btn btn-secondary"> Proceed to Payment</a>
        <h6 className="text-capitalize my-2">
          Functionality not implemented yet
        </h6>
      </div>
    </div>
  );
};
export default Cart;
