import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const initial = {
    1: {
        "id": 1,
        "selected": false,

        "ingredient": "Mozzarella",
        "description": "Mild creamy stretchy cheese",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": true,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    2: {
        "id": 2,
        "selected": false,

        "ingredient": "Cheddar",
        "description": "Sharp English cheese",

        "isBase": false,
        "isSauce": true,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": true,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    3: {
        "id": 3,
        "selected": false,

        "ingredient": "Parmesan",
        "description": "Salty hard cheese from Italy",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": true,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    4: {
        "id": 4,
        "selected": false,

        "ingredient": "Pecorino",
        "description": "Salty hard Italian cheese",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": true,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    5: {
        "id": 5,
        "selected": false,

        "ingredient": "Feta",
        "description": "Sharp crumbly Greek cheese",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": true,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    6: {
        "id": 6,
        "selected": false,

        "ingredient": "Goats' cheese",
        "description": "Soft sharp cheese from goats' milk",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": true,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    7: {
        "id": 7,
        "selected": false,

        "ingredient": "Gorgonzola",
        "description": "Pungent Italian cheese",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": true,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    8: {
        "id": 8,
        "selected": false,

        "ingredient": "Ricotta",
        "description": "Mild Italian soft cheese",

        "isBase": false,
        "isSauce": true,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": true,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    9: {
        "id": 9,
        "selected": false,

        "ingredient": "Béchamel",
        "description": "A creamy French sauce",

        "isBase": false,
        "isSauce": true,
        "isTopping": false,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": false,
        "isVegetarian": true,
        "isGlutenFree": false,
        "isKosher": true,
        "isHalal": true
    },
    10: {
        "id": 10,
        "selected": false,

        "ingredient": "Tomato",
        "description": "Common as a sauce or topping for traditional pizzas",

        "isBase": false,
        "isSauce": true,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    11: {
        "id": 11,
        "selected": false,

        "ingredient": "Sun-dried tomato",
        "description": "Intensely flavoured dried tomato",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    12: {
        "id": 12,
        "selected": false,

        "ingredient": "Cherry tomato",
        "description": "Small sweet variety of tomato",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    13: {
        "id": 13,
        "selected": false,

        "ingredient": "Onion",
        "description": "Strong-flavoured white onion",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    14: {
        "id": 14,
        "selected": false,

        "ingredient": "Red onion",
        "description": "Slightly milder sweeter variety of onion",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    15: {
        "id": 15,
        "selected": false,

        "ingredient": "Caramelised onion",
        "description": "Sweet and soft cooked onion",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    16: {
        "id": 16,
        "selected": false,

        "ingredient": "Bell pepper",
        "description": "Green, red and yellow sweet pepper",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    17: {
        "id": 17,
        "selected": false,

        "ingredient": "Green olive",
        "description": "Salty olive",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    18: {
        "id": 18,
        "selected": false,

        "ingredient": "Black olive",
        "description": "Milder olive",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    19: {
        "id": 19,
        "selected": false,

        "ingredient": "Caper",
        "description": "Salty berry",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    20: {
        "id": 20,
        "selected": false,

        "ingredient": "Artichoke",
        "description": "Salty and soft",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    21: {
        "id": 21,
        "selected": false,

        "ingredient": "Aubergine",
        "description": "Mild-tasting fleshy porous vegetable",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    22: {
        "id": 22,
        "selected": false,

        "ingredient": "Mushroom",
        "description": "Earthy fungi",

        "isBase": false,
        "isSauce": true,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": true,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    23: {
        "id": 23,
        "selected": false,

        "ingredient": "Courgette",
        "description": "Green mild-tasting squash variety",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    24: {
        "id": 24,
        "selected": false,

        "ingredient": "Asparagus",
        "description": "Slightly crisp green stem",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    25: {
        "id": 25,
        "selected": false,

        "ingredient": "Cauliflower",
        "description": "Crumbly earthy white flouret",

        "isBase": true,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    26: {
        "id": 26,
        "selected": false,

        "ingredient": "Sweetcorn",
        "description": "Small sweet yellow kernels of corn",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    27: {
        "id": 27,
        "selected": false,

        "ingredient": "Potato",
        "description": "Earthy mild tuber",

        "isBase": true,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    28: {
        "id": 28,
        "selected": false,

        "ingredient": "Pineapple",
        "description": "Sweet and acidic exotic fruit",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    29: {
        "id": 29,
        "selected": false,

        "ingredient": "Chilli pepper",
        "description": "Spicy pepper",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    30: {
        "id": 30,
        "selected": false,

        "ingredient": "Jalapeño pepper",
        "description": "Milder spicy pickled pepper",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    31: {
        "id": 31,
        "selected": false,

        "ingredient": "Garlic",
        "description": "Pungent, strongly-flavoured bulb",

        "isBase": false,
        "isSauce": true,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    32: {
        "id": 32,
        "selected": false,

        "ingredient": "Spinach",
        "description": "Green leaf",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": true,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    33: {
        "id": 33,
        "selected": false,

        "ingredient": "Rocket",
        "description": "Mildly peppery leaf",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": true,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    34: {
        "id": 34,
        "selected": false,

        "ingredient": "Lambs' lettuce",
        "description": "Crisp small leaf and stalk",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": true,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    35: {
        "id": 35,
        "selected": false,

        "ingredient": "Basil",
        "description": "Aromatic leaf herb",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    36: {
        "id": 36,
        "selected": false,

        "ingredient": "Oregano",
        "description": "Italian dried herb",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    37: {
        "id": 37,
        "selected": false,

        "ingredient": "Black pepper",
        "description": "Spicy ground dried peppercorns",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    38: {
        "id": 38,
        "selected": false,

        "ingredient": "Ground chilli",
        "description": "Spicy ground dried red chilli",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    39: {
        "id": 39,
        "selected": false,

        "ingredient": "Chilli oil",
        "description": "Spicy oil",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    40: {
        "id": 40,
        "selected": false,

        "ingredient": "Garlic oil",
        "description": "Flavoured oil",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    41: {
        "id": 41,
        "selected": false,

        "ingredient": "Truffle oil",
        "description": "Earthy rich oil",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    42: {
        "id": 42,
        "selected": false,

        "ingredient": "Balsamic reduction",
        "description": "Sharp and sweet dark vinegar",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    43: {
        "id": 43,
        "selected": false,

        "ingredient": "Pesto",
        "description": "Basil, pine nut and parmesan paste",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    44: {
        "id": 44,
        "selected": false,

        "ingredient": "Pine nut",
        "description": "Small earthy nut",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": true,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    45: {
        "id": 45,
        "selected": false,

        "ingredient": "Pulled pork",
        "description": "Soft, slow-cooked shredded pork",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": false,
        "isHalal": false
    },
    46: {
        "id": 46,
        "selected": false,

        "ingredient": "Chicken",
        "description": "Sliced free-range chicken",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": false,
        "isHalal": true
    },
    47: {
        "id": 47,
        "selected": false,

        "ingredient": "Chilli beef",
        "description": "Spicy minced chilli beef",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    48: {
        "id": 48,
        "selected": false,

        "ingredient": "Ham",
        "description": "Sliced smoked ham",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": false,
        "isHalal": false
    },
    49: {
        "id": 49,
        "selected": false,

        "ingredient": "Bacon",
        "description": "Crispy smoked streaky bacon",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": false,
        "isHalal": false
    },
    50: {
        "id": 50,
        "selected": false,

        "ingredient": "Prosciutto",
        "description": "Italian cured ham",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": false,
        "isHalal": false
    },
    51: {
        "id": 51,
        "selected": false,

        "ingredient": "Panchetta",
        "description": "Diced Italian ham",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": false,
        "isHalal": false
    },
    52: {
        "id": 52,
        "selected": false,

        "ingredient": "Chorizo",
        "description": "Spanish spicy cured pork sausage",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": false,
        "isHalal": false
    },
    53: {
        "id": 53,
        "selected": false,

        "ingredient": "Pepperoni",
        "description": "Spicy American pork and beef sausage",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": false,
        "isHalal": false
    },
    54: {
        "id": 54,
        "selected": false,

        "ingredient": "Meatball",
        "description": "Minced beef meatball",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": true,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    55: {
        "id": 55,
        "selected": false,

        "ingredient": "King prawn",
        "description": "Large juicy prawn",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": true,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    56: {
        "id": 56,
        "selected": false,

        "ingredient": "Anchovy",
        "description": "Small salty fish",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": true,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    57: {
        "id": 57,
        "selected": false,

        "ingredient": "Smoked Salmon",
        "description": "Sliced smoked cured salmon",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": true,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    58: {
        "id": 58,
        "selected": false,

        "ingredient": "Tuna",
        "description": "Tinned tuna steak",

        "isBase": false,
        "isSauce": false,
        "isTopping": true,

        "isMeat": false,
        "isFish": true,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    59: {
        "id": 59,
        "selected": false,

        "ingredient": "Thin crust",
        "description": "Thin crispy bread crust",

        "isBase": true,
        "isSauce": false,
        "isTopping": false,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": false,
        "isKosher": true,
        "isHalal": true
    },
    60: {
        "id": 60,
        "selected": false,

        "ingredient": "Deep pan",
        "description": "Thick chewy bread crust",

        "isBase": true,
        "isSauce": false,
        "isTopping": false,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": false,
        "isKosher": true,
        "isHalal": true
    },
    61: {
        "id": 61,
        "selected": false,

        "ingredient": "Cauliflower base",
        "description": "Gluten-free cauliflower crust",

        "isBase": true,
        "isSauce": false,
        "isTopping": false,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    62: {
        "id": 62,
        "selected": false,

        "ingredient": "Gluten-free",
        "description": "Crisp bread crust made with a mixture of non-gluten flours",

        "isBase": true,
        "isSauce": false,
        "isTopping": false,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    },
    63: {
        "id": 63,
        "selected": false,

        "ingredient": "Mozzarella-stuffed crust",
        "description": "Thin crust bread with stuffed crust",

        "isBase": true,
        "isSauce": false,
        "isTopping": false,

        "isMeat": false,
        "isFish": false,
        "isCheese": true,
        "isVegetable": false,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": false,
        "isVegetarian": false,
        "isGlutenFree": false,
        "isKosher": true,
        "isHalal": true
    },
    64: {
        "id": 64,
        "selected": false,

        "ingredient": "Garlic-stuffed crust",
        "description": "Thin crust bread with stuffed crust",

        "isBase": true,
        "isSauce": false,
        "isTopping": false,

        "isMeat": false,
        "isFish": false,
        "isCheese": false,
        "isVegetable": true,
        "isSalad": false,
        "isFungi": false,
        "isExtra": false,
        
        "isVegan": true,
        "isVegetarian": true,
        "isGlutenFree": true,
        "isKosher": true,
        "isHalal": true
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initial, composeEnhancers(applyMiddleware(thunk)));

export default store;