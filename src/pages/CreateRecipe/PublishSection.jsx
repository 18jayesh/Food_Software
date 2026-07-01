import { motion } from "framer-motion";

import {
    Globe,
    Lock,
    FileText,
    UploadCloud,
    Save,
    CheckCircle2,
    Eye,
    CheckCircle,
    XCircle
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { saveRecipe } from "../../services/recipeService";
import { useRecipe } from "../../context/CreateRecipeContext";

export default function PublishSection() {

    const {

        recipeData,

        setRecipeData

    } = useRecipe();
    const [publishing, setPublishing] = useState(false);
    const completedFields = [

        recipeData.title,

        recipeData.category,

        recipeData.image,

        recipeData.difficulty,

        recipeData.ingredients.length > 0,

        recipeData.instructions.length > 0,

        recipeData.tags.length > 0

    ].filter(Boolean).length;

    const progress = Math.round(

        (completedFields / 7) * 100

    );

    const canPublish =

        recipeData.title &&

        recipeData.category &&

        recipeData.image &&

        recipeData.difficulty &&

        recipeData.ingredients.length > 0 &&

        recipeData.instructions.length > 0 &&

        recipeData.tags.length > 0 &&

        recipeData.agreeToPublish;

    const checklist = [

        {

            label: "Recipe Title",

            status: !!recipeData.title

        },

        {

            label: "Category",

            status: !!recipeData.category

        },

        {

            label: "Recipe Image",

            status: !!recipeData.image

        },

        {

            label: "Difficulty",

            status: !!recipeData.difficulty

        },

        {

            label: "Ingredients",

            status: recipeData.ingredients.length > 0

        },

        {

            label: "Instructions",

            status: recipeData.instructions.length > 0

        },

        {

            label: "Tags",

            status: recipeData.tags.length > 0

        }

    ];
    const handlePublish = async () => {

        try {

            setPublishing(true);

            const result = await saveRecipe(recipeData);

            if (result.success) {

                toast.success("Recipe Published Successfully");

                setRecipeData({

                    ...recipeData,

                    status: "published"

                });

            } else {

                toast.error(result.error);

            }

        }

        catch (error) {

            console.error("Publish Error:", error);

            toast.error(error.message);

        }

        finally {

            setPublishing(false);

        }

    };
    const handleSaveDraft = async () => {

        try {

            setPublishing(true);

            const draftData = {
                ...recipeData,
                status: "draft"
            };

            const result = await saveRecipe(draftData);

            if (result.success) {

                toast.success("Draft Saved Successfully");

                setRecipeData(draftData);

            } else {

                toast.error(result.error);

            }

        } catch (error) {

            toast.error(error.message);

        } finally {

            setPublishing(false);

        }

    };
    const handlePreview = () => {

        document
            .getElementById("recipe-preview")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    };
    return (

        <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="

                bg-white

                rounded-[32px]

                shadow-lg

                border

                border-orange-100

                p-8

            "

        >

            {/* Header */}

            <div className="flex items-center gap-4 mb-8">

                <div

                    className="

                        w-14

                        h-14

                        rounded-2xl

                        bg-orange-100

                        flex

                        items-center

                        justify-center

                    "

                >

                    <UploadCloud

                        size={28}

                        className="text-orange-500"

                    />

                </div>

                <div>

                    <h2 className="text-2xl font-bold">

                        Publish Recipe

                    </h2>

                    <p className="text-gray-500">

                        Final review before publishing.

                    </p>

                </div>

            </div>

            {/* Progress */}

            <div className="mb-8">

                <div className="flex justify-between mb-2">

                    <span className="font-semibold">

                        Recipe Completion

                    </span>

                    <span className="text-orange-500 font-bold">

                        {progress}%

                    </span>

                </div>

                <div className="h-3 rounded-full bg-orange-100 overflow-hidden">

                    <div

                        style={{

                            width: `${progress}%`

                        }}

                        className="

                            h-full

                            bg-gradient-to-r

                            from-orange-500

                            to-amber-500

                            rounded-full

                            transition-all

                            duration-500

                        "

                    />

                </div>

            </div>

            {/* Checklist */}

            <div

                className="

                    rounded-3xl

                    border

                    border-orange-100

                    p-6

                    mb-8

                "

            >

                <h3 className="font-bold text-lg mb-5">

                    Validation Checklist

                </h3>

                <div className="space-y-4">

                    {

                        checklist.map((item) => (

                            <div

                                key={item.label}

                                className="

                                    flex

                                    justify-between

                                    items-center

                                "

                            >

                                <span>

                                    {item.label}

                                </span>

                                {

                                    item.status

                                        ?

                                        <CheckCircle

                                            className="text-green-500"

                                            size={20}

                                        />

                                        :

                                        <XCircle

                                            className="text-red-500"

                                            size={20}

                                        />

                                }

                            </div>

                        ))

                    }

                </div>

            </div>
            {/* Visibility */}

            <div className="mb-8">

                <h3 className="font-bold text-lg mb-5">

                    Visibility

                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                    <button

                        onClick={() =>

                            setRecipeData({

                                ...recipeData,

                                visibility: "public"

                            })

                        }

                        className={`

                            p-6

                            rounded-3xl

                            border-2

                            transition-all

                            duration-300

                            ${recipeData.visibility === "public"

                                ?

                                "border-orange-500 bg-orange-50"

                                :

                                "border-gray-200 hover:border-orange-300"

                            }

                        `}

                    >

                        <Globe

                            size={34}

                            className="mx-auto text-orange-500"

                        />

                        <h4 className="font-bold mt-4">

                            Public

                        </h4>

                        <p className="text-gray-500 text-sm mt-2">

                            Anyone can discover and view this recipe.

                        </p>

                    </button>

                    <button

                        onClick={() =>

                            setRecipeData({

                                ...recipeData,

                                visibility: "private"

                            })

                        }

                        className={`

                            p-6

                            rounded-3xl

                            border-2

                            transition-all

                            duration-300

                            ${recipeData.visibility === "private"

                                ?

                                "border-orange-500 bg-orange-50"

                                :

                                "border-gray-200 hover:border-orange-300"

                            }

                        `}

                    >

                        <Lock

                            size={34}

                            className="mx-auto text-orange-500"

                        />

                        <h4 className="font-bold mt-4">

                            Private

                        </h4>

                        <p className="text-gray-500 text-sm mt-2">

                            Only you can access this recipe.

                        </p>

                    </button>

                </div>

            </div>

            {/* Summary */}

            <div

                className="

                    rounded-3xl

                    bg-orange-50

                    border

                    border-orange-100

                    p-6

                    mb-8

                "

            >

                <div className="flex items-center gap-2 mb-5">

                    <FileText

                        size={20}

                        className="text-orange-500"

                    />

                    <h3 className="font-bold">

                        Recipe Summary

                    </h3>

                </div>

                <div className="space-y-4">

                    <div className="flex justify-between">

                        <span>Title</span>

                        <strong>

                            {recipeData.title || "-"}

                        </strong>

                    </div>

                    <div className="flex justify-between">

                        <span>Category</span>

                        <strong>

                            {recipeData.category || "-"}

                        </strong>

                    </div>

                    <div className="flex justify-between">

                        <span>Difficulty</span>

                        <strong>

                            {recipeData.difficulty || "-"}

                        </strong>

                    </div>

                    <div className="flex justify-between">

                        <span>Cooking Time</span>

                        <strong>

                            {recipeData.cookingTime} min

                        </strong>

                    </div>

                    <div className="flex justify-between">

                        <span>Servings</span>

                        <strong>

                            {recipeData.servings}

                        </strong>

                    </div>

                    <div className="flex justify-between">

                        <span>Ingredients</span>

                        <strong>

                            {recipeData.ingredients.length}

                        </strong>

                    </div>

                    <div className="flex justify-between">

                        <span>Instructions</span>

                        <strong>

                            {recipeData.instructions.length}

                        </strong>

                    </div>

                    <div className="flex justify-between">

                        <span>Tags</span>

                        <strong>

                            {recipeData.tags.length}

                        </strong>

                    </div>

                </div>

            </div>

            {/* Agreement */}

            <label

                className="

                    flex

                    items-center

                    gap-3

                    p-5

                    rounded-2xl

                    bg-orange-50

                    border

                    border-orange-100

                    cursor-pointer

                    mb-8

                "

            >

                <input

                    type="checkbox"

                    checked={recipeData.agreeToPublish}

                    onChange={(e) =>

                        setRecipeData({

                            ...recipeData,

                            agreeToPublish: e.target.checked

                        })

                    }

                    className="w-5 h-5 accent-orange-500"

                />

                <span>

                    I have reviewed this recipe and it is ready to publish.

                </span>

            </label>

            {/* Footer Buttons */}

            <div className="flex justify-end gap-4">

                <button
                    onClick={handleSaveDraft}



                    className="

                        flex

                        items-center

                        gap-2

                        px-6

                        py-3

                        rounded-2xl

                        bg-gray-100

                        hover:bg-gray-200

                        transition

                    "

                >

                    <Save size={18} />

                    Save Draft

                </button>

                <button

                    onClick={handlePreview}
                    className="

                        flex

                        items-center

                        gap-2

                        px-6

                        py-3

                        rounded-2xl

                        border

                        border-orange-300

                        hover:bg-orange-50

                    "

                >

                    <Eye size={18} />

                    Preview

                </button>

                <button

                    disabled={!canPublish || publishing}

                    onClick={handlePublish}

                    className={`

                        flex
                        items-center
                        gap-2
                        px-8
                        py-3
                        rounded-2xl
                        text-white
                        transition

                        ${canPublish

                            ?

                            "bg-orange-500 hover:bg-orange-600"

                            :

                            "bg-gray-300 cursor-not-allowed"

                        }

                    `}

                >

                    <CheckCircle2 size={18} />

                    {

                        publishing

                            ?

                            "Publishing..."

                            :

                            "Publish Recipe"

                    }
                </button>

            </div>

        </motion.div>

    );

}