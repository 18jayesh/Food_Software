import {
    ref,
    set,
    remove,
    update,
    get,
    runTransaction
} from "firebase/database";

import {
    db,
    auth
} from "../firebase/firebaseConfig";

import {
    uploadImageToCloudinary
} from "./cloudinaryService";


// ==========================
// Save Recipe
// ==========================

export async function saveRecipe(recipeData) {

    const user = auth.currentUser;

    if (!user) {

        throw new Error("User not logged in");

    }

    const recipeId = `recipe_${Date.now()}`;

    let imageUrl = "";

    if (recipeData.image instanceof File) {

        imageUrl = await uploadImageToCloudinary(recipeData.image);

    } else {

        imageUrl = recipeData.image || "";

    }

    const recipe = {

        recipeId,

        createdBy: user.uid,

        authorName: user.displayName || "",

        authorEmail: user.email,

        title: recipeData.title,

        description: recipeData.description,

        category: recipeData.category,

        difficulty: recipeData.difficulty,

        cookingTime: recipeData.cookingTime,

        servings: recipeData.servings,

        image: imageUrl,

        video: recipeData.video,

        ingredients: recipeData.ingredients,

        instructions: recipeData.instructions,

        tags: recipeData.tags,

        visibility: recipeData.visibility,

        status: "published",

        createdAt: Date.now(),

        updatedAt: Date.now()

    };

    await set(

        ref(db, `recipes/${recipeId}`),

        recipe

    );

    return {

        success: true,

        recipeId

    };

}



// ==========================
// Update Recipe
// ==========================

export async function updateRecipe(recipeId, recipeData) {

    try {

        let imageUrl = recipeData.image;

        // જો નવી image પસંદ કરવામાં આવી હોય તો Cloudinary પર upload કર
        if (recipeData.image instanceof File) {

            imageUrl = await uploadImageToCloudinary(recipeData.image);

        }

        const updatedRecipe = {

            ...recipeData,

            image: imageUrl,

            updatedAt: Date.now()

        };

        await update(

            ref(db, `recipes/${recipeId}`),

            updatedRecipe

        );

        return {

            success: true

        };

    }

    catch (error) {

        console.error(error);

        return {

            success: false,

            error: error.message

        };

    }

}



// ==========================
// Delete Recipe
// ==========================

export async function deleteRecipe(recipeId) {

    try {

        await remove(

            ref(db, `recipes/${recipeId}`)

        );

        return {

            success: true

        };

    }

    catch (error) {

        console.error(error);

        return {

            success: false,

            error: error.message

        };

    }

}
// ==========================
// Get All Published Recipes
// ==========================

export async function getAllRecipes() {

    try {

        const snapshot = await get(

            ref(db, "recipes")

        );

        if (!snapshot.exists()) {

            return [];

        }

        const data = snapshot.val();

        const recipes = Object.values(data)

            .filter(recipe =>

                recipe.status === "published"

            )

            .sort(

                (a, b) =>

                    b.createdAt - a.createdAt

            );

        return recipes;

    }

    catch (error) {

        console.error(error);

        return [];

    }

}

// ==========================
// Toggle Like
// ==========================

export async function toggleLike(recipeId) {

    try {

        const user = auth.currentUser;

        if (!user) {

            throw new Error("User not logged in");

        }

        const likeRef = ref(

            db,

            `recipes/${recipeId}/likes/${user.uid}`

        );

        const snapshot = await get(likeRef);

        if (snapshot.exists()) {

            await remove(likeRef);

            return false;

        }

        await set(

            likeRef,

            true

        );

        return true;

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}

// ==========================
// Get Like Count
// ==========================

export function getLikeCount(recipe) {

    if (!recipe.likes) {

        return 0;

    }

    return Object.keys(

        recipe.likes

    ).length;

}
// ==========================
// Check User Liked
// ==========================

export function isLiked(recipe) {

    const user = auth.currentUser;

    if (!user) {

        return false;

    }

    return !!recipe.likes?.[user.uid];

}
// ==========================
// Toggle Favorite
// ==========================

export async function toggleFavorite(recipeId) {

    try {

        const user = auth.currentUser;

        if (!user) {

            throw new Error("User not logged in");

        }

        const favoriteRef = ref(

            db,

            `users/${user.uid}/favorites/${recipeId}`

        );

        const snapshot = await get(

            favoriteRef

        );

        if (snapshot.exists()) {

            await remove(

                favoriteRef

            );

            return false;

        }

        await set(

            favoriteRef,

            true

        );

        return true;

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}
// ==========================
// Check Favorite
// ==========================

export async function isFavorite(recipeId) {

    try {

        const user = auth.currentUser;

        if (!user) {

            return false;

        }

        const snapshot = await get(

            ref(

                db,

                `users/${user.uid}/favorites/${recipeId}`

            )

        );

        return snapshot.exists();

    }

    catch (error) {

        console.error(error);

        return false;

    }

}
// ==========================
// Get Favorite Recipe Ids
// ==========================

export async function getFavoriteRecipeIds() {

    try {

        const user = auth.currentUser;

        if (!user) {

            return [];

        }

        const snapshot = await get(

            ref(

                db,

                `users/${user.uid}/favorites`

            )

        );

        if (!snapshot.exists()) {

            return [];

        }

        return Object.keys(

            snapshot.val()

        );

    }

    catch (error) {

        console.error(error);

        return [];

    }

}
// ==========================
// Get Favorite Recipes
// ==========================

export async function getFavoriteRecipes() {

    try {

        const favoriteIds = await getFavoriteRecipeIds();

        if (favoriteIds.length === 0) {

            return [];

        }

        const snapshot = await get(

            ref(db, "recipes")

        );

        if (!snapshot.exists()) {

            return [];

        }

        const recipes = Object.values(

            snapshot.val()

        );

        return recipes.filter(recipe =>

            favoriteIds.includes(

                recipe.recipeId

            )

        );

    }

    catch (error) {

        console.error(error);

        return [];

    }

}
// ==========================
// Get My Recipes
// ==========================

export async function getMyRecipes() {

    try {

        const user = auth.currentUser;

        if (!user) {

            return [];

        }

        const snapshot = await get(

            ref(db, "recipes")

        );

        if (!snapshot.exists()) {

            return [];

        }

        const recipes = Object.values(

            snapshot.val()

        );

        return recipes.filter(

            recipe => recipe.createdBy === user.uid

        );

    }

    catch (error) {

        console.error(error);

        return [];

    }

}
// ==========================
// Get Favorite Count
// ==========================

export async function getFavoriteCount() {

    try {

        const favoriteIds = await getFavoriteRecipeIds();

        return favoriteIds.length;

    }

    catch (error) {

        console.error(error);

        return 0;

    }

}
// ==========================
// Get Total Likes
// ==========================

export async function getTotalLikes() {

    try {

        const myRecipes = await getMyRecipes();

        let totalLikes = 0;

        myRecipes.forEach((recipe) => {

            if (recipe.likes) {

                totalLikes += Object.keys(

                    recipe.likes

                ).length;

            }

        });

        return totalLikes;

    }

    catch (error) {

        console.error(error);

        return 0;

    }

}
// ==========================
// Get Recipe By Id
// ==========================

export async function getRecipeById(recipeId) {

    try {

        const snapshot = await get(

            ref(

                db,

                `recipes/${recipeId}`

            )

        );

        if (!snapshot.exists()) {

            return null;

        }

        return snapshot.val();

    }

    catch (error) {

        console.error(error);

        return null;

    }

}