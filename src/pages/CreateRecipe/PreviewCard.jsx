import { motion } from "framer-motion";
import {
    Clock3,
    ChefHat,
    Users,
    Tag,
    Image as ImageIcon,
    PlayCircle,
    FolderOpen,
    Salad,
    ClipboardList,
    CheckCircle2,
    Circle,
    Globe,
    Lock
} from "lucide-react";
import { useRecipe } from "../../context/CreateRecipeContext";
export default function PreviewCard() {

    const {

        recipeData

    } = useRecipe();

    const totalFields = 9;

    let completedFields = 0;

    if (recipeData.title) completedFields++;
    if (recipeData.description) completedFields++;
    if (recipeData.category) completedFields++;
    if (recipeData.image) completedFields++;
    if (recipeData.video) completedFields++;
    if (recipeData.difficulty) completedFields++;
    if (recipeData.ingredients.length) completedFields++;
    if (recipeData.instructions.length) completedFields++;
    if (recipeData.tags.length) completedFields++;

    const progress = Math.round(
        (completedFields / totalFields) * 100
    );
    const canPublish =
        recipeData.title &&
        recipeData.category &&
        recipeData.image &&
        recipeData.difficulty &&
        recipeData.ingredients.length > 0 &&
        recipeData.instructions.length > 0 &&
        recipeData.tags.length > 0;
    return (

        <motion.div
            id="recipe-preview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="
                sticky
                top-24
                bg-white
                rounded-[32px]
                shadow-xl
                overflow-hidden
                border
                border-orange-100
            "
        >

            {/* Cover */}

            <div
                className="
        relative
        h-72
        overflow-hidden
        bg-gradient-to-br
        from-orange-100
        to-orange-50
    "
            >

                {

                    recipeData.image ?

                        (

                            <img
                                src={
                                    typeof recipeData.image === "string"
                                        ? recipeData.image
                                        : URL.createObjectURL(recipeData.image)
                                }
                                alt="Recipe"
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                "
                            />

                        )

                        :

                        (

                            <div
                                className="
                    w-full
                    h-full
                    flex
                    flex-col
                    items-center
                    justify-center
                "
                            >

                                <ImageIcon

                                    size={70}

                                    className="text-orange-300"

                                />

                                <p
                                    className="
                        mt-4
                        text-gray-400
                        font-medium
                    "
                                >

                                    No Recipe Image

                                </p>

                            </div>

                        )

                }

                {/* Preview */}

                <div
                    className="
            absolute
            top-4
            right-4
            bg-white
            shadow
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            text-orange-600
        "
                >

                    Preview

                </div>

                {

                    recipeData.video &&

                    <div
                        className="
                absolute
                bottom-4
                left-4
                bg-red-500
                text-white
                px-4
                py-2
                rounded-full
                flex
                items-center
                gap-2
                text-sm
                font-semibold
            "
                    >

                        <a
                            href={recipeData.video}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <PlayCircle size={16} />
                            Watch Video
                        </a>

                    </div>

                }

            </div>

            {/* Body */}

            <div className="p-6">

                <div
                    className="
                        mb-6
                        rounded-2xl
                        bg-gradient-to-r
                        from-orange-50
                        to-amber-50
                        p-5
                        border
                        border-orange-100
                    "
                >

                    <div className="flex justify-between items-center">

                        <h3 className="font-bold">

                            Recipe Progress

                        </h3>

                        <span
                            className="
                                text-orange-600
                                font-bold
                            "
                        >

                            {progress}%

                        </span>

                    </div>

                    <div
                        className="
                            h-3
                            rounded-full
                            bg-orange-100
                            mt-4
                            overflow-hidden
                        "
                    >

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

                <h2
                    className="
                        text-3xl
                        font-black
                        text-gray-800
                        leading-tight
                    "
                >

                    {

                        recipeData.title ||

                        "Recipe Title"

                    }

                </h2>

                <p
                    className="
                        mt-4
                        text-gray-500
                        leading-7
                    "
                >

                    {

                        recipeData.description ||

                        "Your delicious recipe description will appear here."

                    }

                </p>
                <div
                    className="
                        mt-6
                        flex
                        items-center
                        gap-3
                        flex-wrap
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            bg-orange-100
                            text-orange-600
                            px-4
                            py-2
                            rounded-full
                            font-semibold
                        "
                    >

                        <FolderOpen size={16} />

                        {

                            recipeData.category ||

                            "Category"

                        }

                    </div>

                </div>
                {/* Recipe Details */}

                <div
                    className="
                        mt-8
                        grid
                        grid-cols-2
                        gap-4
                    "
                >

                    <div className="rounded-2xl bg-orange-50 p-4">

                        <Clock3
                            className="text-orange-500 mb-2"
                            size={20}
                        />

                        <p className="text-xs text-gray-500">

                            Cooking Time

                        </p>

                        <h4 className="font-bold text-lg">

                            {recipeData.cookingTime} min

                        </h4>

                    </div>

                    <div className="rounded-2xl bg-orange-50 p-4">

                        <ChefHat
                            className="text-orange-500 mb-2"
                            size={20}
                        />

                        <p className="text-xs text-gray-500">

                            Difficulty

                        </p>

                        <h4 className="font-bold text-lg">

                            {

                                recipeData.difficulty ||

                                "Not Selected"

                            }

                        </h4>

                    </div>

                    <div className="rounded-2xl bg-orange-50 p-4">

                        <Users
                            className="text-orange-500 mb-2"
                            size={20}
                        />

                        <p className="text-xs text-gray-500">

                            Servings

                        </p>

                        <h4 className="font-bold text-lg">

                            {recipeData.servings}

                        </h4>

                    </div>

                    <div className="rounded-2xl bg-orange-50 p-4">

                        <Salad
                            className="text-orange-500 mb-2"
                            size={20}
                        />

                        <p className="text-xs text-gray-500">

                            Ingredients

                        </p>

                        <h4 className="font-bold text-lg">

                            {recipeData.ingredients.length}

                        </h4>

                    </div>

                </div>



                {/* Tags */}
                {/* Tags */}

                <div className="mt-8">

                    <div className="flex items-center gap-2 mb-4">

                        <Tag
                            size={18}
                            className="text-orange-500"
                        />

                        <h3 className="font-bold">

                            Recipe Tags

                        </h3>

                    </div>

                    {

                        recipeData.tags.length === 0 ?

                            (

                                <p className="text-gray-400">

                                    No Tags Added

                                </p>

                            )

                            :

                            (

                                <div
                                    className="
                    flex
                    flex-wrap
                    gap-2
                "
                                >

                                    {

                                        recipeData.tags.map((tag) => (

                                            <span

                                                key={tag}

                                                className="
                                px-3
                                py-2
                                rounded-full
                                bg-orange-100
                                text-orange-600
                                text-sm
                                font-semibold
                            "

                                            >

                                                {tag}

                                            </span>

                                        ))

                                    }

                                </div>

                            )

                    }

                </div>

                {/* Imgrediants section  */}

                <div className="mt-8">

                    <h3 className="font-semibold text-lg mb-4">

                        Ingredients

                    </h3>

                    {

                        recipeData.ingredients.length === 0 ?

                            (

                                <p className="text-gray-400">

                                    No Ingredients Added

                                </p>

                            )

                            :

                            (

                                <div className="space-y-3">

                                    {

                                        recipeData.ingredients.map((item) => (

                                            <div

                                                key={item.id}

                                                className="

                                flex

                                justify-between

                                bg-orange-50

                                rounded-xl

                                px-4

                                py-3

                            "

                                            >

                                                <span>

                                                    {item.name}

                                                </span>

                                                <span className="font-semibold">

                                                    {item.quantity}

                                                </span>

                                            </div>

                                        ))

                                    }

                                </div>

                            )

                    }

                </div>
                {/* Instructions Summary */}

                <div className="mt-8">

                    <div className="flex items-center gap-2 mb-4">

                        <ClipboardList
                            size={18}
                            className="text-orange-500"
                        />

                        <h3 className="font-bold">

                            Cooking Steps

                        </h3>

                    </div>

                    {

                        recipeData.instructions.length === 0 ?

                            (

                                <p className="text-gray-400">

                                    No Steps Added

                                </p>

                            )

                            :

                            (

                                <div className="space-y-3">

                                    {

                                        recipeData.instructions.map(

                                            (

                                                item,

                                                index

                                            ) => (

                                                <div

                                                    key={item.id}

                                                    className="
                                    bg-orange-50
                                    rounded-xl
                                    p-4
                                "

                                                >

                                                    <p className="font-semibold">

                                                        Step {index + 1}

                                                    </p>

                                                    <p
                                                        className="
                                        text-sm
                                        text-gray-500
                                        mt-2
                                        line-clamp-2
                                    "
                                                    >

                                                        {

                                                            item.text ||

                                                            "No Description"

                                                        }

                                                    </p>

                                                </div>

                                            )

                                        )

                                    }

                                </div>

                            )

                    }

                </div>
            </div>
            <div
                className="
                    mt-10
                    rounded-3xl
                    border
                    border-orange-100
                    bg-gradient-to-br
                    from-orange-50
                    to-white
                    p-6
                "
            >

                <h3
                    className="
                        font-bold
                        text-lg
                        mb-5
                    "
                >

                    Recipe Status

                </h3>

                <div className="space-y-4">

                    <div
                        className="
                        flex
                        items-center
                        justify-between
                    "
                >

                        <div className="flex items-center gap-3">

                            {

                                recipeData.image

                                    ?

                                    <CheckCircle2
                                        className="text-green-500"
                                        size={18}
                                    />

                                    :

                                    <Circle
                                        className="text-gray-300"
                                        size={18}
                                    />

                            }

                            Image

                        </div>

                        <span>

                            {

                                recipeData.image

                                    ?

                                    "Added"

                                    :

                                    "Missing"

                            }

                        </span>

                    </div>

                    <div
                        className="
                flex
                items-center
                justify-between
            "
                    >

                        <div className="flex items-center gap-3">

                            {

                                recipeData.video

                                    ?

                                    <CheckCircle2
                                        className="text-green-500"
                                        size={18}
                                    />

                                    :

                                    <Circle
                                        className="text-gray-300"
                                        size={18}
                                    />

                            }

                            YouTube

                        </div>

                        <span>

                            {

                                recipeData.video

                                    ?

                                    "Added"

                                    :

                                    "Optional"

                            }

                        </span>

                    </div>

                    <div
                        className="
                flex
                items-center
                justify-between
            "
                    >

                        <div className="flex items-center gap-3">

                            {

                                progress === 100

                                    ?

                                    <CheckCircle2
                                        className="text-green-500"
                                        size={18}
                                    />

                                    :

                                    <Circle
                                        className="text-gray-300"
                                        size={18}
                                    />

                            }

                            Ready

                        </div>

                        <span>

                            {

                                canPublish

                                    ?

                                    "Ready"

                                    :

                                    "Incomplete"
                                
                            }
                            

                        </span>

                    </div>

                </div>

            </div>

        </motion.div>

    );

}