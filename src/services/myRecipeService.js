import { ref, get } from "firebase/database";
import { auth, db } from "../firebase/firebaseConfig";

export async function getMyRecipes() {

    try {

        const user = auth.currentUser;

        if (!user) {

            throw new Error("User not logged in");

        }

        const snapshot = await get(ref(db, "recipes"));

        if (!snapshot.exists()) {

            return [];

        }

        const data = snapshot.val();

        const recipes = Object.values(data)
            .filter(recipe => recipe.createdBy === user.uid)
            .sort((a, b) => b.createdAt - a.createdAt);

        return recipes;

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}