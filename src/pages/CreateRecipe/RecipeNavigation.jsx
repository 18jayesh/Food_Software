import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2
} from "lucide-react";

export default function RecipeNavigation({

    currentStep,

    setCurrentStep

}) {

    const progress = (currentStep / 6) * 100;

    return (

        <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="
                mt-10
                bg-white
                rounded-[30px]
                border
                border-orange-100
                shadow-lg
                p-6
            "

        >

            {/* Progress */}

            <div className="flex justify-between mb-3">

                <span className="text-sm font-medium text-gray-500">

                    Step {currentStep} of 6

                </span>

                <span className="text-sm font-semibold text-orange-500">

                    {Math.round(progress)}%

                </span>

            </div>

            <div className="h-2 bg-orange-100 rounded-full overflow-hidden">

                <motion.div

                    animate={{

                        width: `${progress}%`

                    }}

                    transition={{

                        duration: 0.4

                    }}

                    className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-orange-500
                        to-amber-400
                    "

                />

            </div>

            {/* Buttons */}

            <div className="flex justify-between items-center mt-6">

                <button

                    onClick={() =>

                        setCurrentStep((prev) => prev - 1)

                    }

                    disabled={currentStep === 1}

                    className="
                        h-11
                        px-5
                        rounded-xl
                        border
                        border-gray-200
                        flex
                        items-center
                        gap-2
                        font-medium
                        text-gray-700
                        hover:border-orange-300
                        hover:text-orange-500
                        transition
                        disabled:opacity-40
                        disabled:cursor-not-allowed
                    "

                >

                    <ArrowLeft size={18} />

                    Previous

                </button>

                {

                    currentStep !== 6 ? (

                        <button

                            onClick={() =>

                                setCurrentStep((prev) => prev + 1)

                            }

                            className="
                                h-11
                                px-6
                                rounded-xl
                                bg-gradient-to-r
                                from-orange-500
                                to-amber-400
                                text-white
                                font-semibold
                                flex
                                items-center
                                gap-2
                                shadow-lg
                                hover:scale-105
                                transition
                            "

                        >

                            Next

                            <ArrowRight size={18} />

                        </button>

                    ) : (

                        <button

                            className="
                                h-11
                                px-6
                                rounded-xl
                                bg-gradient-to-r
                                from-green-500
                                to-emerald-500
                                text-white
                                font-semibold
                                flex
                                items-center
                                gap-2
                                shadow-lg
                                hover:scale-105
                                transition
                            "

                        >

                            <CheckCircle2 size={18} />

                            Publish Recipe

                        </button>

                    )

                }

            </div>

        </motion.div>

    );

}