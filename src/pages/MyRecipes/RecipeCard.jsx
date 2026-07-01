import { useState } from "react";
import { motion } from "framer-motion";
import EditRecipeModal from "./EditRecipeModal";
import ViewRecipeModal from "./ViewRecipeModal";
import {
    Clock3,
    ChefHat,
    Eye,
    Pencil,
    Trash2,
    CalendarDays,
    Users,
    PlayCircle,
    Sparkles
} from "lucide-react";

import toast from "react-hot-toast";

import DeleteRecipeModal from "./DeleteRecipeModal";

import {
    deleteRecipe,
    updateRecipe
} from "../../services/recipeService";

export default function RecipeCard({

    recipe,

    refreshRecipes

}) {

    const [openDelete, setOpenDelete] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openView, setOpenView] = useState(false);
    async function handleDelete() {

        try {

            setLoading(true);

            const result = await deleteRecipe(recipe.recipeId);

            if (result.success) {

                toast.success("Recipe Deleted Successfully");

                refreshRecipes();

                setOpenDelete(false);

            }

            else {

                toast.error(result.error);

            }

        }

        catch (error) {

            toast.error(error.message);

        }

        finally {

            setLoading(false);

        }

    }
    const handleUpdate = async (updatedRecipe) => {

    const result = await updateRecipe(
        recipe.recipeId,
        updatedRecipe
    );

    if (result.success) {

        toast.success("Recipe Updated");

        setEditOpen(false);

        refreshRecipes();

    } else {

        toast.error(result.error);

    }

};
    return (

        <>

            <motion.div

                whileHover={{
                    y: -10,
                    scale: 1.02
                }}

                transition={{
                    duration: .25
                }}

                className="
                    group
                    bg-white
                    rounded-[34px]
                    overflow-hidden
                    shadow-lg
                    hover:shadow-2xl
                    border
                    border-orange-100
                    transition-all
                    duration-300
                "

            >

                {/* Cover */}

                <div className="relative h-64 overflow-hidden">

                    <img

                        src={
                            recipe.image ||

                            "https://placehold.co/800x600?text=Recipe"
                        }

                        alt={recipe.title}

                        className="
                            w-full
                            h-full
                            object-cover
                            group-hover:scale-110
                            transition-all
                            duration-500
                        "

                    />

                    {/* Gradient */}

                    <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/20
                        to-transparent
                    " />

                    {/* Category */}

                    <span
                        className="
                            absolute
                            top-4
                            left-4
                            px-4
                            py-2
                            rounded-full
                            backdrop-blur-xl
                            bg-white/80
                            text-orange-600
                            font-semibold
                            text-sm
                        "
                    >

                        {recipe.category}

                    </span>

                    {/* Status */}

                    <span

                        className={`
                            absolute
                            top-4
                            right-4
                            px-4
                            py-2
                            rounded-full
                            backdrop-blur-xl
                            font-semibold
                            text-sm

                            ${recipe.status === "published"

                                ?

                                "bg-green-500 text-white"

                                :

                                "bg-gray-700 text-white"

                            }

                        `}

                    >

                        {

                            recipe.status === "published"

                                ?

                                "Published"

                                :

                                "Draft"

                        }

                    </span>

                    {

                        recipe.video &&

                        <div
                            className="
                                absolute
                                bottom-5
                                right-5
                                w-14
                                h-14
                                rounded-full
                                bg-white/90
                                backdrop-blur
                                flex
                                items-center
                                justify-center
                                shadow-xl
                            "
                        >

                            <PlayCircle
                                size={30}
                                className="text-red-500"
                            />

                        </div>

                    }

                    {/* Bottom Title */}

                    <div
                        className="
                            absolute
                            bottom-0
                            left-0
                            right-0
                            p-6
                        "
                    >

                        <h2
                            className="
                                text-white
                                text-2xl
                                font-bold
                                line-clamp-2
                            "
                        >

                            {recipe.title}

                        </h2>

                    </div>

                </div>

                {/* Body */}

                <div className="p-6">

                    <p
                        className="
                            text-gray-500
                            leading-7
                            line-clamp-2
                        "
                    >

                        {recipe.description}

                    </p>

                    {/* Stats */}

                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-4
                            mt-6
                        "
                    >

                        <div
                            className="
                                rounded-2xl
                                bg-orange-50
                                p-4
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <ChefHat
                                className="text-orange-500"
                                size={22}
                            />

                            <div>

                                <p className="text-xs text-gray-400">

                                    Difficulty

                                </p>

                                <h4 className="font-semibold">

                                    {recipe.difficulty}

                                </h4>

                            </div>

                        </div>

                        <div
                            className="
                                rounded-2xl
                                bg-orange-50
                                p-4
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <Clock3
                                className="text-orange-500"
                                size={22}
                            />

                            <div>

                                <p className="text-xs text-gray-400">

                                    Time

                                </p>

                                <h4 className="font-semibold">

                                    {recipe.cookingTime} min

                                </h4>

                            </div>

                        </div>

                        <div
                            className="
                                rounded-2xl
                                bg-orange-50
                                p-4
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <Users
                                className="text-orange-500"
                                size={22}
                            />

                            <div>

                                <p className="text-xs text-gray-400">

                                    Servings

                                </p>

                                <h4 className="font-semibold">

                                    {recipe.servings}

                                </h4>

                            </div>

                        </div>

                        <div
                            className="
                                rounded-2xl
                                bg-orange-50
                                p-4
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <CalendarDays
                                className="text-orange-500"
                                size={22}
                            />

                            <div>

                                <p className="text-xs text-gray-400">

                                    Created

                                </p>

                                <h4 className="font-semibold">

                                    {

                                        new Date(

                                            recipe.createdAt

                                        ).toLocaleDateString()

                                    }

                                </h4>

                            </div>

                        </div>

                    </div>
                    {/* Tags */}

                    {

                        recipe.tags?.length > 0 && (

                            <div className="mt-6">

                                <div className="flex items-center gap-2 mb-3">

                                    <Sparkles

                                        size={18}

                                        className="text-orange-500"

                                    />

                                    <span className="font-semibold">

                                        Recipe Tags

                                    </span>

                                </div>

                                <div className="flex flex-wrap gap-2">

                                    {

                                        recipe.tags.map((tag, index) => (

                                            <span

                                                key={index}

                                                className="
                                                    px-3
                                                    py-2
                                                    rounded-full
                                                    bg-gradient-to-r
                                                    from-orange-100
                                                    to-amber-100
                                                    text-orange-700
                                                    text-sm
                                                    font-semibold
                                                "

                                            >

                                                #{tag}

                                            </span>

                                        ))

                                    }

                                </div>

                            </div>

                        )

                    }

                    {/* Footer */}

                    <div className="
                        mt-8
                        pt-6
                        border-t
                        border-orange-100
                    ">

                        <div className="flex gap-3">

                            {/* View */}

                            <button

                                onClick={() => setOpenView(true)}

                                className="
                                    flex-1
                                    h-12
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-orange-500
                                    to-orange-600
                                    text-white
                                    font-semibold
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    hover:shadow-lg
                                    transition
                                "

                            >

                                <Eye size={18} />

                                View

                            </button>
                            {/* Edit */}

                            <button

                                onClick={() => setEditOpen(true)}

                                className="
                                        w-12
                                        rounded-xl
                                        bg-blue-500
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        hover:bg-blue-600
                                        transition
                                    "

                            >

                                <Pencil size={18} />

                            </button>

                            {/* Delete */}

                            <button

                                onClick={() =>

                                    setOpenDelete(true)

                                }

                                className="
                                    h-12
                                    w-12
                                    rounded-2xl
                                    bg-red-50
                                    hover:bg-red-500
                                    hover:text-white
                                    text-red-500
                                    flex
                                    items-center
                                    justify-center
                                    transition
                                "

                            >

                                <Trash2 size={20} />

                            </button>

                        </div>

                    </div>

                </div>

            </motion.div>

            <DeleteRecipeModal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                onDelete={handleDelete}
                loading={loading}
            />

            <ViewRecipeModal

                open={openView}

                recipe={recipe}

                onClose={() => setOpenView(false)}

            />
            <EditRecipeModal
                open={editOpen}
                recipe={recipe}
                onClose={() => setEditOpen(false)}
                onSave={handleUpdate}
            />

        </>

    );

}