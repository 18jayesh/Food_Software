import { motion } from "framer-motion";

import {

    ChefHat,

    ArrowRight

} from "lucide-react";

export default function Instructions({

    instructions

}) {

    if (

        !instructions ||

        instructions.length === 0

    ) {

        return null;

    }

    return (

        <motion.section

            initial={{

                opacity: 0,

                y: 20

            }}

            whileInView={{

                opacity: 1,

                y: 0

            }}

            viewport={{

                once: true

            }}

            transition={{

                duration: .35

            }}

            className="

                mt-10

                bg-white

                rounded-3xl

                border

                border-gray-100

                shadow-sm

                p-6

            "

        >

            <div

                className="

                    flex

                    items-center

                    gap-3

                    mb-8

                "

            >

                <ChefHat

                    size={26}

                    className="text-orange-500"

                />

                <h2

                    className="

                        text-2xl

                        font-bold

                        text-gray-900

                    "

                >

                    Cooking Instructions

                </h2>

            </div>

            <div

                className="

                    space-y-6

                "

            >

                {

                    instructions.map(

                        (

                            step,

                            index

                        ) => (

                            <div

                                key={step.id}

                                className="

                                    flex

                                    gap-5

                                "

                            >

                                <div

                                    className="

                                        w-10

                                        h-10

                                        rounded-full

                                        bg-orange-500

                                        text-white

                                        flex

                                        items-center

                                        justify-center

                                        font-bold

                                        flex-shrink-0

                                    "

                                >

                                    {index + 1}

                                </div>

                                <div

                                    className="

                                        flex-1

                                    "

                                >

                                    <p

                                        className="

                                            text-gray-700

                                            leading-8

                                        "

                                    >

                                        {step.text}

                                    </p>

                                </div>

                            </div>

                        )

                    )

                }

            </div>

        </motion.section>

    );

}