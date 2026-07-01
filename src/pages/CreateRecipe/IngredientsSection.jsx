import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    Package,
    Plus,
    Trash2
} from "lucide-react";

import { useRecipe } from "../../context/CreateRecipeContext";

export default function IngredientsSection() {

    const {

        recipeData,

        setRecipeData

    } = useRecipe();

    const [ingredientName, setIngredientName] = useState("");

    const [ingredientQty, setIngredientQty] = useState("");

    const addIngredient = () => {

        if (
            ingredientName.trim() === "" ||
            ingredientQty.trim() === ""
        ) {
            return;
        }

        const newIngredient = {

            id: Date.now(),

            name: ingredientName,

            quantity: ingredientQty

        };

        setRecipeData({

            ...recipeData,

            ingredients: [

                ...recipeData.ingredients,

                newIngredient

            ]

        });

        setIngredientName("");

        setIngredientQty("");

    };

    const deleteIngredient = (id) => {

        setRecipeData({

            ...recipeData,

            ingredients: recipeData.ingredients.filter(

                item => item.id !== id

            )

        });

    };

    return (

        <motion.div

            initial={{

                opacity: 0,

                y: 20

            }}

            animate={{

                opacity: 1,

                y: 0

            }}

            className="

                bg-white

                rounded-[30px]

                shadow-lg

                border

                border-orange-100

                p-8

            "

        >

            <div className="flex items-center gap-3 mb-8">

                <Package

                    className="text-orange-500"

                    size={24}

                />

                <h2 className="text-2xl font-bold">

                    Ingredients

                </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-4">

                <input

                    type="text"

                    placeholder="Ingredient Name"

                    value={ingredientName}

                    onChange={(e) =>
                        setIngredientName(e.target.value)
                    }

                    className="

                        h-14

                        px-5

                        rounded-2xl

                        border

                        border-orange-200

                        outline-none

                    "

                />

                <input

                    type="text"

                    placeholder="Quantity"

                    value={ingredientQty}

                    onChange={(e) =>
                        setIngredientQty(e.target.value)
                    }

                    className="

                        h-14

                        px-5

                        rounded-2xl

                        border

                        border-orange-200

                        outline-none

                    "

                />

            </div>

            <button

                type="button"

                onClick={addIngredient}

                className="

                    mt-5

                    px-6

                    py-3

                    rounded-2xl

                    bg-orange-500

                    text-white

                    font-semibold

                    flex

                    items-center

                    gap-2

                "

            >

                <Plus size={18} />

                Add Ingredient

            </button>

            <AnimatePresence>

                {

                    recipeData.ingredients.length > 0 && (

                        <div className="mt-8 space-y-4">

                            {

                                recipeData.ingredients.map((item) => (

                                    <motion.div

                                        key={item.id}

                                        initial={{

                                            opacity: 0,

                                            y: 15

                                        }}

                                        animate={{

                                            opacity: 1,

                                            y: 0

                                        }}

                                        exit={{

                                            opacity: 0,

                                            x: -100

                                        }}

                                        className="

                                            flex

                                            items-center

                                            justify-between

                                            rounded-2xl

                                            bg-orange-50

                                            p-5

                                        "

                                    >

                                        <div>

                                            <h3 className="font-bold">

                                                {item.name}

                                            </h3>

                                            <p className="text-gray-500">

                                                {item.quantity}

                                            </p>

                                        </div>

                                        <button

                                            onClick={() =>
                                                deleteIngredient(item.id)
                                            }

                                            className="

                                                w-11

                                                h-11

                                                rounded-xl

                                                bg-red-500

                                                text-white

                                                flex

                                                items-center

                                                justify-center

                                            "

                                        >

                                            <Trash2 size={18} />

                                        </button>

                                    </motion.div>

                                ))

                            }

                        </div>

                    )

                }

            </AnimatePresence>

        </motion.div>

    );

}