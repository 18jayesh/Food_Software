import { motion } from "framer-motion";

import { CheckCircle2 } from "lucide-react";

export default function Ingredients({

    ingredients

}) {

    if (

        !ingredients ||

        ingredients.length === 0

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

            <h2

                className="

                    text-2xl

                    font-bold

                    text-gray-900

                    mb-6

                "

            >

                Ingredients

            </h2>

            <div

                className="

                    space-y-4

                "

            >

                {

                    ingredients.map((item, index) => (

                        <div

                            key={index}

                            className="

                                flex

                                items-start

                                gap-3

                            "

                        >

                            <CheckCircle2

                                size={20}

                                className="

                                    mt-0.5

                                    text-green-500

                                    flex-shrink-0

                                "

                            />

                            <p

                                className="

                                    text-gray-700

                                    leading-7

                                "

                            >

                                {item.name} - {item.quantity}

                            </p>

                        </div>

                    ))

                }

            </div>

        </motion.section>

    );

}