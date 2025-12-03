import hoddie1 from "./hoodies.jpg"
import hoddie2 from "./hoddie2.jpg"
import men2 from "./men2image.jpg"
import men3 from "./men3image.jpg"
import men4 from "./men4image.jpg"
import women5 from "./women5image.jpg"
import women6 from "./women6image.jpg"
import women7 from "./women7image.jpg"
import men8 from "./men8image.jpg"
import men9 from "./men9image.jpg"

const products = [
    {
        id: "1",
        name: "Hanes womens Ecosmart Full Zip Fleece Hoodie",
        description: "Carbon emissions from the lifecycle of this product were measured, reduced and offset.",
        price: 400,
        image: [hoddie1],
        category: "Women",
        Subcategory: "Winterwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        id: "2",
        name: "Men's Classic Crewneck Sweatshirt",
        description: "Soft, durable, and perfect for everyday wear.",
        price: 750,
        image: [men2],
        category: "Men",
        Subcategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716734345448,
        bestseller: false
    },
    {
        id: "3",
        name: "Men's Athletic Hoodie",
        description: "Designed for comfort during workouts or casual outings.",
        price: 850,
        image: [men3],
        category: "Men",
        Subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716834345448,
        bestseller: true
    },
    {
        id: "4",
        name: "Men's Zip-Up Hoodie",
        description: "Lightweight and breathable, ideal for layering.",
        price: 900,
        image: [men4],
        category: "Men",
        Subcategory: "Topwear",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716934345448,
        bestseller: true
    },
    {
        id: "5",
        name: "Women's Cozy Fleece Pullover",
        description: "Stay warm and stylish in any season.",
        price: 650,
        image: [women5],
        category: "Women",
        Subcategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1717034345448,
        bestseller: true
    },
    {
        id: "6",
        name: "Women's Lightweight Hoodie",
        description: "Perfect for running errands or a casual day out.",
        price: 700,
        image: [women6],
        category: "Women",
        Subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1717134345448,
        bestseller: false
    },
    {
        id: "7",
        name: "Women's Fashion Sweatshirt",
        description: "Trendy design with ultimate comfort for daily wear.",
        price: 720,
        image: [women7],
        category: "Women",
        Subcategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1717234345448,
        bestseller: true
    },
    {
        id: "8",
        name: "Men's Premium Pullover",
        description: "High-quality material with a relaxed fit.",
        price: 950,
        image: [men8],
        category: "Men",
        Subcategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1717334345448,
        bestseller: false
    },
    {
        id: "9",
        name: "Men's Hoodie with Pocket",
        description: "Stylish hoodie with convenient front pocket.",
        price: 880,
        image: [men9],
        category: "Men",
        Subcategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1717434345448,
        bestseller: true
    },
    {
        id: "10",
        name: "Hanes womens Ecosmart Full Zip Fleece Hoodie",
        description: "Carbon emissions from the lifecycle of this product were measured, reduced and offset.",
        price: 399,
        image: [hoddie2],
        category: "Women",
        Subcategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
]

export default products
