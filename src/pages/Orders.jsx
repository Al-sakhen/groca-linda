import { useSelector, useDispatch } from "react-redux";
import { removeOrder } from "../app/slices/cart/cartSlice";
import { toast } from "react-toastify";


const Orders = () => {
    const { orders } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveOrder = (id) => {
        dispatch(removeOrder(id));
        toast.success("Order removed successfully");
    };
    
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Number of items</th>
                        <th scope="col">Price</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <tr key={order.id}>
                                <th scope="row">{order.id}</th>
                                <td>{order.items.length}</td>
                                <td>{order.totalPrice}</td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={() => handleRemoveOrder(order.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No orders
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
