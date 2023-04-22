import product1 from "./images/products/1.png"
import product2 from "./images/products/2.JPG"
import product3 from "./images/products/3.webp"
import product4 from "./images/products/4.webp"
import product5 from "./images/products/5.JPG"
import product6 from "./images/products/6.webp"
import product7 from "./images/products/7.jpg"
import product8 from "./images/products/8.png"
import product9 from "./images/products/9.jpg"
import product10 from "./images/products/10.jpg"
import product11 from "./images/products/11.jpg"
import product12 from "./images/products/12.webp"
import product13 from "./images/products/13.jpg"
import product14 from "./images/products/14.webp"
import product15 from "./images/products/15.jpg"
import product16 from "./images/products/16.jpeg"
import product17 from "./images/products/17.jpg"
import product18 from "./images/products/18.webp"
import product19 from "./images/products/19.webp"
import product20 from "./images/products/20.png"
import product21 from "./images/products/21.jpg"
import product22 from "./images/products/22.jpg"

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
        price: 132,
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
        price: 278,
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
        price: 288,
        productImage: product3,
        productCategory: PRODUCT_CATEGORY.seating,
        texture: "Wood",
        weight: "17kg",
        dimensions: "75cm x 38cm"
      },
      {
        id: 4,
        productName: "Marble Vanity",
        description: "A simple and stylish bath vanity makes it easy to start fresh with a new bathroom solution.",
        price: 539,
        productImage: product4,
        productCategory: PRODUCT_CATEGORY.bath,
        texture: "Marble",
        weight: "67kg",
        dimensions: "80cm x 76cm"
      },
      {
        id: 5,
        productName: "Fabric Office Chair",
        description: "The soft fabric office chair can be adjusted in height, so you can adapt it to your height. The castors are rubber coated to run smoothly on any kind of floor and have a pressure-sensitive brake mechanism.",
        price: 105,
        productImage: product5,
        productCategory: PRODUCT_CATEGORY.seating,
        texture: "Fabric",
        weight: "18kg",
        dimensions: "76cm x 50cm"
      },
      {
        id: 6,
        productName: "Leather Sofa Chair",
        description: "This leather sofa chair adds style to any living room.",
        price: 349,
        productImage: product6,
        productCategory: PRODUCT_CATEGORY.living,
        texture: "Leather",
        weight: "50kg",
        dimensions: "120cm x 120cm"
      },
      {
        id: 7,
        productName: "Woven Sofa Chair",
        description: "This woven sofa chair adds style to any living room.",
        price: 299,
        productImage: product7,
        productCategory: PRODUCT_CATEGORY.living,
        texture: "Woven",
        weight: "50kg",
        dimensions: "120cm x 120cm"
      },
      {
        id: 8,
        productName: "Mustard Lamp",
        description: "This stylish table lamp enhances the mood throughout the home with a pop of color.",
        price: 47,
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
        price: 52,
        productImage: product9,
        productCategory: PRODUCT_CATEGORY.lighting,
        texture: "Woven",
        weight: "4kg",
        dimensions: "53cm x 24cm"
      },
      {
        id: 10,
        productName: "Oak Dining Table",
        description: "The oak top layer enhances the plank feeling and details like the slanted table legs and dovetail joints give the table a crafted look",
        price: 289,
        productImage: product10,
        productCategory: PRODUCT_CATEGORY.dining,
        texture: "Wood",
        weight: "60kg",
        dimensions: "240cm x 160cm"
      },
      {
        id: 11,
        productName: "Metal Bed Frame",
        description: "A simple design with a vintage brass finish. This timeless bed frame mixes nicely with a variety of other styles and furniture.",
        price: 487,
        productImage: product11,
        productCategory: PRODUCT_CATEGORY.bed,
        texture: "Metal",
        weight: "79kg",
        dimensions: "210cm x 160cm"
      },
      {
        id: 12,
        productName: "Fabric Sofa Sleeper",
        description: "Cuddle up in this comfortable sleeper sofa. The generous size and pillow armrests invites you and your guests to many hours of socialising and relaxation.",
        price: 689,
        productImage: product12,
        productCategory: PRODUCT_CATEGORY.living,
        texture: "Fabric",
        weight: "89kg",
        dimensions: "230cm x 98cm"
      },
      {
        id: 13,
        productName: "Stone Vanity",
        description: "This full stone vanity comes paired with a king sized sink that will brighten up any morning routine.",
        price: 599,
        productImage: product13,
        productCategory: PRODUCT_CATEGORY.bath,
        texture: "Stone",
        weight: "78kg",
        dimensions: "89cm x 76cm"
      },
      {
        id: 14,
        productName: "Fabric Arm Sofa",
        description: "This arm sofa will be your new favourite place for cozy evenings and lazy days.",
        price: 482,
        productImage: product14,
        productCategory: PRODUCT_CATEGORY.living,
        texture: "Fabric",
        weight: "81kg",
        dimensions: "210cm x 90cm"
      },
      {
        id: 15,
        productName: "Cone Ceiling Light",
        description: "Perfect for a dining table or entrance way, the cone shape concentrates light in the most visited parts of the house.",
        price: 52,
        productImage: product15,
        productCategory: PRODUCT_CATEGORY.lighting,
        texture: "Metal",
        weight: "6kg",
        dimensions: "46cm x 40cm"
      },
      {
        id: 16,
        productName: "Flush Ceiling Lamp",
        description: "Add lighting to any room without emptying your wallet. This stylish ceiling lamp spreads an even light that illuminates the whole room.",
        price: 42,
        productImage: product16,
        productCategory: PRODUCT_CATEGORY.lighting,
        texture: "Metal",
        weight: "4kg",
        dimensions: "55cm x 55cm"
      },
      {
        id: 17,
        productName: "Walnut Dining Set",
        description: "This grand dining set seats up to 8 and comes included with 8 chairs and 1 bench.",
        price: 783,
        productImage: product17,
        productCategory: PRODUCT_CATEGORY.dining,
        texture: "Wood",
        weight: "103kg",
        dimensions: "247cm x 160cm"
      },
      {
        id: 18,
        productName: "Leather Executive Chair",
        description: "Our Leather Executive Chair offers comfort and function when you’re working at the desk. It’s also elegant, generous and blends easily with your living room or bedroom decor.",
        price: 198,
        productImage: product18,
        productCategory: PRODUCT_CATEGORY.seating,
        texture: "Leather",
        weight: "29kg",
        dimensions: "98cm x 54cm"
      },
      {
        id: 19,
        productName: "Oak Vanity",
        description: "A bold expression made with a minimally treated red oak finish. This solution covers your essential needs from hidden drawers to a water-saving faucet. An easy match with many colours and styles.",
        price: 476,
        productImage: product19,
        productCategory: PRODUCT_CATEGORY.bath,
        texture: "Wood",
        weight: "45kg",
        dimensions: "78cm x 73cm"
      },
      {
        id: 20,
        productName: "Platform Bed Frame",
        description: "A sleek and refined oak finish that keeps the bedroom minimal. The Platform bed frame comes paired with six drawers that makes getting ready in the morning a breeze.",
        price: 489,
        productImage: product20,
        productCategory: PRODUCT_CATEGORY.bed,
        texture: "Wood",
        weight: "88kg",
        dimensions: "210cm x 170cm"
      },
      {
        id: 21,
        productName: "Basic Desk Lamp",
        description: "Metal construction that comes together for a timeless design. The Basic desk lamp is built to last and will remain reliable for years to come.",
        price: 29,
        productImage: product21,
        productCategory: PRODUCT_CATEGORY.lighting,
        texture: "Metal",
        weight: "10kg",
        dimensions: "53cm x 29cm"
      },
      {
        id: 22,
        productName: "Noir Dining Set",
        description: "A durable dining set that makes it easy to have big dinners indoors or outdoors.",
        price: 799,
        productImage: product22,
        productCategory: PRODUCT_CATEGORY.dining,
        texture: "Metal",
        weight: "130kg",
        dimensions: "220cm x 160cm"
      },
]