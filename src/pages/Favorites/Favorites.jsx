import { useEffect, useState } from "react";

import {
    getFavoriteRecipes
} from "../../services/recipeService";

import RecipeCard from "../Home/RecipeCard";

import RecipeSkeleton from "../Home/RecipeSkeleton";

import EmptyFeed from "../Home/EmptyFeed";

export default function Favorites() {

    const [recipes, setRecipes] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadFavorites();

    }, []);

    async function loadFavorites() {

        try {

            setLoading(true);

            const data = await getFavoriteRecipes();

            setRecipes(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

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

                    Array.from({ length: 6 }).map((_, index) => (

                        <RecipeSkeleton
                            key={index}
                        />

                    ))

                }

            </div>

        );

    }

    if (recipes.length === 0) {

        return (

            <EmptyFeed />

        );

    }

    return (

        <section>

            <h2

                className="
                    text-3xl
                    font-bold
                    text-center
                    mb-6
                "

            >

                My Favorite Recipes

            </h2>

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

                    recipes.map((recipe) => (

                        <RecipeCard

                            key={recipe.recipeId}

                            recipe={recipe}

                            refreshRecipes={loadFavorites}

                        />

                    ))

                }

            </div>

        </section>

    );

}