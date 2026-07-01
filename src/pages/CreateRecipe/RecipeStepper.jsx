import { motion } from "framer-motion";

import {
    FileText,
    Image,
    ChefHat,
    Salad,
    ClipboardList,
    Send
} from "lucide-react";

export default function RecipeStepper({

    currentStep,

    setCurrentStep

}) {

    const steps = [

        {
            id: 1,
            title: "Basic Info",
            icon: FileText
        },

        {
            id: 2,
            title: "Image",
            icon: Image
        },

        {
            id: 3,
            title: "Difficulty",
            icon: ChefHat
        },

        {
            id: 4,
            title: "Ingredients",
            icon: Salad
        },

        {
            id: 5,
            title: "Instructions",
            icon: ClipboardList
        },

        {
            id: 6,
            title: "Publish",
            icon: Send
        }

    ];

    return (

        <div

            className="

                grid

                grid-cols-2

                lg:grid-cols-6

                gap-4

            "

        >

            {

                steps.map((step) => {

                    const Icon = step.icon;

                    const active = currentStep === step.id;

                    const completed = currentStep > step.id;

                    return (

                        <motion.div

                            key={step.id}

                            whileHover={{

                                y: -4,

                                scale: 1.02

                            }}

                            onClick={() =>

                                setCurrentStep(step.id)

                            }

                            className={`

                                rounded-3xl

                                p-5

                                cursor-pointer

                                transition-all

                                duration-300

                                border

                                ${

                                    active

                                    ?

                                    `

                                    bg-gradient-to-r

                                    from-orange-500

                                    to-amber-500

                                    text-white

                                    border-orange-500

                                    shadow-xl

                                    `

                                    :

                                    completed

                                    ?

                                    `

                                    bg-green-50

                                    border-green-300

                                    text-green-600

                                    `

                                    :

                                    `

                                    bg-white

                                    border-orange-100

                                    hover:border-orange-300

                                    hover:shadow-lg

                                    `

                                }

                            `}

                        >

                            <div

                                className="

                                    flex

                                    flex-col

                                    items-center

                                    gap-3

                                "

                            >

                                <div

                                    className={`

                                        w-12

                                        h-12

                                        rounded-2xl

                                        flex

                                        items-center

                                        justify-center

                                        ${

                                            active

                                            ?

                                            "bg-white/20"

                                            :

                                            completed

                                            ?

                                            "bg-green-100"

                                            :

                                            "bg-orange-100 text-orange-500"

                                        }

                                    `}

                                >

                                    <Icon size={22} />

                                </div>

                                <div className="text-center">

                                    <p

                                        className={`

                                            text-xs

                                            ${

                                                active

                                                ?

                                                "text-orange-100"

                                                :

                                                completed

                                                ?

                                                "text-green-500"

                                                :

                                                "text-gray-400"

                                            }

                                        `}

                                    >

                                        Step {step.id}

                                    </p>

                                    <h3

                                        className="

                                            font-semibold

                                            text-sm

                                        "

                                    >

                                        {step.title}

                                    </h3>

                                </div>

                            </div>

                        </motion.div>

                    );

                })

            }
            
        </div>

    );

}