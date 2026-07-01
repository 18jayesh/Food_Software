import { useEffect, useMemo, useState } from "react";
import SearchFilterBar from "../../pages/MyRecipes/SearchFilterBar";

import { getMyRecipes } from "../../services/myRecipeService";

import RecipeCard from "./RecipeCard";
import EmptyRecipe from "./EmptyRecipe";

export default function MyRecipes() {

    const [recipes, setRecipes] = useState([]);

    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({

        search: "",

        category: "All",

        difficulty: "All",

        visibility: "All",

        status: "All"

    });

    useEffect(() => {

        loadRecipes();

    }, []);

    async function loadRecipes() {

        try {

            setLoading(true);

            const data = await getMyRecipes();

            setRecipes(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }
const filteredRecipes = useMemo(() => {

    return recipes.filter((recipe) => {

        const matchSearch =

            recipe.title
                ?.toLowerCase()
                .includes(filters.search.toLowerCase());

        const matchCategory =

            filters.category === "All" ||

            recipe.category === filters.category;

        const matchDifficulty =

            filters.difficulty === "All" ||

            recipe.difficulty === filters.difficulty;

        const matchVisibility =

            filters.visibility === "All" ||

            recipe.visibility === filters.visibility.toLowerCase();

        const matchStatus =

            filters.status === "All" ||

            recipe.status === filters.status.toLowerCase();

        return (

            matchSearch &&

            matchCategory &&

            matchDifficulty &&

            matchVisibility &&

            matchStatus

        );

    });

}, [recipes, filters]);

    if (loading) {

        return (

            <div className="flex justify-center py-20">

                <div className="text-lg font-semibold">

                    Loading Recipes...

                </div>

            </div>

        );

    }

    return (

        <div className="space-y-8">

            {/* Header */}

            <div>

                <h1 className="text-3xl font-bold">

                    My Recipes

                </h1>

                <p className="text-gray-500 mt-2">

                    Manage all your published recipes.

                </p>

            </div>

            
            {/* Search & Filters */}

            <SearchFilterBar

                filters={filters}

                setFilters={setFilters}

            />

            {/* Content */}

            {

                filteredRecipes.length === 0

                    ?

                    <EmptyRecipe />

                    :

                    <div
                        className="
                            grid
                            lg:grid-cols-3
                            md:grid-cols-2
                            gap-6
                        "
                    >

                        {

                            filteredRecipes.map(recipe => (

                                <RecipeCard

                                    key={recipe.recipeId}

                                    recipe={recipe}

                                    refreshRecipes={loadRecipes}

                                />

                            ))

                        }

                    </div>

            }

        </div>

    );

}