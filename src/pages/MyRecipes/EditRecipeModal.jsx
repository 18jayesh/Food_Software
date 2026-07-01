import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {

    X,
    Camera,
    ImagePlus,
    Pencil,
    FileText

} from "lucide-react";

export default function EditRecipeModal({

    open,

    recipe,

    onClose,

    onSave

}) {

    const [formData, setFormData] = useState({

        title: "",

        description: "",

        image: "",

        category: "",

        difficulty: "",

        cookingTime: 30,

        servings: 2,

        visibility: "public",

        tags: [],

        ingredients: [],

        instructions: []

    });

    useEffect(() => {

        if (recipe) {

            setFormData(recipe);

        }

    }, [recipe]);

    if (!open) return null;

    return (

        <AnimatePresence>

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
                    p-10
                "

            >

                <motion.div

                    initial={{
                        y: 40,
                        opacity: 0,
                        scale: .97
                    }}

                    animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1
                    }}

                    exit={{
                        y: 40,
                        opacity: 0
                    }}

                    transition={{
                        duration: .30
                    }}

                    className="
                        max-w-7xl
                        mx-auto
                        bg-white
                        rounded-[40px]
                        overflow-hidden
                        shadow-[0_25px_90px_rgba(0,0,0,.18)]
                    "

                >

                    {/* HERO */}

                    <div className="relative h-[360px]">

                        {

                            formData.image

                                ?

                                <img

                                    src={
                                        formData.image instanceof File
                                            ? URL.createObjectURL(formData.image)
                                            : formData.image
                                    }

                                    alt="recipe"

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
                                        from-orange-200
                                        via-orange-100
                                        to-white
                                    "

                                />

                        }

                        <div

                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/80
                                via-black/30
                                to-transparent
                            "

                        />

                        {/* Close */}

                        <button

                            onClick={onClose}

                            className="
                                absolute
                                top-8
                                right-8
                                w-12
                                h-12
                                rounded-full
                                bg-white
                                flex
                                items-center
                                justify-center
                                shadow-xl
                                hover:rotate-90
                                transition
                            "

                        >

                            <X size={22} />

                        </button>

                        {/* Change Image */}

                        {/* Title */}

                        <div

                            className="
                                absolute
                                left-10
                                bottom-10
                                text-white
                                max-w-3xl
                            "

                        >

                            <div

                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-orange-500
                                    mb-5
                                    font-semibold
                                "

                            >

                                <Pencil size={18} />

                                Edit Recipe

                            </div>

                            <h1

                                className="
                                    text-5xl
                                    font-black
                                    leading-tight
                                "

                            >

                                {

                                    formData.title ||

                                    "Untitled Recipe"

                                }

                            </h1>

                            <p

                                className="
                                    mt-4
                                    text-lg
                                    text-gray-200
                                    max-w-2xl
                                "

                            >

                                Update your recipe information before saving.

                            </p>

                        </div>

                    </div>

                    {/* BODY */}

                    <div className="p-10">

                        <div className="grid lg:grid-cols-2 gap-8">

                            {/* Recipe Title */}

                            <div>

                                <label className="font-bold mb-3 flex items-center gap-2">

                                    <Pencil size={18} />

                                    Recipe Title

                                </label>

                                <input

                                    value={formData.title}

                                    onChange={(e) =>

                                        setFormData({

                                            ...formData,

                                            title: e.target.value

                                        })

                                    }

                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-orange-200
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-orange-500
                                    "

                                />

                            </div>

                            {/* Category */}

                            <div>

                                <label className="font-bold mb-3 flex items-center gap-2">

                                    <ImagePlus size={18} />

                                    Category

                                </label>

                                <input

                                    value={formData.category}

                                    onChange={(e) =>

                                        setFormData({

                                            ...formData,

                                            category: e.target.value

                                        })

                                    }

                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-orange-200
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-orange-500
                                    "

                                />

                            </div>

                            {/* Description */}

                            <div className="lg:col-span-2">

                                <label className="font-bold mb-3 flex items-center gap-2">

                                    <FileText size={18} />

                                    Description

                                </label>

                                <textarea

                                    rows={6}

                                    value={formData.description}

                                    onChange={(e) =>

                                        setFormData({

                                            ...formData,

                                            description: e.target.value

                                        })

                                    }

                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-orange-200
                                        p-5
                                        outline-none
                                        resize-none
                                        focus:border-orange-500
                                    "

                                />

                            </div>
                            <div className="mt-8">

                                <label className="block font-bold mb-3">

                                    Recipe Image

                                </label>

                                {
                                    formData.image && (

                                        <img

                                            src={
                                                formData.image instanceof File
                                                    ? URL.createObjectURL(formData.image)
                                                    : formData.image
                                            }

                                            alt="Recipe"

                                            className="
                                                w-full
                                                h-72
                                                object-cover
                                                rounded-3xl
                                                border
                                                border-orange-100
                                                mb-5
                                            "

                                        />

                                    )
                                }

                                <input

                                    type="file"

                                    accept="image/*"

                                    onChange={(e) => {

                                        if (e.target.files[0]) {

                                            setFormData({

                                                ...formData,

                                                image: e.target.files[0]

                                            });

                                        }

                                    }}

                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-orange-200
                                        p-4
                                        file:bg-orange-500
                                        file:text-white
                                        file:border-0
                                        file:px-4
                                        file:py-2
                                        file:rounded-xl
                                        file:cursor-pointer
                                    "

                                />

                            </div>
                            {/* Difficulty */}

                            <div>

                                <label className="font-bold mb-3">

                                    Difficulty

                                </label>

                                <select

                                    value={formData.difficulty}

                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            difficulty: e.target.value
                                        })
                                    }

                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-orange-200
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-orange-500
                                    "

                                >

                                    <option value="">

                                        Select Difficulty

                                    </option>

                                    <option value="Easy">

                                        Easy

                                    </option>

                                    <option value="Medium">

                                        Medium

                                    </option>

                                    <option value="Hard">

                                        Hard

                                    </option>

                                </select>

                            </div>

                            {/* Cooking Time */}

                            <div>

                                <label className="font-bold mb-3">

                                    Cooking Time

                                </label>

                                <input

                                    type="number"

                                    value={formData.cookingTime}

                                    onChange={(e) =>

                                        setFormData({

                                            ...formData,

                                            cookingTime: e.target.value

                                        })

                                    }

                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-orange-200
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-orange-500
                                    "

                                />

                            </div>

                            {/* Servings */}

                            <div>

                                <label className="font-bold mb-3">

                                    Servings

                                </label>

                                <input

                                    type="number"

                                    value={formData.servings}

                                    onChange={(e) =>

                                        setFormData({

                                            ...formData,

                                            servings: e.target.value

                                        })

                                    }

                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-orange-200
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-orange-500
                                    "

                                />

                            </div>

                            {/* Visibility */}

                            <div>

                                <label className="font-bold mb-3">

                                    Visibility

                                </label>

                                <select

                                    value={formData.visibility}

                                    onChange={(e) =>

                                        setFormData({

                                            ...formData,

                                            visibility: e.target.value

                                        })

                                    }

                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-orange-200
                                        px-5
                                        py-4
                                        outline-none
                                        focus:border-orange-500
                                    "

                                >

                                    <option value="public">

                                        Public

                                    </option>

                                    <option value="private">

                                        Private

                                    </option>

                                </select>

                            </div>

                        </div>

                        {/* Tags */}

                        <div className="mt-10">

                            <h2 className="text-2xl font-bold mb-5">

                                Recipe Tags

                            </h2>

                            <div className="flex flex-wrap gap-3">

                                {

                                    formData.tags?.map((tag, index) => (

                                        <div

                                            key={index}

                                            className="
                                                px-4
                                                py-2
                                                rounded-full
                                                bg-orange-100
                                                text-orange-600
                                                font-semibold
                                            "

                                        >

                                            {tag}

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                        {/* Divider */}

                        <div className="my-12 border-t border-orange-100"></div>

                        <h2
                            className="
                                text-3xl
                                font-black
                                mb-8
                            "
                        >

                            Recipe Details

                        </h2>

                        {/* Ingredients */}

                        <div className="mb-12">

                            <div className="flex items-center justify-between mb-6">

                                <h3 className="text-2xl font-bold">

                                    Ingredients

                                </h3>

                                <button

                                    onClick={() =>
                                        setFormData({

                                            ...formData,

                                            ingredients: [

                                                ...formData.ingredients,

                                                {

                                                    id: Date.now(),

                                                    name: "",

                                                    quantity: ""

                                                }

                                            ]

                                        })
                                    }

                                    className="
                                        px-5
                                        py-3
                                        rounded-2xl
                                        bg-orange-500
                                        text-white
                                        hover:bg-orange-600
                                        transition
                                    "

                                >

                                    + Add Ingredient

                                </button>

                            </div>

                            <div className="space-y-4">

                                {

                                    formData.ingredients.map((item, index) => (

                                        <div

                                            key={item.id || index}

                                            className="
                                                grid
                                                md:grid-cols-12
                                                gap-4
                                                p-5
                                                rounded-3xl
                                                border
                                                border-orange-100
                                                bg-orange-50/40
                                            "

                                        >

                                            <input

                                                value={item.name}

                                                placeholder="Ingredient"

                                                onChange={(e) => {

                                                    const updated = [...formData.ingredients];

                                                    updated[index].name = e.target.value;

                                                    setFormData({

                                                        ...formData,

                                                        ingredients: updated

                                                    });

                                                }}

                                                className="
                                                    md:col-span-5
                                                    rounded-xl
                                                    border
                                                    border-orange-200
                                                    px-4
                                                    py-3
                                                    outline-none
                                                "

                                            />

                                            <input

                                                value={item.quantity}

                                                placeholder="Quantity"

                                                onChange={(e) => {

                                                    const updated = [...formData.ingredients];

                                                    updated[index].quantity = e.target.value;

                                                    setFormData({

                                                        ...formData,

                                                        ingredients: updated

                                                    });

                                                }}

                                                className="
                                                    md:col-span-5
                                                    rounded-xl
                                                    border
                                                    border-orange-200
                                                    px-4
                                                    py-3
                                                    outline-none
                                                "

                                            />

                                            <button

                                                onClick={() => {

                                                    setFormData({

                                                        ...formData,

                                                        ingredients: formData.ingredients.filter(

                                                            (_, i) => i !== index

                                                        )

                                                    });

                                                }}

                                                className="
                                                    md:col-span-2
                                                    rounded-xl
                                                    bg-red-500
                                                    text-white
                                                    hover:bg-red-600
                                                "

                                            >

                                                Delete

                                            </button>

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                        {/* Instructions */}

                        <div>

                            <div className="flex items-center justify-between mb-6">

                                <h3 className="text-2xl font-bold">

                                    Instructions

                                </h3>

                                <button

                                    onClick={() =>

                                        setFormData({

                                            ...formData,

                                            instructions: [

                                                ...formData.instructions,

                                                {

                                                    id: Date.now(),

                                                    text: ""

                                                }

                                            ]

                                        })

                                    }

                                    className="
                                        px-5
                                        py-3
                                        rounded-2xl
                                        bg-orange-500
                                        text-white
                                        hover:bg-orange-600
                                    "

                                >

                                    + Add Step

                                </button>

                            </div>

                            <div className="space-y-5">

                                {

                                    formData.instructions.map((step, index) => (

                                        <div

                                            key={step.id || index}

                                            className="
                                                rounded-3xl
                                                border
                                                border-orange-100
                                                p-6
                                                bg-white
                                            "

                                        >

                                            <div className="flex justify-between items-center mb-4">

                                                <h4 className="font-bold">

                                                    Step {index + 1}

                                                </h4>

                                                <button

                                                    onClick={() => {

                                                        setFormData({

                                                            ...formData,

                                                            instructions:

                                                                formData.instructions.filter(

                                                                    (_, i) => i !== index

                                                                )

                                                        });

                                                    }}

                                                    className="
                                                        text-red-500
                                                        font-semibold
                                                    "

                                                >

                                                    Remove

                                                </button>

                                            </div>

                                            <textarea

                                                rows={4}

                                                value={step.text}

                                                placeholder="Write cooking instruction..."

                                                onChange={(e) => {

                                                    const updated = [...formData.instructions];

                                                    updated[index].text = e.target.value;

                                                    setFormData({

                                                        ...formData,

                                                        instructions: updated

                                                    });

                                                }}

                                                className="
                                                    w-full
                                                    rounded-2xl
                                                    border
                                                    border-orange-200
                                                    p-5
                                                    outline-none
                                                    resize-none
                                                "

                                            />

                                        </div>

                                    ))

                                }

                            </div>

                        </div>
                        {/* Bottom Summary */}

                        <div

                            className="
                                mt-14
                                rounded-[32px]
                                border
                                border-orange-100
                                bg-gradient-to-r
                                from-orange-50
                                via-white
                                to-orange-50
                                p-8
                            "

                        >

                            <div className="grid lg:grid-cols-4 gap-6">

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        Category

                                    </p>

                                    <h3 className="font-bold text-lg mt-2">

                                        {formData.category || "-"}

                                    </h3>

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        Difficulty

                                    </p>

                                    <h3 className="font-bold text-lg mt-2">

                                        {formData.difficulty || "-"}

                                    </h3>

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        Ingredients

                                    </p>

                                    <h3 className="font-bold text-lg mt-2">

                                        {formData.ingredients.length}

                                    </h3>

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        Instructions

                                    </p>

                                    <h3 className="font-bold text-lg mt-2">

                                        {formData.instructions.length}

                                    </h3>

                                </div>

                            </div>

                        </div>

                        {/* Footer */}

                        <div

                            className="
                                flex
                                justify-end
                                gap-4
                                mt-12
                                border-t
                                border-orange-100
                                pt-8
                            "

                        >

                            <button

                                onClick={onClose}

                                className="
                                    px-8
                                    py-4
                                    rounded-2xl
                                    border
                                    border-gray-300
                                    font-semibold
                                    hover:bg-gray-100
                                    transition
                                "

                            >

                                Cancel

                            </button>

                            <button

                                onClick={() => onSave(formData)}

                                className="
                                    px-10
                                    py-4
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-orange-500
                                    via-orange-600
                                    to-red-500
                                    text-white
                                    font-bold
                                    shadow-xl
                                    hover:scale-105
                                    transition-all
                                    duration-300
                                "

                            >

                                Save Changes

                            </button>

                        </div>

                    </div>

                </motion.div>

            </motion.div>

        </AnimatePresence>

    );

}