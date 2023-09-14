import axios from "axios"
import { URL } from "../../utilis/constants"

export function fetchProducts() {
  return axios.get(`${URL}/product`)
}
