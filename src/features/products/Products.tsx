import "./product.css"
import { useSelector } from "react-redux"
import EmptyCart from "../cart/EmptyCart"
import ProductCard from "./ProductCard"

const Products = () => {
  const products = useSelector((state) => state.products.products)

  return (
    <>
      <div className="card-container">
        {products && products.length > 0 ? (
          products.map((item) => (
            <div className="card" key={item.id}>
              <ProductCard
                item={item}
                rating={item.rating}
                description={item.description}
                title={item.title}
                thumbnail={item.thumbnail}
                discountPercentage={item.discountPercentage}
              />
            </div>
          ))
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  )
}

export default Products
