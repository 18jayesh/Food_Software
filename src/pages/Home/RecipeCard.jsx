import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    UserCircle2,
    Heart,
    MessageCircle,
    Bookmark,
    Play,
    MoreHorizontal
} from "lucide-react";
import RecipeActions from "./RecipeActions";
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebaseConfig";
import LazyImage from "../../components/Common/LazyImage";
export default function RecipeCard({

    recipe,

    refreshRecipes

}) {
    const [authorName, setAuthorName] = useState("Loading...");
    const navigate = useNavigate();
    useEffect(() => {

        async function loadUser() {

            if (!recipe.createdBy) return;

            try {

                const snapshot = await get(

                    ref(db, `users/${recipe.createdBy}`)

                );

                if (snapshot.exists()) {

                    const user = snapshot.val();

                    setAuthorName(user.name || "Unknown User");

                }

                else {

                    setAuthorName("Unknown User");

                }

            }

            catch (error) {

                console.log(error);

                setAuthorName("Unknown User");

            }

        }

        loadUser();

    }, [recipe.createdBy]);
    const hasVideo =
        recipe.video &&
        recipe.video.trim() !== "";

    return (

        <motion.article

            whileHover={{
                y: -4
            }}

            transition={{
                duration: .25
            }}

            className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-sm
                border
                border-gray-100
            "

        >

            {/* Header */}

            <div className="flex items-center justify-between p-4">

                <div className="flex items-center gap-3">

                    <UserCircle2

                        size={42}

                        className="text-orange-500"

                    />

                    <div>

                        <h3 className="font-semibold text-gray-900">

                            {authorName}

                        </h3>

                        <p className="text-xs text-gray-500">

                            2 hours ago

                        </p>

                    </div>

                </div>

                <button>

                    <MoreHorizontal

                        size={22}

                        className="text-gray-500"

                    />

                </button>

            </div>

            {/* Image */}

            <div

                onClick={() =>

                    navigate(`/recipe/${recipe.recipeId}`)

                }

                className="
                    relative
                    cursor-pointer
                "

            >

                <LazyImage

                    src={recipe.image}

                    alt={recipe.title}

                    className="

                        w-full

                        h-72

                        hover:scale-105

                        transition-transform

                        duration-500

                    "

                />

                {

                    hasVideo &&

                    <div

                        className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                        "

                    >

                        <div

                            className="
                                w-16
                                h-16
                                rounded-full
                                bg-white/80
                                backdrop-blur-md
                                flex
                                items-center
                                justify-center
                            "

                        >

                            <Play

                                size={28}

                                className="text-orange-500 ml-1"

                            />

                        </div>

                    </div>

                }

            </div>
            {/* ================= Actions ================= */}

            <div className="px-4 pt-4">

                <RecipeActions

                    recipe={recipe}

                    refreshRecipes={refreshRecipes}

                />

            </div>

        </motion.article>

    );

}