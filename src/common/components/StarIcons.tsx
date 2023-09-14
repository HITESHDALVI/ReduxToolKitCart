import {
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa"
type Props = {
  Name: string
}
const components = {
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
}
const StarIcons = ({ Name }: Props) => {
  const Icon = components[`Fa${Name}`]
  return <Icon color="#fc0" size={"2em"} />
}

export default StarIcons
