import { useState } from "react";
import { motion } from "framer-motion";
import {
    Tag,
    X,
    Plus
} from "lucide-react";

import { useRecipe } from "../../context/CreateRecipeContext";

export default function TagSelector() {

    const {

        recipeData,
        setRecipeData

    } = useRecipe();

    const [input, setInput] = useState("");

    // Add Tag

    const addTag = () => {

        const tag = input.trim();

        if (!tag) return;

        if (recipeData.tags.includes(tag)) {

            setInput("");
            return;

        }

        if (recipeData.tags.length >= 10) {

            alert("Maximum 10 tags allowed.");

            return;

        }

        setRecipeData({

            ...recipeData,

            tags: [

                ...recipeData.tags,

                tag

            ]

        });

        setInput("");

    };

    // Delete Tag

    const deleteTag = (tag) => {

        setRecipeData({

            ...recipeData,

            tags:

                recipeData.tags.filter(

                    (item) => item !== tag

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

            {/* Header */}

            <div className="flex items-center gap-4 mb-8">

                <div
                    className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-orange-100
                        flex
                        items-center
                        justify-center
                    "
                >

                    <Tag
                        size={28}
                        className="text-orange-500"
                    />

                </div>

                <div>

                    <h2 className="text-2xl font-bold">

                        Recipe Tags

                    </h2>

                    <p className="text-gray-500">

                        Add tags to improve recipe search.

                    </p>

                </div>

            </div>

            {/* Input */}

            <div className="flex gap-3">

                <input

                    type="text"

                    value={input}

                    onChange={(e) =>
                        setInput(e.target.value)
                    }

                    onKeyDown={(e) => {

                        if (

                            e.key === "Enter" ||

                            e.key === ","

                        ) {

                            e.preventDefault();

                            addTag();

                        }

                    }}

                    placeholder="Example : Healthy"

                    className="
                        flex-1
                        h-14
                        rounded-2xl
                        border
                        border-orange-200
                        px-5
                        outline-none
                        focus:border-orange-500
                    "

                />

                <button

                    onClick={addTag}

                    className="
                        w-14
                        rounded-2xl
                        bg-orange-500
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-orange-600
                        transition
                    "

                >

                    <Plus size={22} />

                </button>

            </div>

            {/* Tags */}

            <div className="mt-8 flex flex-wrap gap-3">

                {

                    recipeData.tags.length === 0 ?

                    (

                        <div
                            className="
                                w-full
                                h-36
                                rounded-3xl
                                border-2
                                border-dashed
                                border-orange-200
                                flex
                                items-center
                                justify-center
                                text-gray-400
                            "
                        >

                            No Tags Added

                        </div>

                    )

                    :

                    (

                        recipeData.tags.map((tag) => (

                            <div

                                key={tag}

                                className="
                                    px-5
                                    py-3
                                    rounded-full
                                    bg-orange-100
                                    text-orange-600
                                    font-medium
                                    flex
                                    items-center
                                    gap-3
                                "

                            >

                                {tag}

                                <button

                                    onClick={() =>
                                        deleteTag(tag)
                                    }

                                >

                                    <X size={16} />

                                </button>

                            </div>

                        ))

                    )

                }

            </div>

            {/* Counter */}

            <div className="mt-8 flex justify-between">

                <p className="text-gray-400 text-sm">

                    Press Enter or "," to add tag

                </p>

                <p className="font-semibold text-orange-500">

                    {recipeData.tags.length}/10

                </p>

            </div>

        </motion.div>

    );

}