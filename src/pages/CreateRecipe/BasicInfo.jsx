import { motion } from "framer-motion";
import {
    Utensils,
    AlignLeft,
    FolderOpen
} from "lucide-react";
import { useRecipe } from "../../context/CreateRecipeContext";
export default function BasicInfo() {

    const {

        recipeData,

        setRecipeData

    } = useRecipe();

    const categories = [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Dessert",
        "Snacks",
        "Drinks"
    ];

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
                p-8
                border
                border-orange-100
            "
        >

            <h2
                className="
                    text-2xl
                    font-bold
                    text-gray-800
                    mb-8
                "
            >
                Basic Information
            </h2>

            {/* Recipe Title */}

            <div className="mb-8">

                <label
                    className="
                        flex
                        items-center
                        gap-2
                        mb-3
                        font-semibold
                        text-gray-700
                    "
                >

                    <Utensils
                        size={18}
                    />

                    Recipe Title

                </label>

                <input
                    type="text"
                    placeholder="Ex. Creamy Garlic Pasta"
                    value={recipeData.title}
                    onChange={(e) =>
                        setRecipeData({
                            ...recipeData,
                            title: e.target.value
                        })
                    }
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-orange-200
                        p-4
                        outline-none
                        focus:border-orange-500
                        transition
                    "
                />

                <div
                    className="
                        text-right
                        mt-2
                        text-sm
                        text-gray-400
                    "
                >
                    {recipeData.title.length}/80
                </div>

            </div>

            {/* Description */}

            <div className="mb-8">

                <label
                    className="
                        flex
                        items-center
                        gap-2
                        mb-3
                        font-semibold
                        text-gray-700
                    "
                >

                    <AlignLeft
                        size={18}
                    />

                    Short Description

                </label>

                <textarea

                    rows={4}

                    placeholder="Write a short description..."

                    value={recipeData.description}

                    onChange={(e) =>
                        setRecipeData({
                            ...recipeData,
                            description: e.target.value
                        })
                    }

                    className="
                        w-full
                        rounded-2xl
                        border
                        border-orange-200
                        p-4
                        resize-none
                        outline-none
                        focus:border-orange-500
                    "
                />

                <div
                    className="
                        text-right
                        mt-2
                        text-sm
                        text-gray-400
                    "
                >
                    {recipeData.description.length}/250
                </div>

            </div>

            {/* Category */}

            <div>

                <label
                    className="
                        flex
                        items-center
                        gap-2
                        mb-5
                        font-semibold
                        text-gray-700
                    "
                >

                    <FolderOpen
                        size={18}
                    />

                    Select Category

                </label>

                <div
                    className="
                        grid
                        grid-cols-2
                        md:grid-cols-3
                        gap-4
                    "
                >

                    {

                        categories.map((category) => (

                            <motion.button

                                whileHover={{
                                    y: -4
                                }}

                                whileTap={{
                                    scale: 0.97
                                }}

                                key={category}

                                type="button"

                                onClick={() =>
                                    setRecipeData({
                                        ...recipeData,
                                        category: category
                                    })
                                }

                                className={`
                                
                                    rounded-2xl
                                    p-4
                                    border
                                    font-semibold
                                    transition-all

                                    ${
                                        recipeData.category === category

                                        ?

                                        `
                                        bg-orange-500
                                        text-white
                                        border-orange-500
                                        shadow-lg
                                        `

                                        :

                                        `
                                        bg-orange-50
                                        border-orange-100
                                        hover:border-orange-300
                                        hover:bg-orange-100
                                        `
                                    }

                                `}

                            >

                                {category}

                            </motion.button>

                        ))

                    }

                </div>

            </div>

        </motion.div>

    );

}