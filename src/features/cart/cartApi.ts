import axios from "axios"
import { URL } from "../../utilis/constants"

export function fetchCart() {
  return axios.get(`${URL}/cart`)
}
export function addToCart(item) {
  return axios.post(`${URL}/cart`, item)
}

export function updateItem(id: number, item) {
  return axios.patch(`${URL}/cart/${id}`, item)
}
export function deleteItem(id: number) {
  return axios.delete(`${URL}/cart/${id}`)
}
