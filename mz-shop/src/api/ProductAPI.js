const BASE_URL = 'https://fakestoreapi.com'

export const getProductById = (productId) =>
  fetch(`${BASE_URL}/products/${productId}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error)
    })

export const deleteProduct = (productId) =>
  fetch(`${BASE_URL}/products/${productId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error)
    })

export const getAllProduct = () =>
  fetch(`${BASE_URL}/products`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error)
    })

export const searchProduct = async (query) => {
  const products = await getAllProduct()
  return products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )
}
