import { motion } from "framer-motion";
import {
    ChefHat,
    Clock3,
    Users,
    Minus,
    Plus,
    Check
} from "lucide-react";

import { useRecipe } from "../../context/CreateRecipeContext";

export default function DifficultySelector() {

    const {

        recipeData,

        setRecipeData

    } = useRecipe();

    const difficulties = [

        {
            id: "Easy",
            color: "bg-green-500",
            desc: "Perfect for Beginners"
        },

        {
            id: "Medium",
            color: "bg-yellow-500",
            desc: "Some Cooking Skills"
        },

        {
            id: "Hard",
            color: "bg-red-500",
            desc: "For Expert Chefs"
        }

    ];

    const updateDifficulty = (value) => {

        setRecipeData({

            ...recipeData,

            difficulty: value

        });

    };

    const increaseTime = () => {

        setRecipeData({

            ...recipeData,

            cookingTime: recipeData.cookingTime + 5

        });

    };

    const decreaseTime = () => {

        if (recipeData.cookingTime <= 5) return;

        setRecipeData({

            ...recipeData,

            cookingTime: recipeData.cookingTime - 5

        });

    };

    const increaseServing = () => {

        setRecipeData({

            ...recipeData,

            servings: recipeData.servings + 1

        });

    };

    const decreaseServing = () => {

        if (recipeData.servings <= 1) return;

        setRecipeData({

            ...recipeData,

            servings: recipeData.servings - 1

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
                p-8
                shadow-lg
                border
                border-orange-100
            "

        >

            <h2 className="text-2xl font-bold mb-8">

                Recipe Details

            </h2>

            {/* Difficulty */}

            <div>

                <div className="flex items-center gap-2 mb-5">

                    <ChefHat
                        className="text-orange-500"
                        size={22}
                    />

                    <h3 className="font-semibold text-lg">

                        Difficulty

                    </h3>

                </div>

                <div className="grid md:grid-cols-3 gap-4">

                    {

                        difficulties.map((item) => (

                            <button

                                key={item.id}

                                type="button"

                                onClick={() =>
                                    updateDifficulty(item.id)
                                }

                                className={`
                                    relative
                                    rounded-2xl
                                    border-2
                                    p-5
                                    text-left
                                    transition-all
                                    duration-300

                                    ${
                                        recipeData.difficulty === item.id

                                            ? "border-orange-500 bg-orange-50"

                                            : "border-gray-200 hover:border-orange-300"
                                    }
                                `}
                            >

                                {

                                    recipeData.difficulty === item.id && (

                                        <div
                                            className="
                                                absolute
                                                top-4
                                                right-4
                                                w-7
                                                h-7
                                                rounded-full
                                                bg-orange-500
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >

                                            <Check
                                                size={16}
                                                className="text-white"
                                            />

                                        </div>

                                    )

                                }

                                <div

                                    className={`
                                        w-4
                                        h-4
                                        rounded-full
                                        ${item.color}
                                    `}

                                />

                                <h4
                                    className="
                                        mt-4
                                        font-bold
                                    "
                                >
                                    {item.id}
                                </h4>

                                <p
                                    className="
                                        text-sm
                                        text-gray-500
                                        mt-2
                                    "
                                >
                                    {item.desc}
                                </p>

                            </button>

                        ))

                    }

                </div>

            </div>

            {/* Cooking Time */}

            <div className="mt-10">

                <div className="flex items-center gap-2 mb-4">

                    <Clock3
                        className="text-orange-500"
                        size={22}
                    />

                    <h3 className="font-semibold">

                        Cooking Time

                    </h3>

                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        bg-orange-50
                        rounded-2xl
                        p-4
                    "
                >

                    <button

                        type="button"

                        onClick={decreaseTime}

                        className="
                            w-11
                            h-11
                            rounded-xl
                            bg-white
                            shadow
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <Minus size={18} />

                    </button>

                    <h3 className="text-xl font-bold">

                        {recipeData.cookingTime} min

                    </h3>

                    <button

                        type="button"

                        onClick={increaseTime}

                        className="
                            w-11
                            h-11
                            rounded-xl
                            bg-orange-500
                            text-white
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <Plus size={18} />

                    </button>

                </div>

            </div>

            {/* Servings */}

            <div className="mt-8">

                <div className="flex items-center gap-2 mb-4">

                    <Users
                        className="text-orange-500"
                        size={22}
                    />

                    <h3 className="font-semibold">

                        Servings

                    </h3>

                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        bg-orange-50
                        rounded-2xl
                        p-4
                    "
                >

                    <button

                        type="button"

                        onClick={decreaseServing}

                        className="
                            w-11
                            h-11
                            rounded-xl
                            bg-white
                            shadow
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <Minus size={18} />

                    </button>

                    <h3 className="text-xl font-bold">

                        {recipeData.servings} People

                    </h3>

                    <button

                        type="button"

                        onClick={increaseServing}

                        className="
                            w-11
                            h-11
                            rounded-xl
                            bg-orange-500
                            text-white
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <Plus size={18} />

                    </button>

                </div>

            </div>

        </motion.div>

    );

}