import { useSearch } from "../../context/SearchContext";
import { motion } from "framer-motion";

const filters = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Dessert",
    "Indian",
    "Italian",
    "Chinese",
    "Mexican",
    "Healthy",
    "Fast Food",
    "Street Food",
    "Drinks"
];

export default function FilterBar() {

    const {

        category,

        setCategory

    } = useSearch();

    return (

        <section className="w-full py-5">

            <div

                className="
                    flex
                    gap-3

                    overflow-x-auto
                    scrollbar-hide
                    snap-x

                    px-4
                    lg:px-0
                "

            >

                {

                    filters.map((item) => {

                        const active = category === item;

                        return (

                            <motion.button

                                key={item}

                                whileHover={{

                                    y: -2,

                                    scale: 1.04

                                }}

                                whileTap={{

                                    scale: .96

                                }}

                                transition={{

                                    duration: .18

                                }}

                                onClick={() =>

                                    setCategory(item)

                                }

                                className={`
                                    relative

                                    flex-shrink-0
                                    snap-start

                                    px-6
                                    h-11

                                    rounded-full

                                    text-sm
                                    font-semibold

                                    whitespace-nowrap

                                    border

                                    transition-all
                                    duration-300

                                    ${active

                                        ?

                                        "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500 shadow-lg shadow-orange-200"

                                        :

                                        "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50"

                                    }
                                `}

                            >

                                {

                                    active && (

                                        <motion.div

                                            layoutId="filter"

                                            className="
                                                absolute
                                                inset-0

                                                rounded-full

                                                bg-gradient-to-r
                                                from-orange-500
                                                to-orange-600

                                                -z-10
                                            "

                                        />

                                    )

                                }

                                {item}

                            </motion.button>

                        );

                    })

                }

            </div>

        </section>

    );

}