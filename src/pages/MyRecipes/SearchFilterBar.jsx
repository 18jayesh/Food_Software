import { motion } from "framer-motion";

import {
    Search,
    Filter,
    RotateCcw
} from "lucide-react";

export default function SearchFilterBar({

    filters,

    setFilters

}) {

    const categories = [

        "All",

        "Breakfast",

        "Lunch",

        "Dinner",

        "Snacks",

        "Dessert",

        "Drinks"

    ];

    const difficulties = [

        "All",

        "Easy",

        "Medium",

        "Hard"

    ];

    const visibilityOptions = [

        "All",

        "Public",

        "Private"

    ];

    const statusOptions = [

        "All",

        "Published",

        "Draft"

    ];

    const resetFilters = () => {

        setFilters({

            search: "",

            category: "All",

            difficulty: "All",

            visibility: "All",

            status: "All"

        });

    };

    return (

        <motion.div

            initial={{

                opacity: 0,

                y: 20

            }}

            animate={{

                opacity: 1,

                y: 0

            }}

            className="
                bg-white
                rounded-[32px]
                shadow-xl
                border
                border-orange-100
                p-7
                mb-8
            "

        >

            {/* Header */}

            <div className="flex items-center gap-3 mb-6">

                <div
                    className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-orange-100
                        flex
                        items-center
                        justify-center
                    "
                >

                    <Filter
                        size={22}
                        className="text-orange-500"
                    />

                </div>

                <div>

                    <h2 className="text-xl font-bold text-gray-800">

                        Search & Filters

                    </h2>

                    <p className="text-sm text-gray-500">

                        Find your recipes instantly

                    </p>

                </div>

            </div>

            {/* Search */}

            <div className="relative mb-6">

                <Search

                    size={20}

                    className="
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        text-orange-400
                    "

                />

                <input

                    type="text"

                    placeholder="Search recipes..."

                    value={filters.search}

                    onChange={(e) =>

                        setFilters({

                            ...filters,

                            search: e.target.value

                        })

                    }

                    className="
                        w-full
                        h-14
                        rounded-2xl
                        border
                        border-orange-200
                        bg-orange-50/40
                        pl-14
                        pr-4
                        outline-none
                        focus:border-orange-500
                        focus:ring-4
                        focus:ring-orange-100
                        transition
                    "

                />

            </div>

            {/* Filters */}

            <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-5">

                {/* Category */}

                <select

                    value={filters.category}

                    onChange={(e) =>

                        setFilters({

                            ...filters,

                            category: e.target.value

                        })

                    }

                    className="
                        h-14
                        rounded-2xl
                        border
                        border-orange-200
                        px-4
                        bg-white
                        outline-none
                        focus:border-orange-500
                        transition
                    "

                >

                    {

                        categories.map(item => (

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

                {/* Difficulty */}

                <select

                    value={filters.difficulty}

                    onChange={(e) =>

                        setFilters({

                            ...filters,

                            difficulty: e.target.value

                        })

                    }

                    className="
                        h-14
                        rounded-2xl
                        border
                        border-orange-200
                        px-4
                        bg-white
                        outline-none
                        focus:border-orange-500
                    "

                >

                    {

                        difficulties.map(item => (

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

                {/* Visibility */}

                <select

                    value={filters.visibility}

                    onChange={(e) =>

                        setFilters({

                            ...filters,

                            visibility: e.target.value

                        })

                    }

                    className="
                        h-14
                        rounded-2xl
                        border
                        border-orange-200
                        px-4
                        bg-white
                        outline-none
                        focus:border-orange-500
                    "

                >

                    {

                        visibilityOptions.map(item => (

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

                {/* Status */}

                <select

                    value={filters.status}

                    onChange={(e) =>

                        setFilters({

                            ...filters,

                            status: e.target.value

                        })

                    }

                    className="
                        h-14
                        rounded-2xl
                        border
                        border-orange-200
                        px-4
                        bg-white
                        outline-none
                        focus:border-orange-500
                    "

                >

                    {

                        statusOptions.map(item => (

                            <option

                                key={item}

                                value={item}

                            >

                                {item}

                            </option>

                        ))

                    }

                </select>

                {/* Reset */}

                <button

                    onClick={resetFilters}

                    className="
                        h-14
                        rounded-2xl
                        bg-orange-500
                        hover:bg-orange-600
                        text-white
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                        transition
                    "

                >

                    <RotateCcw size={18} />

                    Reset

                </button>

            </div>

        </motion.div>

    );

}