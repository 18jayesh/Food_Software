import { useEffect, useRef } from "react";
import { ArrowLeft, Search, X } from "lucide-react";
import RecipeFeed from "./RecipeFeed";
import { useSearch } from "../../context/SearchContext";
export default function MobileSearch({

    open,
    onClose,
    value,
    onChange

}) {
    const {

        search,

        setSearch

    } = useSearch();
    const inputRef = useRef(null);


    useEffect(() => {

        if (open) {

            setTimeout(() => {

                inputRef.current?.focus();

            }, 120);

        }

    }, [open]);

    if (!open) return null;

    return (

        <div

            className="
                fixed
                inset-0
                z-[9999]

                bg-white

                flex
                flex-col
            "

        >

            {/* Header */}

            <div

                className="
                    flex
                    items-center
                    gap-3

                    p-4

                    border-b
                "

            >

                <button

                    onClick={onClose}

                    className="
                        w-10
                        h-10

                        rounded-full

                        hover:bg-gray-100

                        flex
                        items-center
                        justify-center
                    "

                >

                    <ArrowLeft size={22} />

                </button>

                <div

                    className="
                        flex-1
                        relative
                    "

                >

                    <Search

                        size={18}

                        className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                        "

                    />

                    <input

                        ref={inputRef}

                        value={value}

                        onChange={onChange}

                        placeholder="Search recipes..."

                        className="
                            w-full
                            h-12

                            rounded-full

                            border

                            pl-11
                            pr-11

                            outline-none

                            bg-gray-50

                            transition-all

                            focus:bg-white
                            focus:border-orange-500
                            focus:ring-4
                            focus:ring-orange-100
                        "

                    />

                    {

                        value &&

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
                            "

                        >

                            <X size={18} />

                        </button>

                    }

                </div>

            </div>

            {/* Body */}

            <div

                className="
                    flex-1
                    overflow-y-auto

                    p-5
                "

            >

                {

                    value === ""

                        ?

                        <>

                            <h2

                                className="
                                text-lg
                                font-bold
                                mb-4
                            "

                            >

                                Recent Searches

                            </h2>

                            <div className="space-y-3">

                                <div className="text-gray-500">

                                    Pizza

                                </div>

                                <div className="text-gray-500">

                                    Burger

                                </div>

                                <div className="text-gray-500">

                                    Pasta

                                </div>

                            </div>

                        </>

                        :

                        <>
                            <h2
                                className="
                                    text-lg
                                    font-bold
                                    mb-4
                                "
                            >
                                Search Results
                            </h2>

                            <RecipeFeed
                                search={search}
                            />
                        </>

                }

            </div>

        </div>

    );

}