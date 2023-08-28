import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../app/slices/cart/cartSlice";
import { toast } from 'react-toastify';

const ProductsCard = ({ data }) => {
    const { id, name, image, price, priceAfterDiscount } = data; // destructering
    const dispatch = useDispatch()


    const handleAddToCart = () => {
        dispatch(addToCart(data))
        toast.success("Added to cart")
    }

    return (
        <div className="col-md-4 col-lg-2">
            <div className="card position-relative py-2 bg-white border shadow-lg rounded-lg">
                <img src={image} className="card-img-top" alt="..." />
                <p className="fw-bold text-center">{name}</p>
                <div className="d-flex justify-content-center gap-1">
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                </div>
                <div className="d-flex justify-content-center gap-1 my-3">
                    {priceAfterDiscount ? (
                        <>
                            <span className="fw-bolder text-success">
                                ${priceAfterDiscount}
                            </span>
                            <span className="text-decoration-line-through text-muted">
                                ${price}
                            </span>
                        </>
                    ) : (
                        <span className="fw-bolder text-success">${price}</span>
                    )}
                </div>
                <div className="px-3">
                    <button className="btn btn-success w-100 rounded-pill" onClick={handleAddToCart}>Add to cart</button>
                </div>

                {priceAfterDiscount ? (
                    <span
                        className="position-absolute rounded-pill px-2 text-white bg-danger"
                        style={{
                            top: "10px",
                            left: "10px",
                        }}
                    >
                        Save 99%
                    </span>
                ) : null}
            </div>
        </div>
    );
};

export default ProductsCard;
