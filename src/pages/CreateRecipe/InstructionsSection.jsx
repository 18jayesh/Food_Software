import { motion } from "framer-motion";
import {
    ClipboardList,
    Plus,
    Trash2
} from "lucide-react";  
import { useRecipe } from "../../context/CreateRecipeContext";

export default function InstructionsSection() {

    const {

        recipeData,

        setRecipeData

    } = useRecipe();
    const addInstruction = () => {

        setRecipeData({

            ...recipeData,

            instructions: [

                ...recipeData.instructions,

                {

                    id: Date.now(),

                    text: "",

                }

            ]

        });

    };

    const updateInstruction = (

        id,

        field,

        value

    ) => {

        setRecipeData({

            ...recipeData,

            instructions:

                recipeData.instructions.map(

                    (item) =>

                        item.id === id

                            ?

                            {

                                ...item,

                                [field]: value

                            }

                            :

                            item

                )

        });

    };

    const deleteInstruction = (id) => {

        setRecipeData({

            ...recipeData,

            instructions:

                recipeData.instructions.filter(

                    (item) => item.id !== id

                )

        });

    };

    return (

        <motion.div

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            className="
                bg-white
                rounded-[30px]
                shadow-lg
                border
                border-orange-100
                p-8
            "

        >

            {/* Header */}

            <div className="flex items-center gap-3 mb-8">

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

                    <ClipboardList
                        size={26}
                        className="text-orange-500"
                    />

                </div>

                <div>

                    <h2 className="text-2xl font-bold">
                        Cooking Instructions
                    </h2>

                    <p className="text-gray-500">

                        Explain every cooking step clearly.

                    </p>

                </div>

            </div>

            {/* Step Card */}

            <div
                className="
                    border
                    border-orange-100
                    rounded-3xl
                    p-6
                    space-y-5
                    bg-orange-50/40
                "
            >

                {/* Step Title */}

                {

                    recipeData.instructions.map(

                        (

                            instruction,

                            index

                        ) => (

                            <div

                                key={instruction.id}

                                className="
                                    border
                                    border-orange-100
                                    rounded-3xl
                                    p-6
                                    bg-orange-50/40
                                    mb-6
                                    space-y-5
                                "

                            >

                                <div className="flex justify-between items-center">

                                    <h3 className="font-bold">

                                        Step {index + 1}

                                    </h3>

                                    <button

                                        onClick={() =>

                                            deleteInstruction(

                                                instruction.id

                                            )

                                        }

                                        className="
                                            w-10
                                            h-10
                                            rounded-xl
                                            bg-red-100
                                            text-red-500
                                        "

                                    >

                                        <Trash2 size={18} />

                                    </button>

                                </div>

                                <textarea

                                    rows={5}

                                    value={instruction.text}

                                    onChange={(e) =>

                                        updateInstruction(

                                            instruction.id,

                                            "text",

                                            e.target.value

                                        )

                                    }

                                    placeholder="Describe this step..."

                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-orange-200
                                        p-4
                                        resize-none
                                        outline-none
                                    "

                                />
                            </div>

                        )

                    )

                }

            </div>

            {/* Add Step */}

            <button
                onClick={addInstruction}
                className="
                    mt-8
                    w-full
                    h-14
                    rounded-2xl
                    border-2
                    border-dashed
                    border-orange-300
                    flex
                    items-center
                    justify-center
                    gap-3
                    font-semibold
                    text-orange-500
                    hover:bg-orange-50
                    transition
                "

            >

                <Plus size={20} />

                Add New Step

            </button>

        </motion.div>

    );

}