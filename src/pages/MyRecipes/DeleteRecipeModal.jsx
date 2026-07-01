import { motion, AnimatePresence } from "framer-motion";
import {
    AlertTriangle,
    Trash2,
    X
} from "lucide-react";

export default function DeleteRecipeModal({

    open,

    onClose,

    onDelete,

    loading

}) {

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
                            bg-black/50
                            flex
                            items-center
                            justify-center
                            z-50
                            p-4
                        "

                    >

                        <motion.div

                            initial={{
                                scale: 0.8,
                                opacity: 0
                            }}

                            animate={{
                                scale: 1,
                                opacity: 1
                            }}

                            exit={{
                                scale: 0.8,
                                opacity: 0
                            }}

                            className="
                                bg-white
                                rounded-3xl
                                w-full
                                max-w-md
                                p-8
                            "

                        >

                            <div
                                className="
                                    w-20
                                    h-20
                                    rounded-full
                                    bg-red-100
                                    flex
                                    items-center
                                    justify-center
                                    mx-auto
                                "
                            >

                                <AlertTriangle

                                    size={42}

                                    className="text-red-500"

                                />

                            </div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-center
                                    mt-6
                                "
                            >

                                Delete Recipe?

                            </h2>

                            <p
                                className="
                                    text-center
                                    text-gray-500
                                    mt-3
                                "
                            >

                                This action cannot be undone.

                            </p>

                            <div
                                className="
                                    flex
                                    gap-4
                                    mt-8
                                "
                            >

                                <button

                                    onClick={onClose}

                                    className="
                                        flex-1
                                        py-3
                                        rounded-xl
                                        bg-gray-100
                                        hover:bg-gray-200
                                    "

                                >

                                    <X size={18} />

                                </button>

                                <button

                                    onClick={onDelete}

                                    disabled={loading}

                                    className="
                                        flex-1
                                        py-3
                                        rounded-xl
                                        bg-red-500
                                        text-white
                                        hover:bg-red-600
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                    "

                                >

                                    <Trash2 size={18} />

                                    {

                                        loading

                                            ?

                                            "Deleting..."

                                            :

                                            "Delete"

                                    }

                                </button>

                            </div>

                        </motion.div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}