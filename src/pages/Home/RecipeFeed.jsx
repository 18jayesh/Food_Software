import { useEffect, useRef, useState } from "react";

import { useSearch } from "../../context/SearchContext";

import useRecipes from "../../hooks/useRecipes";
import filterRecipes from "../../utils/filterRecipes";

import RecipeCard from "./RecipeCard";
import RecipeSkeleton from "./RecipeSkeleton";
import EmptyFeed from "./EmptyFeed";

const RECIPES_PER_LOAD = 6;

export default function RecipeFeed() {

    const {

        search,

        category

    } = useSearch();

    const {

        recipes,

        loading

    } = useRecipes();

    const filteredRecipes = filterRecipes(

        recipes,

        search,

        category

    );

    const [visibleCount, setVisibleCount] = useState(RECIPES_PER_LOAD);

    const loaderRef = useRef(null);

    // =============================
    // Reset when search/filter changes
    // =============================

    useEffect(() => {

        setVisibleCount(RECIPES_PER_LOAD);

    }, [

        search,

        category

    ]);

    // =============================
    // Infinite Progressive Render
    // =============================

    useEffect(() => {

        if (!loaderRef.current) return;

        const observer = new IntersectionObserver(

            (entries) => {

                const entry = entries[0];

                if (

                    entry.isIntersecting &&

                    visibleCount < filteredRecipes.length

                ) {

                    setTimeout(() => {

                        setVisibleCount((prev) =>

                            Math.min(

                                prev + RECIPES_PER_LOAD,

                                filteredRecipes.length

                            )

                        );

                    }, 300);

                }

            },

            {

                threshold: 0.3

            }

        );

        observer.observe(loaderRef.current);

        return () => observer.disconnect();

    }, [

        visibleCount,

        filteredRecipes.length

    ]);

    // =============================
    // Loading
    // =============================

    if (loading) {

        return (

            <div

                className="

                    grid

                    grid-cols-1

                    md:grid-cols-2

                    xl:grid-cols-3

                    gap-6

                    mt-6

                "

            >

                {

                    Array.from({

                        length: 6

                    }).map((_, index) => (

                        <RecipeSkeleton

                            key={index}

                        />

                    ))

                }

            </div>

        );

    }

    // =============================
    // Empty
    // =============================

    if (filteredRecipes.length === 0) {

        return (

            <EmptyFeed

                title="No Recipes Found"

                description="Try another recipe name or category."

            />

        );

    }

    // =============================
    // Render
    // =============================

    return (

        <section className="mt-6">

            <div

                className="

                    grid

                    grid-cols-1

                    md:grid-cols-2

                    xl:grid-cols-3

                    gap-6

                "

            >

                {

                    filteredRecipes

                        .slice(0, visibleCount)

                        .map((recipe) => (

                            <RecipeCard

                                key={recipe.recipeId}

                                recipe={recipe}

                            />

                        ))

                }

            </div>

            {

                visibleCount < filteredRecipes.length &&

                <div

                    ref={loaderRef}

                    className="

                        mt-8

                        grid

                        grid-cols-1

                        md:grid-cols-2

                        xl:grid-cols-3

                        gap-6

                    "

                >

                    {

                        Array.from({

                            length: 3

                        }).map((_, index) => (

                            <RecipeSkeleton

                                key={index}

                            />

                        ))

                    }

                </div>

            }

        </section>

    );

}