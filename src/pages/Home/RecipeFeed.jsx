import { useSearch } from "../../context/SearchContext";

import useRecipes from "../../hooks/useRecipes";
import filterRecipes from "../../utils/filterRecipes";

import RecipeCard from "./RecipeCard";
import RecipeSkeleton from "./RecipeSkeleton";
import EmptyFeed from "./EmptyFeed";

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

    // ==========================
    // Loading
    // ==========================

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

    // ==========================
    // Empty Result
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
    // Recipes
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

                    filteredRecipes.map((recipe) => (

                        <RecipeCard

                            key={recipe.recipeId}

                            recipe={recipe}

                        />

                    ))

                }

            </div>

        </section>

    );

}