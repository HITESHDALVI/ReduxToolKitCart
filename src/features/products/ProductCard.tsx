import React from "react"
import "./product.css"
import { addAsyncCart } from "../cart/cartSlice"
import { useAppDispatch } from "../../app/hooks"
import { FaShoppingCart, FaHeart } from "react-icons/fa"
import StarIcons from "../../common/components/StarIcons"
type Props = {}

const ProductCard = (item) => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="image-container">
        <img src={item.thumbnail} alt={item.title} />
        <div className="price">${item.discountPercentage}</div>
      </div>
      <label className="favorite">
        <input type="checkbox" checked />
        <FaHeart />
      </label>
      <div className="content">
        <div className="brand">{item.title}</div>
        <div className="product-name">{item.description}</div>
        <div className="color-size-container">
          <div className="colors">
            Color
            <ul className="colors-container">
              <li className="color">
                <a href="#"></a>{" "}
                <span className="color-name">Collegiate Gold</span>
              </li>
              <li className="color active">
                <a href="#"></a>
                <span className="color-name">Team Navy</span>
              </li>
              <li className="color">
                <a href="#"></a>
                <span className="color-name">Pulse Blue</span>
              </li>
              <li className="color">
                <a href="#"></a>
                <span className="color-name">Pink Fusion</span>
              </li>
              +2
            </ul>
          </div>
          <div className="sizes">
            Size
            <ul className="size-container">
              <li className="size">
                <label className="size-radio">
                  <input type="radio" value="xs" name="size" />
                  <span className="name">XS</span>
                </label>
              </li>
              <li className="size">
                <label className="size-radio">
                  <input type="radio" value="s" name="size" checked />
                  <span className="name">S</span>
                </label>
              </li>
              <li className="size">
                <label className="size-radio">
                  <input type="radio" value="m" name="size" />
                  <span className="name">M</span>
                </label>
              </li>
              <li className="size">
                <label className="size-radio">
                  <input type="radio" value="l" name="size" />
                  <span className="name">L</span>
                </label>
              </li>
              <li className="size">
                <label className="size-radio">
                  <input type="radio" value="xl" name="size" />
                  <span className="name">XL</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="rating">
          <StarIcons Name="Star" />
          <StarIcons Name="Star" />
          <StarIcons Name="Star" />
          <StarIcons Name="StarHalfAlt" />
          <StarIcons Name="RegStar" />({item.rating})
        </div>
      </div>
      <div className="button-container">
        <button className="buy-button button">Buy Now</button>
        <button
          className="cart-button button"
          onClick={() => dispatch(addAsyncCart(item.item))}
        >
          <FaShoppingCart size={"1em"} />
        </button>
      </div>
    </>
  )
}

export default ProductCard
