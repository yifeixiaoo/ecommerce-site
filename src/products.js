import product1 from "./images/products/1.png"
import product2 from "./images/products/2.JPG"
import product3 from "./images/products/3.webp"
import product4 from "./images/products/4.webp"
import product5 from "./images/products/5.JPG"
import product6 from "./images/products/6.webp"
import product7 from "./images/products/7.jpg"
import product8 from "./images/products/8.png"
import product9 from "./images/products/9.png"
import product10 from "./images/products/10.jpg"

export const PRODUCT_CATEGORY = {
  living: "living",
  bed: "bed",
  bath: "bath",
  dining: "dining",
  lighting: "lighting",
  seating: "seating",
}

export const PRODUCTS = [
    {
        id: 1,
        productName: "Sound Lantern",
        description: "Inspired by traditional lava lamps and a mood lighting which is soft and warm. The Sound Lantern will brighten up any room with soothing lights and sounds.",
        price: 548,
        productImage: product1,
        productCategory: PRODUCT_CATEGORY.lighting,
        texture: "Plastic",
        weight: "4kg",
        dimensions: "35cm x 10cm"
      },
      {
        id: 2,
        productName: "Oak Bed Frame",
        description: "A simple design with minimally treated oak wood. This timeless bed frame mixes nicely with a variety of other styles and furniture.",
        price: 479,
        productImage: product2,
        productCategory: PRODUCT_CATEGORY.bed,
        texture: "Wood",
        weight: "55kg",
        dimensions: "210cm x 160cm"
      },
      {
        id: 3,
        productName: "Rylinsa Armchair",
        description: "The Rylinsa armchair adds a stylish retro vibe to the room. The classic look goes anywhere in the home and gives you sturdy and robust seating for many years.",
        price: 326,
        productImage: product3,
        productCategory: PRODUCT_CATEGORY.seating,
        texture: "Wood",
        weight: "17kg",
        dimensions: "75cm x 38cm"
      },
      {
        id: 4,
        productName: "Marble Bath Vanity",
        description: "A simple and stylish bath vanity makes it easy to start fresh with a new bathroom solution.",
        price: 850,
        productImage: product4,
        productCategory: PRODUCT_CATEGORY.bath,
        texture: "Marble",
        weight: "67kg",
        dimensions: "80cm x 76cm"
      },
      {
        id: 5,
        productName: "Soft Fabric Office Chair",
        description: "The soft fabric office chair can be adjusted in height, so you can adapt it to your height. The castors are rubber coated to run smoothly on any kind of floor and have a pressure-sensitive brake mechanism.",
        price: 129,
        productImage: product5,
        productCategory: PRODUCT_CATEGORY.seating,
        texture: "Fabric",
        weight: "18kg",
        dimensions: "76cm x 50cm"
      },
      {
        id: 6,
        productName: "Modular Sofa Chair - Leather",
        description: "This leather sofa chair adds style to any living room.",
        price: 699,
        productImage: product6,
        productCategory: PRODUCT_CATEGORY.living,
        texture: "Leather",
        weight: "50kg",
        dimensions: "120cm x 120cm"
      },
      {
        id: 7,
        productName: "Modular Sofa Chair - Woven",
        description: "This woven sofa chair adds style to any living room.",
        price: 599,
        productImage: product7,
        productCategory: PRODUCT_CATEGORY.living,
        texture: "Woven",
        weight: "50kg",
        dimensions: "120cm x 120cm"
      },
      {
        id: 8,
        productName: "Mustard Table Lamp",
        description: "This stylish table lamp enhances the mood throughout the home with a pop of color.",
        price: 168,
        productImage: product8,
        productCategory: PRODUCT_CATEGORY.lighting,
        texture: "Plastic",
        weight: "5kg",
        dimensions: "50cm x 27cm"
      },
      {
        id: 9,
        productName: "Woven Tower Lamp",
        description: "This lamp spreads a warm light that creates cozy and playful shadows through the woven covering. Just as decorative in the window as on a shelf or bedside table.",
        price: 189,
        productImage: product9,
        productCategory: PRODUCT_CATEGORY.lighting,
        texture: "Woven",
        weight: "4kg",
        dimensions: "53cm x 24cm"
      },
      {
        id: 10,
        productName: "Classic Dining Table - Wood",
        description: "The oak top layer enhances the plank feeling and details like the slanted table legs and dovetail joints give the table a crafted look",
        price: 189,
        productImage: product10,
        productCategory: PRODUCT_CATEGORY.dining,
        texture: "Wood",
        weight: "60kg",
        dimensions: "240cm x 160cm"
      },
]