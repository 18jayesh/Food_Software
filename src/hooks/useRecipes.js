import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export default function useRecipes() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const recipesRef = ref(db, "recipes");

        const unsubscribe = onValue(recipesRef, (snapshot) => {

            if (!snapshot.exists()) {

                setRecipes([]);
                setLoading(false);

                return;

            }

            const data = snapshot.val();

            const recipeList = Object.values(data)

                .filter(recipe => recipe.status === "published")

                .sort((a, b) => b.createdAt - a.createdAt);

            setRecipes(recipeList);

            setLoading(false);

        });

        return () => unsubscribe();

    }, []);

    return {

        recipes,

        loading

    };

}