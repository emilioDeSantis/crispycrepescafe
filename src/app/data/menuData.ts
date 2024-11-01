export type MenuItem = {
    name: string;
    description?: string;
    price?: number;
    small?: number;
    large?: number;
};

export type SubCategory = {
    name: string;
    description: string;
    items: MenuItem[];
};

export type MainCategory = {
    name: string;
    description: string;
    subCategories: SubCategory[];
};

export type MenuData = MainCategory[];

export const menuData: MenuData = [
    {
        name: "Crepes",
        description: "",
        subCategories: [
            {
                name: "Crepes w Eggs",
                description: "",
                items: [
                    {
                        name: "3 Eggs, Sausage, Cheese",
                        price: 9.95,
                    },
                    {
                        name: "3 Eggs, Bacon, Cheese",
                        price: 9.95,
                    },
                    {
                        name: "3 Eggs, Tomato, Scallion, Cheese",
                        price: 9.45,
                    },
                    {
                        name: "3 Eggs, Ham, Cheese",
                        price: 9.95,
                    },
                    {
                        name: "3 Eggs, Sausage, Mushroom, Cheese",
                        price: 9.95,
                    },
                ],
            },
            {
                name: "Sweet Crepes",
                description: "",
                items: [
                    {
                        name: "Nutella or Chocolate Chips",
                        price: 6.5,
                    },
                    {
                        name: "Ricotta and Jam",
                        price: 7.95,
                    },
                    {
                        name: "Strawberry Lemon Sugar",
                        price: 9.5,
                    },
                    {
                        name: "Banana Honey Almond",
                        price: 9.5,
                    },
                    {
                        name: "Coconut Banana Nutella",
                        price: 9.75,
                    },
                    {
                        name: "Nutella, Apple, Coconut",
                        price: 9.75,
                    },
                    {
                        name: "Strawberries, Nutella",
                        price: 9.75,
                    },
                    {
                        name: "Honey, Strawberries, Almond",
                        price: 9.75,
                    },
                    {
                        name: "Strawberries, Banana, Nutella",
                        price: 9.55,
                    },
                    {
                        name: "Nutella Banana",
                        price: 8.80,
                    },
                    {
                        name: "Apple, Brown Sugar, Caramel, Cinnamon",
                        price: 8.95,
                    },
                ],
            },
            {
                name: "Super Crepes",
                description:
                    "Pick of two: Potato, Bacon, Ham, Sausage, Scrambled Eggs",
                items: [
                    {
                        name: "Banana, Strawberry, Nutella",
                        price: 13.9,
                    },
                    {
                        name: "Nutella, Banana, Coconut",
                        price: 13.9,
                    },
                    {
                        name: "Apple, Brown sugar, Cinnamon caramel",
                        price: 13.9,
                    },
                    {
                        name: "Banana, Chocolate, Almond",
                        price: 13.9,
                    },
                ],
            },
            {
                name: "Signature Crepes",
                description: "",
                items: [
                    {
                        name: "Manhattan",
                        description:
                            "Smoked Salmon, Tomato, Sweetonion, Egg, Cream Cheese",
                        price: 13.95,
                    },
                    {
                        name: "Tuscany",
                        description:
                            "Pesto Scented Chicken, Toma Tomato, Spinach, Mozzarella",
                        price: 11.95,
                    },
                    {
                        name: "Southwest",
                        description: "Chicken, Spinach, Mild Salsa, Cheddar",
                        price: 11.95,
                    },
                    {
                        name: "French Dip",
                        description: "Roast Beef, Onion, Au Jus Brie Cheese",
                        price: 12.0,
                    },
                    {
                        name: "Alex the Greek",
                        description: "Turkey, Spinach, Feta Cheese, Tomato",
                        price: 11.95,
                    },
                    {
                        name: "California",
                        description: "Turkey, Avocado, Tomato, Cucumber, Spinach, Cheese",
                        price: 12.0,
                    },
                ],
            },
            {
                name: "Savory Crepes",
                description: "",
                items: [
                    {
                        name: "Mushroom, Tomato, Spinach, Cheese",
                        price: 9.8,
                    },
                    {
                        name: "Pesto, Tomato, Spinach, Cheese",
                        price: 9.8,
                    },
                    {
                        name: "Pepper, Onion, Mushroom, Cheese",
                        price: 9.9,
                    },
                    {
                        name: "Tomato, Zucchini, Pepper, Cheese",
                        price: 9.8,
                    },
                    {
                        name: "Egg, Tomato, Mushrooms, Spinach, Cheese",
                        price: 9.8,
                    },
                ],
            },
            {
                name: "Vegetarian Crepes",
                description: "",
                items: [
                    {
                        name: "Grilled Veggie",
                        description:
                            "Portobello, Zucchini, Onion, Tomato, Feta, Pesto",
                        price: 10.4,
                    },
                    {
                        name: "Santa fe",
                        description:
                            "Avocado, Cucumber, Spinach, Carrot, Mushroom, Cheese",
                        price: 10.5,
                    },
                    {
                        name: "Crespelle Alla Fiorentina",
                        description:
                            "Plum Tomato, Spinach, Mushroom, Sundried Tomato, Ricotta Cheese",
                        price: 10.4,
                    },
                    {
                        name: "Three Mushroom",
                        description:
                            "Roasted Assorted Mushrooms, Spinach, Goat Cheese",
                        price: 10.7,
                    },
                ],
            },
        ],
    },
    {
        name: "Breakfast",
        description: "",
        subCategories: [
            {
                name: "Classic Breakfast",
                description: "",
                items: [
                    {
                        name: "Basic",
                        description: "3 Eggs, Home Fries, Toast",
                        price: 7.25,
                    },
                    {
                        name: "Special",
                        description: "2 eggs, Bacon, Home Fries, Toast",
                        price: 7.25,
                    },
                    {
                        name: "Marrakesh",
                        description:
                            "2 Eggs, Tomato, Onion, Pepper, Cumin, Toast, Home Fries",
                        price: 9.9,
                    },
                    {
                        name: "Blue",
                        description:
                            "Grilled Blueberry Muffin, Cheese, Omelette, Bacon, Homefries",
                        price: 10.95,
                    },
                    {
                        name: "Beef hash",
                        description:
                            "Corn Beef Hash, 3 Eggs, Home Fries, Toast",
                        price: 12.95,
                    },
                    {
                        name: "2-2-2-2",
                        description:
                            "2 Eggs, 2 Pancakes, 2 Bacon, 2 Sausages, Home Fries",
                        price: 12.65,
                    },
                ],
            },
            {
                name: "Egg Sandwich",
                description: "",
                items: [
                    {
                        name: "Egg, Bacon, Cheese, Ham or Sausage",
                        price: 6.25,
                    },
                    {
                        name: "Egg, Onion, Tomato, Cheese",
                        price: 6.25,
                    },
                ],
            },
            {
                name: "Breakfast Omelettes",
                description: "Comes with toast and fries",
                items: [
                    {
                        name: "Mediterranean",
                        description: "Tomato, Pepper, Onion, Zucchini, Cheese",
                        price: 11.25,
                    },
                    {
                        name: "Greek",
                        description: "Feta Cheese, Spinach",
                        price: 11.25,
                    },
                    {
                        name: "Mexican",
                        description: "Onion, Pepper, Salsa, Cheese",
                        price: 11.45,
                    },
                    {
                        name: "Western",
                        description: "Ham, Onion, Pepper, Cheese",
                        price: 11.5,
                    },
                    {
                        name: "All Meat",
                        description: "Bacon, Ham, Sausage, Cheese",
                        price: 11.5,
                    },
                ],
            },
            {
                name: "Pancakes",
                description: "",
                items: [
                    {
                        name: "Banana Chocolate",
                        price: 7.95,
                    },
                    {
                        name: "Plain Pancakes",
                        price: 6.9,
                    },
                    {
                        name: "Chocolate Coconut",
                        price: 7.95,
                    },
                ],
            },
            {
                name: "French Toast",
                description: "",
                items: [
                    {
                        name: "Plain",
                        description:
                            "Extra Thick Texas style with cinnamon, sugar",
                        price: 7.25,
                    },
                    {
                        name: "French Toast Special",
                        description: "Banana, Strawberry, Cinnamon",
                        price: 9.75,
                    },
                    {
                        name: "French Toast Sandwich",
                        description: "Banana, Whipped Cream, Chocolate",
                        price: 9.25,
                    },
                ],
            },

            {
                name: "Sides",
                description: "",
                items: [
                    {
                        name: "Home Fries",
                        price: 4.85,
                    },
                    {
                        name: "2 Eggs",
                        price: 2.5,
                    },
                    {
                        name: "Turkey (Bacon, Ham, Sausage)",
                        price: 3.95,
                    },
                    {
                        name: "Grilled Blueberry Muffin",
                        price: 2.75,
                    },
                ],
            },
        ],
    },
    {
        name: "Sandwiches & Wraps",
        description: "",
        subCategories: [
            {
                name: "Paninis",
                description: "Delicious pressed sandwiches",
                items: [
                    {
                        name: "Tuscan",
                        description:
                            "Chicken, Spinach, Cheese, Roasted Pepper, Pesto Mayo",
                        price: 11.85,
                    },
                    {
                        name: "Il Roast",
                        description:
                            "Beef, Spinach, Tomato, Caramelized Onion Cheese",
                        price: 11.85,
                    },
                    {
                        name: "Roma",
                        description:
                            "Roma Tomato, Pesto, Roasted Pepper, Spinach, Cheese",
                        price: 10.0,
                    },
                    {
                        name: "Rustico",
                        description:
                            "Turkey Breast, Tomato, Spinach, Cheese, Mayo",
                        price: 11.75,
                    },
                    {
                        name: "Verdura",
                        description:
                            "Portobello, Zucchini, Pepper, Pesto Oil, Spinach",
                        price: 10.4,
                    },
                    {
                        name: "Extra Chicken",
                        price: 3.0,
                    },
                ],
            },
            {
                name: "Pita Rollups",
                description: "",
                items: [
                    {
                        name: "Lamb Kabab Rollup",
                        description:
                            "Moroccan Lamb, Lettuce, Tomato, Humus, Tahini",
                        price: 11.95,
                    },
                    {
                        name: "Chicken Kabab Rollup",
                        description: "Lettuce, Tomato, Humus, Tahini",
                        price: 11.8,
                    },
                    {
                        name: "Beef Shawarma Rollup",
                        description: "Lettuce, Tomato, Humus, Tahini",
                        price: 11.95,
                    },
                    {
                        name: "Chicken Shawarma Rollup",
                        description: "Lettuce, Tomato, Humus, Tahini",
                        price: 11.8,
                    },
                    {
                        name: "Kafta Rollup",
                        description:
                            "Ground Beef, Lettuce, Tomato, Humus, Tahini",
                        price: 11.7,
                    },
                    {
                        name: "Kafta Egg Rollup",
                        description: "Lettuce, Tomato, Humus, Tahini, Egg",
                        price: 11.85,
                    },
                    {
                        name: "Falafel Rollup",
                        description: "Lettuce, Tomato, Humus, Tahini",
                        price: 9.95,
                    },
                ],
            },
        ],
    },
    {
        name: "Salads & Plates",
        description: "Low calories",
        subCategories: [
            {
                name: "Salads",
                description: "",
                items: [
                    {
                        name: "Grilled Lamb Salad",
                        description: "Over Greek Salad",
                        price: 13.95,
                    },
                    {
                        name: "Greek Chicken Salad",
                        description: "Chicken Over Greek Salad",
                        price: 13.7,
                    },
                    {
                        name: "House Chicken Salad",
                        description: "Chicken Over House Salad",
                        price: 13.5,
                    },
                    {
                        name: "Chicken Shawarma Salad",
                        description: "Over Greek Salad - Hummus",
                        price: 13.7,
                    },
                    {
                        name: "Chicken Kabab Salad",
                        description: "Over Greek Salad -Hummus",
                        price: 13.7,
                    },
                    {
                        name: "Falafel Salad",
                        description: "Over Greek Salad -Hummus",
                        price: 13.75,
                    },
                ],
            },
            {
                name: "Plates",
                description: "Served with salad, rice, and herb potato",
                items: [
                    {
                        name: "Lamb Kabab",
                        small: 13.25,
                        large: 19.85,
                    },
                    {
                        name: "Chicken Kabab",
                        small: 13.65,
                        large: 18.9,
                    },
                    {
                        name: "Beef Shawarma",
                        small: 13.8,
                        large: 18.95,
                    },
                    {
                        name: "Chicken Shawarma",
                        small: 13.65,
                        large: 18.9,
                    },
                    {
                        name: "Kafta Kabab",
                        small: 13.7,
                        large: 18.9,
                    },
                    {
                        name: "Falafel",
                        small: 13.5,
                        large: 16.25,
                    },
                ],
            },
            {
                name: "Pasta Dishes",
                description: "",
                items: [
                    {
                        name: "Mediterranean Pasta",
                        description:
                            "Chicken, Sundried Tomato, Roasted Pepper, Spinach, Garlic, Olive Oil",
                        price: 18.9,
                    },
                    {
                        name: "Chicken Pesto",
                        description: "Chicken, Pesto Cream Sauce, Linguine",
                        price: 18.9,
                    },
                    {
                        name: "BU Special",
                        description:
                            "Chicken, Garlic Oil, Onion, Mushroom, Zucchini, Tomato",
                        price: 18.9,
                    },
                    {
                        name: "Chicken Florentine",
                        description: "Chicken, Spinach, Tomato in Cream Sauce",
                        price: 18.8,
                    },
                ],
            },
        ],
    },
];
