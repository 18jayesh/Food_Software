export default function filterRecipes(

    recipes,

    search,

    category

) {

    let filtered = [...recipes];

    // ==========================
    // Search
    // ==========================

    if (search?.trim()) {

        const keyword = search

            .trim()

            .toLowerCase();

        filtered = filtered.filter((recipe) => {

            const ingredients =

                Array.isArray(recipe.ingredients)

                    ? recipe.ingredients.join(" ").toLowerCase()

                    : "";

            const tags =

                Array.isArray(recipe.tags)

                    ? recipe.tags.join(" ").toLowerCase()

                    : "";

            return (

                recipe.title?.toLowerCase().includes(keyword) ||

                recipe.description?.toLowerCase().includes(keyword) ||

                recipe.category?.toLowerCase().includes(keyword) ||

                recipe.userName?.toLowerCase().includes(keyword) ||

                recipe.cuisine?.toLowerCase().includes(keyword) ||

                recipe.difficulty?.toLowerCase().includes(keyword) ||

                ingredients.includes(keyword) ||

                tags.includes(keyword)

            );

        });

    }

    // ==========================
    // Category Filter
    // ==========================

    if (

        category &&

        category !== "All"

    ) {

        filtered = filtered.filter(

            (recipe) =>

                recipe.category

                    ?.trim()

                    .toLowerCase()

                    ===

                category

                    .trim()

                    .toLowerCase()

        );

    }

    return filtered;

}