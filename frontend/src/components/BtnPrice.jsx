import { useState } from 'react'
import { Link } from 'wouter'


const BtnPrice = ({ price, courseID }) => {
    // State of numbers courses added to cart
    const [inCart, setInCart] = useState(false)

    // Add course to cart with click event
    const addedCart = e => {

    }

    // Rendering component
    if (!inCart) {
        return (
            <button id={courseID} type="button" className="btn btn-outline-dark" onClick={addedCart} >
                <span className="price">{`${price} US$`} </span>
            </button>
        )
    } else if (inCart) {
        return (
            <Link href="/cart">
                <div onClick={addedCart} style={{ cursor: 'pointer' }}>
                    <span className="icon-check-circle mx-1 text-blue"></span>
                    <span className="text-blue">En carrito</span>
                </div>
            </Link>
        )
    }
}

export default BtnPrice
