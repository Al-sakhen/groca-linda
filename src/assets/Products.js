import icon1 from "/icons/1.png";
import icon2 from "/icons/2.png";
import image1 from "/images/1.png";
import image2 from "/images/2.png";
import image3 from "/images/3.png";
import image4 from "/images/4.png";
import image5 from "/images/5.png";
import image6 from "/images/6.png";



export const Products = [
    {
        id: 1,
        name: "milk",
        image: icon1,
        items : [
            {
                id: 1,
                name: "Butter Cookies",
                price : 100,
                priceAfterDiscount : 90,
                image: image1,
            },
            {
                id: 2,
                name: "Bread",
                price : 650,
                priceAfterDiscount : 400,
                image: image2,
            },
            {
                id: 3,
                name: "Flower Mushroom",
                price : 100,
                priceAfterDiscount : null,
                image: image3,
            },
            {
                id: 4,
                name: "Egg",
                price : 100,
                priceAfterDiscount : 90,
                image: image4,
            },
            {
                id: 5,
                name: "Tomato",
                price : 800,
                priceAfterDiscount : 120,
                image: image5,
            },
            {
                id: 6,
                name: "Jamun Fruit",
                price : 100,
                priceAfterDiscount : null,
                image: image6,
            },
        ]
    },
    {
        id: 2,
        name: "fruits",
        image: icon2,
        items : [
            {
                id: 7,
                name: "Tomato",
                price : 100,
                priceAfterDiscount : 90,
                image: image4,
            },
            {
                id: 8,
                name: "Tomato",
                price : 650,
                priceAfterDiscount : 400,
                image: image2,
            },
            {
                id: 9,
                name: "Tomato",
                price : 100,
                priceAfterDiscount : null,
                image: image1,
            },
            {
                id: 10,
                name: "Flower Mushroom",
                price : 100,
                priceAfterDiscount : 90,
                image: image3,
            },
            {
                id: 11,
                name: "Tomato",
                price : 800,
                priceAfterDiscount : 120,
                image: image5,
            },
            {
                id: 12,
                name: "Tomato",
                price : 100,
                priceAfterDiscount : null,
                image: image6,
            },
        ]
    }
]