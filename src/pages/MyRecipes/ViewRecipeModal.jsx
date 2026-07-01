import { AnimatePresence, motion } from "framer-motion";

import {
    X,
    Clock3,
    ChefHat,
    Users,
    CalendarDays,
    Globe,
    Lock,
    ImageIcon
} from "lucide-react";

export default function ViewRecipeModal({

    open,

    recipe,

    onClose

}) {

    if (!recipe) return null;

    return (

        <AnimatePresence>

            {

                open && (

                    <motion.div

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}

                        className="
                            fixed
                            inset-0
                            z-50
                            bg-black/70
                            backdrop-blur-md
                            overflow-y-auto
                            p-8
                        "

                    >

                        <motion.div

                            initial={{
                                scale: .95,
                                opacity: 0,
                                y: 30
                            }}

                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0
                            }}

                            exit={{
                                scale: .95,
                                opacity: 0,
                                y: 30
                            }}

                            transition={{
                                duration: .30
                            }}

                            className="
                                max-w-6xl
                                mx-auto
                                bg-white
                                rounded-[36px]
                                overflow-hidden
                                shadow-2xl
                            "

                        >

                            {/* Hero */}

                            <div className="relative h-[430px]">

                                {

                                    recipe.image

                                        ?

                                        <img

                                            src={recipe.image}

                                            alt={recipe.title}

                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                            "

                                        />

                                        :

                                        <div

                                            className="
                                                w-full
                                                h-full
                                                bg-gradient-to-br
                                                from-orange-100
                                                via-orange-50
                                                to-white
                                                flex
                                                items-center
                                                justify-center
                                            "

                                        >

                                            <ImageIcon

                                                size={90}

                                                className="text-orange-300"

                                            />

                                        </div>

                                }

                                <div

                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/80
                                        via-black/20
                                        to-transparent
                                    "

                                />

                                <button

                                    onClick={onClose}

                                    className="
                                        absolute
                                        top-6
                                        right-6
                                        w-12
                                        h-12
                                        rounded-full
                                        bg-white/90
                                        flex
                                        items-center
                                        justify-center
                                        shadow-lg
                                        hover:scale-110
                                        transition
                                    "

                                >

                                    <X size={22} />

                                </button>

                                <div

                                    className="
                                        absolute
                                        left-10
                                        bottom-10
                                        text-white
                                    "

                                >

                                    <div className="flex gap-3 mb-5">

                                        <span

                                            className="
                                                px-5
                                                py-2
                                                rounded-full
                                                bg-orange-500
                                                font-semibold
                                            "

                                        >

                                            {recipe.category}

                                        </span>

                                        <span

                                            className="
                                                px-5
                                                py-2
                                                rounded-full
                                                bg-white/20
                                                backdrop-blur-md
                                                border
                                                border-white/30
                                            "

                                        >

                                            {recipe.difficulty}

                                        </span>

                                    </div>

                                    <h1

                                        className="
                                            text-5xl
                                            font-black
                                            tracking-tight
                                        "

                                    >

                                        {recipe.title}

                                    </h1>

                                    <p

                                        className="
                                            mt-5
                                            text-lg
                                            text-gray-200
                                            max-w-3xl
                                            leading-8
                                        "

                                    >

                                        {

                                            recipe.description ||

                                            "No description available."

                                        }

                                    </p>

                                </div>

                            </div>

                            {/* Content */}

                            <div className="p-10">

                                <div

                                    className="
                                        grid
                                        lg:grid-cols-4
                                        gap-6
                                        mb-10
                                    "

                                >

                                    <div

                                        className="
                                            rounded-3xl
                                            bg-orange-50
                                            p-6
                                            border
                                            border-orange-100
                                        "

                                    >

                                        <Clock3

                                            className="
                                                text-orange-500
                                                mb-4
                                            "

                                            size={24}

                                        />

                                        <p className="text-sm text-gray-500">

                                            Cooking Time

                                        </p>

                                        <h3 className="font-bold text-xl mt-2">

                                            {recipe.cookingTime} min

                                        </h3>

                                    </div>

                                    <div

                                        className="
                                            rounded-3xl
                                            bg-orange-50
                                            p-6
                                            border
                                            border-orange-100
                                        "

                                    >

                                        <ChefHat

                                            className="
                                                text-orange-500
                                                mb-4
                                            "

                                            size={24}

                                        />

                                        <p className="text-sm text-gray-500">

                                            Difficulty

                                        </p>

                                        <h3 className="font-bold text-xl mt-2">

                                            {recipe.difficulty}

                                        </h3>

                                    </div>

                                    <div

                                        className="
                                            rounded-3xl
                                            bg-orange-50
                                            p-6
                                            border
                                            border-orange-100
                                        "

                                    >

                                        <Users

                                            className="
                                                text-orange-500
                                                mb-4
                                            "

                                            size={24}

                                        />

                                        <p className="text-sm text-gray-500">

                                            Servings

                                        </p>

                                        <h3 className="font-bold text-xl mt-2">

                                            {recipe.servings}

                                        </h3>

                                    </div>

                                    <div

                                        className="
                                            rounded-3xl
                                            bg-orange-50
                                            p-6
                                            border
                                            border-orange-100
                                        "

                                    >

                                        {

                                            recipe.visibility === "public"

                                                ?

                                                <Globe

                                                    className="
                                                        text-green-500
                                                        mb-4
                                                    "

                                                    size={24}

                                                />

                                                :

                                                <Lock

                                                    className="
                                                        text-red-500
                                                        mb-4
                                                    "

                                                    size={24}

                                                />

                                        }

                                        <p className="text-sm text-gray-500">

                                            Visibility

                                        </p>

                                        <h3 className="font-bold text-xl mt-2 capitalize">

                                            {recipe.visibility}

                                        </h3>

                                    </div>

                                </div>

                                                                {/* Main Grid */}

                                <div className="grid lg:grid-cols-2 gap-8">

                                    {/* Ingredients */}

                                    <div
                                        className="
                                            bg-white
                                            border
                                            border-orange-100
                                            rounded-[28px]
                                            p-7
                                            shadow-sm
                                        "
                                    >

                                        <div className="flex items-center gap-3 mb-6">

                                            <ChefHat
                                                size={24}
                                                className="text-orange-500"
                                            />

                                            <h2 className="text-2xl font-bold">

                                                Ingredients

                                            </h2>

                                        </div>

                                        {

                                            recipe.ingredients?.length > 0

                                                ?

                                                <div className="space-y-4">

                                                    {

                                                        recipe.ingredients.map((item) => (

                                                            <div

                                                                key={item.id}

                                                                className="
                                                                    flex
                                                                    justify-between
                                                                    items-center
                                                                    rounded-2xl
                                                                    border
                                                                    border-orange-100
                                                                    bg-orange-50/60
                                                                    px-5
                                                                    py-4
                                                                "

                                                            >

                                                                <span className="font-medium text-gray-700">

                                                                    {item.name}

                                                                </span>

                                                                <span
                                                                    className="
                                                                        px-3
                                                                        py-1
                                                                        rounded-full
                                                                        bg-orange-500
                                                                        text-white
                                                                        text-sm
                                                                        font-semibold
                                                                    "
                                                                >

                                                                    {item.quantity}

                                                                </span>

                                                            </div>

                                                        ))

                                                    }

                                                </div>

                                                :

                                                <div
                                                    className="
                                                        h-44
                                                        rounded-2xl
                                                        border-2
                                                        border-dashed
                                                        border-orange-200
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-gray-400
                                                    "
                                                >

                                                    No Ingredients Available

                                                </div>

                                        }

                                    </div>

                                    {/* Instructions */}

                                    <div
                                        className="
                                            bg-white
                                            border
                                            border-orange-100
                                            rounded-[28px]
                                            p-7
                                            shadow-sm
                                        "
                                    >

                                        <div className="flex items-center gap-3 mb-6">

                                            <CalendarDays
                                                size={24}
                                                className="text-orange-500"
                                            />

                                            <h2 className="text-2xl font-bold">

                                                Instructions

                                            </h2>

                                        </div>

                                        {

                                            recipe.instructions?.length > 0

                                                ?

                                                <div className="space-y-5">

                                                    {

                                                        recipe.instructions.map((step, index) => (

                                                            <div

                                                                key={step.id || index}

                                                                className="flex gap-4"

                                                            >

                                                                <div
                                                                    className="
                                                                        w-11
                                                                        h-11
                                                                        rounded-full
                                                                        bg-gradient-to-r
                                                                        from-orange-500
                                                                        to-orange-600
                                                                        text-white
                                                                        flex
                                                                        items-center
                                                                        justify-center
                                                                        font-bold
                                                                        shrink-0
                                                                    "
                                                                >

                                                                    {index + 1}

                                                                </div>

                                                                <div
                                                                    className="
                                                                        flex-1
                                                                        rounded-2xl
                                                                        border
                                                                        border-orange-100
                                                                        p-4
                                                                        bg-orange-50/40
                                                                    "
                                                                >

                                                                    <p className="leading-7 text-gray-700">

                                                                        {

                                                                            typeof step === "string"

                                                                                ?

                                                                                step

                                                                                :

                                                                                step.text

                                                                        }

                                                                    </p>

                                                                </div>

                                                            </div>

                                                        ))

                                                    }

                                                </div>

                                                :

                                                <div
                                                    className="
                                                        h-44
                                                        rounded-2xl
                                                        border-2
                                                        border-dashed
                                                        border-orange-200
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-gray-400
                                                    "
                                                >

                                                    No Instructions Available

                                                </div>

                                        }

                                    </div>

                                </div>

                                {/* Tags */}

                                {

                                    recipe.tags?.length > 0 && (

                                        <div
                                            className="
                                                mt-10
                                                rounded-[28px]
                                                border
                                                border-orange-100
                                                p-7
                                            "
                                        >

                                            <div className="flex items-center gap-3 mb-6">

                                                <CalendarDays
                                                    size={22}
                                                    className="text-orange-500"
                                                />

                                                <h2 className="text-2xl font-bold">

                                                    Recipe Tags

                                                </h2>

                                            </div>

                                            <div className="flex flex-wrap gap-3">

                                                {

                                                    recipe.tags.map((tag, index) => (

                                                        <span

                                                            key={index}

                                                            className="
                                                                px-5
                                                                py-2
                                                                rounded-full
                                                                bg-orange-100
                                                                text-orange-600
                                                                font-semibold
                                                                hover:bg-orange-500
                                                                hover:text-white
                                                                transition
                                                            "

                                                        >

                                                            {tag}

                                                        </span>

                                                    ))

                                                }

                                            </div>

                                        </div>

                                    )

                                }

                                {/* Recipe Video */}

                                {

                                    recipe.video && (

                                        <div
                                            className="
                                                mt-10
                                                rounded-[28px]
                                                border
                                                border-orange-100
                                                p-7
                                            "
                                        >

                                            <div className="flex items-center gap-3 mb-6">

                                                <Clock3
                                                    size={22}
                                                    className="text-orange-500"
                                                />

                                                <h2 className="text-2xl font-bold">

                                                    Recipe Video

                                                </h2>

                                            </div>

                                            <a

                                                href={recipe.video}

                                                target="_blank"

                                                rel="noreferrer"

                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-3
                                                    px-6
                                                    py-3
                                                    rounded-2xl
                                                    bg-red-500
                                                    text-white
                                                    hover:bg-red-600
                                                    transition
                                                "

                                            >

                                                Watch Video

                                            </a>

                                        </div>

                                    )

                                }

                                                                {/* Footer */}

                                <div
                                    className="
                                        mt-10
                                        border-t
                                        border-orange-100
                                        pt-8
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            flex-col
                                            lg:flex-row
                                            lg:items-center
                                            lg:justify-between
                                            gap-8
                                        "
                                    >

                                        {/* Dates */}

                                        <div className="grid sm:grid-cols-2 gap-5">

                                            <div
                                                className="
                                                    rounded-2xl
                                                    bg-orange-50
                                                    border
                                                    border-orange-100
                                                    px-5
                                                    py-4
                                                "
                                            >

                                                <p className="text-sm text-gray-500 mb-1">

                                                    Created On

                                                </p>

                                                <h3 className="font-bold text-gray-800">

                                                    {

                                                        recipe.createdAt

                                                            ?

                                                            new Date(
                                                                recipe.createdAt
                                                            ).toLocaleDateString("en-IN", {
                                                                day: "2-digit",
                                                                month: "long",
                                                                year: "numeric"
                                                            })

                                                            :

                                                            "-"

                                                    }

                                                </h3>

                                            </div>

                                            <div
                                                className="
                                                    rounded-2xl
                                                    bg-orange-50
                                                    border
                                                    border-orange-100
                                                    px-5
                                                    py-4
                                                "
                                            >

                                                <p className="text-sm text-gray-500 mb-1">

                                                    Last Updated

                                                </p>

                                                <h3 className="font-bold text-gray-800">

                                                    {

                                                        recipe.updatedAt

                                                            ?

                                                            new Date(
                                                                recipe.updatedAt
                                                            ).toLocaleDateString("en-IN", {
                                                                day: "2-digit",
                                                                month: "long",
                                                                year: "numeric"
                                                            })

                                                            :

                                                            "-"

                                                    }

                                                </h3>

                                            </div>

                                        </div>

                                        {/* Buttons */}

                                        <div className="flex gap-4">

                                            <button

                                                onClick={onClose}

                                                className="
                                                    px-8
                                                    h-12
                                                    rounded-2xl
                                                    border
                                                    border-orange-300
                                                    font-semibold
                                                    hover:bg-orange-50
                                                    transition
                                                "

                                            >

                                                Close

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}