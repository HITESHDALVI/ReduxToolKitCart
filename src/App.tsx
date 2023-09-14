import "./App.css"
import "./features/products/product.css"
import Products from "./features/products/Products"
import Cart from "./features/cart/Cart"
import { fetchProductAsync } from "./features/products/productSlice"
import { useAppDispatch } from "./app/hooks"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { LuShoppingBag } from "react-icons/lu"
import { fetchCartAsync } from "./features/cart/cartSlice"
function App() {
  const dispatch = useAppDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const [showCart, setShowCart] = useState(false)
  useEffect(() => {
    dispatch(fetchProductAsync())
    dispatch(fetchCartAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <div className="buttons-container">
        {/* <button
          className="fetch-products"
          aria-label="Fetch Products"
          onClick={() => dispatch(fetchProductAsync())}
        >
          fetch products
        </button> */}
        <button
          className="fetch-products cart-notification-container"
          aria-label="Fetch Products"
          onClick={() => setShowCart(!showCart)}
        >
          Cart <LuShoppingBag size="1.1em" style={{ marginLeft: "5px" }} />
          <span className="cart-notification">
            <span className="cart-notification-tip"></span>
            <span className="cart-notification-content">{cart.length}</span>
          </span>
        </button>
      </div>
      {showCart ? <Cart /> : <Products />}
    </div>
  )
}

export default App
