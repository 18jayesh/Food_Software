import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import {
    House,
    Home,
    PlusCircle,
    Search,
    Heart,
    CirclePlus,
    BookOpen,
    UserCircle2,
    Bell,
    ChefHat,
    ChevronDown,
    Settings,
    LogOut
} from "lucide-react";
import { useSearch } from "../../context/SearchContext";
import { useState } from "react";
import MobileSearch from "./MobileSearch";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase/firebaseConfig";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function BottomNavigation() {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [

        showSearch,

        setShowSearch

    ] = useState(false);
    const {

    search,

    setSearch

} = useSearch();
    const menu = [

        {
            name: "Home",
            path: "/home",
            icon: House
        },

        // {
        //     name: "Search",
        //     action: "search",
        //     icon: Search
        // },

        {
            name: "Favorites",
            path: "/favorites",
            icon: Heart
        },

        {
            name: "My Recipes",
            path: "/my-recipes",
            icon: BookOpen
        },

        {
            name: "Profile",
            path: "/profile",
            icon: UserCircle2
        }

    ];
    async function handleLogout() {

        try {

            await signOut(auth);

            toast.success("Logout Successfully");

            navigate("/login");

        }

        catch (error) {

            toast.error("Logout Failed");

            console.log(error);

        }

    }
    return (

        <>

            {/* ================= Mobile Header ================= */}

            <div
                className="
        lg:hidden
        fixed
        top-0
        left-0
        right-0
        z-50

        h-16

        bg-white/90
        backdrop-blur-xl

        border-b
        border-orange-100

        flex
        items-center
        justify-between

        px-4
    "
            >

                {/* Logo */}

                <NavLink
                    to="/home"
                    className="
            flex
            items-center
            gap-3
        "
                >

                    <div
                        className="
                w-11
                h-11

                rounded-2xl

                bg-orange-500

                flex
                items-center
                justify-center

                shadow-lg
            "
                    >

                        <ChefHat
                            size={22}
                            className="text-white"
                        />

                    </div>

                    <div>

                        <h2
                            className="
                    text-lg
                    font-bold
                    text-gray-900
                "
                        >
                            FoodShare
                        </h2>

                        <p
                            className="
                    text-[11px]
                    text-gray-500
                "
                        >
                            Share Amazing Recipes
                        </p>

                    </div>

                </NavLink>

                {/* Right Icons */}

                <div
                    className="
                    flex
                    items-center
                    gap-2
                    relative
                "
                >

                    {/* Search */}

                    <button

                        onClick={() => setShowSearch(true)}

                        className="
                            w-10
                            h-10

                            rounded-full

                            bg-orange-50

                            hover:bg-orange-100

                            flex
                            items-center
                            justify-center

                            transition
                        "

                    >

                        <Search
                            size={20}
                            className="text-orange-500"
                        />

                    </button>



                    {/* Profile */}

                    <button

                        onClick={() => setShowMenu(!showMenu)}

                        className="
                w-10
                h-10

                rounded-full

                bg-orange-50

                hover:bg-orange-100

                flex
                items-center
                justify-center

                transition
            "

                    >

                        <UserCircle2
                            size={24}
                            className="text-orange-500"
                        />

                    </button>

                    {/* Dropdown */}

                    {

                        showMenu && (

                            <div

                                className="
                        absolute

                        top-14
                        right-0

                        w-64

                        bg-white

                        rounded-3xl

                        shadow-2xl

                        border
                        border-orange-100

                        overflow-hidden
                    "

                            >

                                <NavLink

                                    to="/profile"

                                    className="
                            flex
                            items-center
                            gap-3

                            px-5
                            py-4

                            hover:bg-orange-50
                        "

                                >

                                    <Settings size={20} />

                                    Profile Settings

                                </NavLink>

                                <NavLink

                                    to="/favorites"

                                    className="
                            flex
                            items-center
                            gap-3

                            px-5
                            py-4

                            hover:bg-orange-50
                        "

                                >

                                    <Heart size={20} />

                                    Favorites

                                </NavLink>

                                <NavLink

                                    to="/my-recipes"

                                    className="
                            flex
                            items-center
                            gap-3

                            px-5
                            py-4

                            hover:bg-orange-50
                        "

                                >

                                    <BookOpen size={20} />

                                    My Recipes

                                </NavLink>

                                <button

                                    onClick={handleLogout}

                                    className="
                            w-full

                            flex
                            items-center
                            gap-3

                            px-5
                            py-4

                            text-red-500

                            hover:bg-red-50
                        "

                                >

                                    <LogOut size={20} />

                                    Logout

                                </button>

                            </div>

                        )

                    }

                </div>

            </div>

            {/* Space for Bottom Navigation */}

            <div className="h-24 lg:hidden"></div>

            <motion.div

                initial={{
                    y: 100,
                    opacity: 0
                }}

                animate={{
                    y: 0,
                    opacity: 1
                }}

                transition={{
                    duration: .35
                }}

                className="
                    fixed
                    bottom-5
                    left-1/2
                    -translate-x-1/2

                    lg:hidden

                    z-50

                    w-[94%]
                    max-w-sm
                "

            >

                <div

                    className="
                        relative

                        h-20

                        rounded-full

                        border
                        border-orange-100

                        bg-white/80

                        backdrop-blur-2xl

                        shadow-2xl
                        shadow-orange-100

                        flex
                        items-center
                        justify-between

                        px-7
                    "

                >
                    {/* ================= Left Side ================= */}

                    <div

                        className="
                            flex
                            items-center
                            gap-8
                        "

                    >

                        {

                            menu.slice(0, 2).map((item) => {

                                const Icon = item.icon;

                                return (

                                    <NavLink

                                        key={item.name}

                                        to={item.path}

                                        className={({ isActive }) =>

                                            `
                                            relative
                                            flex
                                            flex-col
                                            items-center

                                            transition-all
                                            duration-300

                                            ${isActive
                                                ? "text-orange-500 scale-110"
                                                : "text-gray-500 hover:text-orange-500"
                                            }
                                            `

                                        }

                                    >

                                        {

                                            ({ isActive }) => (

                                                <>

                                                    {

                                                        isActive &&

                                                        <motion.div

                                                            layoutId="bottom-active"

                                                            className="
                                                                absolute
                                                                -top-2

                                                                w-8
                                                                h-1

                                                                rounded-full

                                                                bg-orange-500
                                                            "

                                                        />

                                                    }

                                                    <Icon size={23} />

                                                    <span

                                                        className="
                                                            text-[10px]
                                                            mt-1
                                                            font-medium
                                                        "

                                                    >

                                                        {item.name}

                                                    </span>

                                                </>

                                            )

                                        }

                                    </NavLink>

                                );

                            })

                        }

                    </div>

                    {/* ================= Floating Create Button ================= */}

                    <motion.div

                        whileHover={{
                            scale: 1.08
                        }}

                        whileTap={{
                            scale: .92
                        }}

                        className="
                            absolute

                            left-1/2
                            -translate-x-1/2

                            -top-7
                        "

                    >

                        <NavLink

                            to="/create-recipe"

                            className="
                                w-16
                                h-16

                                rounded-full

                                bg-gradient-to-br
                                from-orange-500
                                to-orange-600

                                border-4
                                border-white

                                shadow-xl
                                shadow-orange-300

                                flex
                                items-center
                                justify-center

                                transition-all
                                duration-300
                            "

                        >

                            <CirclePlus

                                size={30}

                                className="text-white"

                            />

                        </NavLink>

                    </motion.div>
                    {/* ================= Right Side ================= */}

                    <div

                        className="
                            flex
                            items-center
                            gap-8
                        "

                    >

                        {

                            menu.slice(2).map((item) => {

                                const Icon = item.icon;

                                return (

                                    <NavLink

                                        key={item.name}

                                        to={item.path}

                                        className={({ isActive }) =>

                                            `
                                            relative
                                            flex
                                            flex-col
                                            items-center

                                            transition-all
                                            duration-300

                                            ${isActive
                                                ? "text-orange-500 scale-110"
                                                : "text-gray-500 hover:text-orange-500"
                                            }
                                            `

                                        }

                                    >

                                        {

                                            ({ isActive }) => (

                                                <>

                                                    {

                                                        isActive &&

                                                        <motion.div

                                                            layoutId="bottom-active"

                                                            className="
                                                                absolute
                                                                -top-2

                                                                w-8
                                                                h-1

                                                                rounded-full

                                                                bg-orange-500
                                                            "

                                                        />

                                                    }

                                                    <Icon

                                                        size={23}

                                                    />

                                                    <span

                                                        className="
                                                            text-[10px]
                                                            mt-1
                                                            font-medium
                                                        "

                                                    >

                                                        {item.name}

                                                    </span>

                                                </>

                                            )

                                        }

                                    </NavLink>

                                );

                            })

                        }

                    </div>

                </div>

            </motion.div>
            <MobileSearch

                open={showSearch}

                onClose={() => setShowSearch(false)}

                value={search}

                onChange={(e) =>

                    setSearch(

                        e.target.value

                    )

                }

            />
        </>

    );

}