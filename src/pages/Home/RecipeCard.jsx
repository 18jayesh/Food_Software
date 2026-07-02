import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
    UserCircle2,
    Play,
    MoreHorizontal
} from "lucide-react";

import RecipeActions from "./RecipeActions";
import LazyImage from "../../components/Common/LazyImage";

function RecipeCard({

    recipe,

    refreshRecipes

}) {

    const navigate = useNavigate();

    const hasVideo = useMemo(() => {

        return recipe.video && recipe.video.trim() !== "";

    }, [recipe.video]);

    const handleRecipeClick = () => {

        navigate(`/recipe/${recipe.recipeId}`);

    };

    return (

        <motion.article

            whileHover={{ y: -4 }}

            transition={{ duration: 0.25 }}

            className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-sm
                border
                border-gray-100
            "

        >

            {/* ================= Header ================= */}

            <div className="flex items-center justify-between p-4">

                <div className="flex items-center gap-3">

                    <UserCircle2

                        size={42}

                        className="text-orange-500"

                    />

                    <div>

                        <h3 className="font-semibold text-gray-900">

                            {recipe.authorName}

                        </h3>

                        <p className="text-xs text-gray-500">

                            {recipe.timeAgo}

                        </p>

                    </div>

                </div>

                <button>

                    <MoreHorizontal

                        size={22}

                        className="text-gray-500"

                    />

                </button>

            </div>

            {/* ================= Recipe Image ================= */}

            <div

                onClick={handleRecipeClick}

                className="
                    relative
                    cursor-pointer
                    overflow-hidden
                "

            >

                <LazyImage

                    src={recipe.image}

                    alt={recipe.title}

                    className="
                        w-full
                        h-72
                        transition-transform
                        duration-500
                        hover:scale-105
                    "

                />

                {

                    hasVideo && (

                        <div

                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                            "

                        >

                            <div

                                className="
                                    w-16
                                    h-16
                                    rounded-full
                                    bg-white/80
                                    backdrop-blur-md
                                    flex
                                    items-center
                                    justify-center
                                "

                            >

                                <Play

                                    size={28}

                                    className="text-orange-500 ml-1"

                                />

                            </div>

                        </div>

                    )

                }

            </div>

            {/* ================= Actions ================= */}

            <div className="px-4 pt-4">

                <RecipeActions

                    recipe={recipe}

                    refreshRecipes={refreshRecipes}

                />

            </div>

        </motion.article>

    );

}

export default memo(RecipeCard);