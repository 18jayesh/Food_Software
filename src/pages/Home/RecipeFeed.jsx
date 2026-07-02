import { useEffect, useMemo, useRef, useState } from "react";

import { useSearch } from "../../context/SearchContext";

import useRecipes from "../../hooks/useRecipes";
import filterRecipes from "../../utils/filterRecipes";

import RecipeCard from "./RecipeCard";
import RecipeSkeleton from "./RecipeSkeleton";
import EmptyFeed from "./EmptyFeed";

const RECIPES_PER_LOAD = 6;

export default function RecipeFeed() {

    const { search, category } = useSearch();

    const { recipes, loading } = useRecipes();

    const filteredRecipes = useMemo(() => {

        return filterRecipes(

            recipes,

            search,

            category

        );

    }, [

        recipes,

        search,

        category

    ]);

    const [visibleCount, setVisibleCount] = useState(RECIPES_PER_LOAD);

    const loaderRef = useRef(null);

    const isLoadingMore = useRef(false);

    // ==========================
    // Reset when Search/Filter changes
    // ==========================

    useEffect(() => {

        setVisibleCount(RECIPES_PER_LOAD);

    }, [

        search,

        category

    ]);

    // ==========================
    // Infinite Feed
    // ==========================

    useEffect(() => {

        const target = loaderRef.current;

        if (!target) return;

        const observer = new IntersectionObserver(

            (entries) => {

                const entry = entries[0];

                if (

                    !entry.isIntersecting ||

                    isLoadingMore.current ||

                    visibleCount >= filteredRecipes.length

                ) {

                    return;

                }

                isLoadingMore.current = true;

                setTimeout(() => {

                    setVisibleCount((prev) =>

                        Math.min(

                            prev + RECIPES_PER_LOAD,

                            filteredRecipes.length

                        )

                    );

                    isLoadingMore.current = false;

                }, 200);

            },

            {

                rootMargin: "400px",

                threshold: 0

            }

        );

        observer.observe(target);

        return () => observer.disconnect();

    }, [

        visibleCount,

        filteredRecipes.length

    ]);

    // ==========================
    // Loading
    // ==========================

    if (loading) {

        return (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">

                {

                    Array.from({ length: 6 }).map((_, index) => (

                        <RecipeSkeleton key={index} />

                    ))

                }

            </div>

        );

    }

    // ==========================
    // Empty
    // ==========================

    if (filteredRecipes.length === 0) {

        return (

            <EmptyFeed

                title="No Recipes Found"

                description="Try another recipe name or category."

            />

        );

    }

    // ==========================
    // UI
    // ==========================

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

                visibleCount < filteredRecipes.length && (

                    <>

                        <div

                            ref={loaderRef}

                            className="h-10"

                        />

                        <div

                            className="
                                mt-6
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                xl:grid-cols-3
                                gap-6
                            "

                        >

                            {

                                Array.from({ length: 3 }).map((_, index) => (

                                    <RecipeSkeleton key={index} />

                                ))

                            }

                        </div>

                    </>

                )

            }

        </section>

    );

}