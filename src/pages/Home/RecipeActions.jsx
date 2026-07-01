import {

    useState,

    useEffect

} from "react";
import { createPortal } from "react-dom";
import {
    Heart,
    MessageCircle,
    Bookmark
} from "lucide-react";
import CommentModal from "../RecipeDetails/CommentModal";
import {

    toggleLike,

    getLikeCount,

    isLiked,

    toggleFavorite,

    isFavorite

} from "../../services/recipeService";

export default function RecipeActions({

    recipe,

    refreshRecipes

}) {

    const [

        liked,

        setLiked

    ] = useState(

        isLiked(recipe)

    );

    const [

        likeCount,

        setLikeCount

    ] = useState(

        getLikeCount(recipe)

    );
    const [

        showComments,

        setShowComments

    ] = useState(false);

    const [

        saved,

        setSaved

    ] = useState(false);

    useEffect(() => {

        async function checkFavorite() {

            const result = await isFavorite(

                recipe.recipeId

            );

            setSaved(result);

        }

        checkFavorite();

    }, [

        recipe.recipeId

    ]);

    async function handleLike() {

        try {

            const result = await toggleLike(

                recipe.recipeId

            );

            setLiked(result);

            setLikeCount((prev) =>

                result

                    ? prev + 1

                    : prev - 1

            );

        }

        catch (error) {

            console.error(error);

        }

    }

    async function handleSave() {

        try {

            const result = await toggleFavorite(

                recipe.recipeId

            );

            setSaved(result);

            // Favorites page માંથી remove થાય ત્યારે page refresh કર
            if (!result && refreshRecipes) {

                refreshRecipes();

            }

        }

        catch (error) {

            console.error(error);

        }

    }

    return (

        <div

            className="

                flex

                items-center

                justify-between

                mt-4

            "

        >


            <div

                className="

                    flex

                    items-center

                    gap-6

                "

            >
                {/* ❤️ Like */}

                <button

                    onClick={handleLike}

                    className="
                        flex
                        items-center
                        gap-2
                        transition-all
                        duration-300
                    "

                >

                    <Heart

                        size={22}

                        className={

                            liked

                                ? "fill-red-500 text-red-500"

                                : "text-gray-600 hover:text-red-500"

                        }

                    />

                    <span

                        className="
                            text-sm
                            font-semibold
                            text-gray-700
                        "

                    >

                        {likeCount}

                    </span>

                </button>

                {/* 💬 Comment */}

                <button
                    onClick={() =>

                        setShowComments(true)

                    }
                    className="
                        flex
                        items-center
                        gap-2
                        text-gray-600
                        hover:text-orange-500
                        transition-all
                        duration-300
                    "

                >

                    <MessageCircle

                        size={22}

                    />

                    <span

                        className="
                            text-sm
                            font-semibold
                            text-gray-700
                        "

                    >

                        {recipe.commentCount || 0}

                    </span>

                </button>

            </div>

            {/* 🔖 Save */}

            <button

                onClick={handleSave}

                className="
                    transition-all
                    duration-300
                "

            >

                <Bookmark

                    size={22}

                    className={

                        saved

                            ? "fill-orange-500 text-orange-500"

                            : "text-gray-600 hover:text-orange-500"

                    }

                />

            </button>

            {

                showComments &&

                createPortal(

                    <CommentModal

                        open={showComments}

                        onClose={() =>

                            setShowComments(false)

                        }

                        recipeId={recipe.recipeId}

                    />,

                    document.body

                )

            }
        </div>


    );

}