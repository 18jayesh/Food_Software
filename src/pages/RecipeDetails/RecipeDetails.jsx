import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRecipeById } from "../../services/recipeService";

import RecipeHeader from "./RecipeHeader";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

// import CommentSection from "./CommentSection";
// import RelatedRecipes from "./RelatedRecipes";

export default function RecipeDetails() {

    const { recipeId } = useParams();

    const [recipe, setRecipe] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadRecipe();

    }, [recipeId]);

    async function loadRecipe() {

        const data = await getRecipeById(recipeId);

        setRecipe(data);

        setLoading(false);

    }

    if (loading) {

        return (

            <div className="py-20 text-center">

                Loading...

            </div>

        );

    }

    if (!recipe) {

        return (

            <div className="py-20 text-center">

                Recipe Not Found

            </div>

        );

    }

    return (

        <div

            className="

                max-w-5xl

                mx-auto

                pb-28

            "

        >

            <RecipeHeader

                recipe={recipe}

            />

            <Ingredients

                ingredients={recipe.ingredients}

            />
            <Instructions
                    instructions={recipe.instructions}
            />
            {/*
                

                

                <CommentSection
                    recipe={recipe}
                />

                <RelatedRecipes
                    recipe={recipe}
                />
            */}

        </div>

    );

}