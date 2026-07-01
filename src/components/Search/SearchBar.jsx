import {

    Search,

    X

} from "lucide-react";

export default function SearchBar({

    value = "",

    onChange,

    placeholder = "Search recipes...",

    variant = "mobile"

}) {

    return (

        <div

            className={

                variant === "navbar"

                    ?

                    "w-full"

                    :

                    "w-full px-4 py-5"

            }

        >

            <div

                className={

                    variant === "navbar"

                        ?

                        "w-full"

                        :

                        "max-w-7xl mx-auto"

                }

            >

                <div

                    className="

                        relative

                        group

                    "

                >

                    {/* Search Icon */}

                    <Search

                        size={20}

                        className="

                            absolute

                            left-5

                            top-1/2

                            -translate-y-1/2

                            text-gray-400

                            group-focus-within:text-orange-500

                            transition-all

                        "

                    />

                    {/* Input */}

                    <input

                        type="text"

                        value={value}

                        onChange={onChange}

                        placeholder={placeholder}

                        className={`

                            w-full

                            ${

                                variant === "navbar"

                                    ?

                                    "h-12"

                                    :

                                    "h-14"

                            }

                            rounded-2xl

                            bg-white

                            border

                            border-gray-200

                            pl-14

                            pr-14

                            text-[15px]

                            text-gray-700

                            placeholder:text-gray-400

                            shadow-sm

                            outline-none

                            transition-all

                            duration-300

                            focus:border-orange-500

                            focus:ring-4

                            focus:ring-orange-100

                        `}

                    />

                    {

                        value && (

                            <button

                                onClick={() =>

                                    onChange({

                                        target: {

                                            value: ""

                                        }

                                    })

                                }

                                className="

                                    absolute

                                    right-3

                                    top-1/2

                                    -translate-y-1/2

                                    w-8

                                    h-8

                                    rounded-full

                                    bg-orange-50

                                    hover:bg-orange-100

                                    flex

                                    items-center

                                    justify-center

                                    transition-all

                                "

                            >

                                <X

                                    size={16}

                                    className="text-orange-500"

                                />

                            </button>

                        )

                    }

                </div>

            </div>

        </div>

    );

}