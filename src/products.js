import product1 from "./images/products/1.png"
import product2 from "./images/products/2.png"
import product3 from "./images/products/3.png"
import product4 from "./images/products/4.png"
import product5 from "./images/products/5.png"
import product6 from "./images/products/6.webp"
import product7 from "./images/products/7.webp"
import product8 from "./images/products/8.webp"

export const PRODUCT_CATEGORY = {
  living: "living",
  bed: "bed",
  bath: "bath",
  kitchen: "kitchen",
  lighting: "lighting",
  seating: "seating",
}

export const PRODUCTS = [
    {
        id: 1,
        productName: "IPhone",
        price: 999,
        productImage: product1,
        productCategory: PRODUCT_CATEGORY.electronics
      },
      {
        id: 2,
        productName: "Macbook Pro 2022 (M1)",
        price: 1999,
        productImage: product2,
        productCategory: PRODUCT_CATEGORY.electronics
      },
      {
        id: 3,
        productName: "Cannon M50 Camera",
        price: 699,
        productImage: product3,
        productCategory: PRODUCT_CATEGORY.electronics
      },
      {
        id: 4,
        productName: "WLS Van Gogh Denim Jacket",
        price: 228,
        productImage: product4,
        productCategory: PRODUCT_CATEGORY.clothing
      },
      {
        id: 5,
        productName: "LED Light Strips",
        price: 19,
        productImage: product5,
        productCategory: PRODUCT_CATEGORY.lighting
      },
      {
        id: 6,
        productName: "SPECTRUM LS TEE",
        price: 68,
        productImage: product6,
        productCategory: PRODUCT_CATEGORY.clothing
      },
      {
        id: 7,
        productName: "AUTO SERVICE SHIRT by GOLF WANG",
        price: 119,
        productImage: product7,
        productCategory: PRODUCT_CATEGORY.clothing
      },
      {
        id: 8,
        productName: "DON'T TRIP UNSTRUCTURED HAT",
        price: 39,
        productImage: product8,
        productCategory: PRODUCT_CATEGORY.hats
      },
]