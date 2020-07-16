import React from 'react'

function CartItem({ id, name, price, qty, updateQty }) {
    const addOne = () => { updateQty(id, qty + 1) }
    const subtractOne = () => { updateQty(id, qty - 1) }
    
    return (
        <div className="CartItem">
            <div>{name}</div>
            <div>${price}</div>
            <button onClick={subtractOne} disabled={qty <= 1}>-</button>
            <div>{qty}</div>
            <button onClick={addOne}>+</button>
            <div>Total ${qty * price}</div>
        </div>
    );
}

export default CartItem;