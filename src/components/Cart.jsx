import React, { useState, useEffect } from "react";
import "../style/cart.scss";
import "../style/mediaQu.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

// const img1 =
//     "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);

    const { subTotal } = useSelector((state) => state.cart);
    const { cart } = useSelector((state) => state);
    const { shipping } = useSelector((state) => state.cart);
    const { tax } = useSelector((state) => state.cart);
    const { total } = useSelector((state) => state.cart);
    const [save, setSave] = useState(true)
    useEffect(() => {
        if (save) {
            localStorage.setItem("cartItemsInlocalStorage", JSON.stringify(cart));
        }
        setSave(false)
    }, [save,cart])

    const dispatch = useDispatch();

    const incrementAdd = (id) => {
        dispatch({
            type: "increment",
            payload: id,
        });

        dispatch({
            type: "calculate",
        });

        setSave(true)
    };

    const decrementAdd = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        });

        dispatch({
            type: "calculate",
        });
        setSave(true)
    };

    const deleteHandlerAdd = (id) => {
        dispatch({
            type: "deleteItem",
            payload: id,
        });

        dispatch({
            type: "calculate",
        });
        setSave(true)
    };

    return (
        <div className="cart">
            <main>
                {cartItems.length > 0 ? (
                    cartItems.map((i, index) => {
                        return (
                            <CartItem
                                imgSrc={i.imgSrc}
                                name={i.name}
                                price={i.price}
                                qty={i.quantity}
                                id={i.id}
                                key={index}
                                increment={incrementAdd}
                                decrement={decrementAdd}
                                deleteHandler={deleteHandlerAdd}
                            />

                        );
                    })
                ) : (
                    <h1>No Items Yet</h1>
                )}
            </main>

            <aside>

                <h2>Subtotal:${subTotal}</h2>
                <h2>Shipping:${shipping}</h2>
                <h2>Tax:${tax}</h2>
                <h2>Total:${total}</h2>
            </aside>
        </div>
    );
};

export default Cart;
