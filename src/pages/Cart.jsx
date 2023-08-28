import { useSelector, useDispatch } from "react-redux";
import { addOrder, removeFromTheCart } from "../app/slices/cart/cartSlice";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const Cart = () => {
    const { items } = useSelector((state) => state.cart);
    const [amount, setAmont] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let total = 0;
        if (items.length === 0) {
            setAmont(0);
            return;
        }
        items.map((item) => {
            total += item.priceAfterDiscount ?? item.price;
            setAmont(total);
        });
    }, [items]); // array of dependencies

    const handleRemoveFromCart = (id, price) => {
        dispatch(removeFromTheCart(id));
        setAmont((prev) => prev - price);
        toast.error("Removed from cart");
    };

    const handleCheckout = () => {
        if (items.length === 0) {
            toast.error("No items in cart");
            return;
        }
        dispatch(addOrder({ items, totalPrice: amount }));
        toast.success("Order added successfully");
    };

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>
                                        {item.priceAfterDiscount ?? item.price}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleRemoveFromCart(
                                                    item.id,
                                                    item.priceAfterDiscount ??
                                                        item.price
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td
                                colSpan="4"
                                className="text-center fw-bolder text-danger"
                            >
                                No items in cart
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <hr className="my-5" />
            <div className="row">
                <div className="col-md-6">
                    <h3>Total Price :</h3>
                    <p className="text-danger fw-bolder"> {amount} </p>
                </div>
                <div className="col-md-6">
                    <button
                        className="btn btn-success w-100 rounded-pill"
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
