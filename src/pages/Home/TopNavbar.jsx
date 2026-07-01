import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../components/Search/SearchBar";
import {
    ChefHat,
    Search,
    Bell,
    UserCircle2,
    ChevronDown,
    Heart,
    BookOpen,
    PlusCircle,
    Home,
    LogOut,
    Settings
} from "lucide-react";
import { useSearch } from "../../context/SearchContext";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";


export default function TopNavbar() {
    const [showMenu, setShowMenu] = useState(false);
    const {

    search,

    setSearch

} = useSearch();

    async function handleLogout() {

        try {

            await signOut(auth);

        }

        catch (error) {

            console.log(error);

        }

    }

    return (

        <header

            className="
                sticky
                top-0
                z-50

                bg-white/80
                backdrop-blur-xl

                border-b
                border-orange-100
            "

        >

            <div

                className="

                max-w-[1500px]

                mx-auto

                h-20

                px-8

                flex

                items-center

                gap-8

                "

            >

                {/* ================= Logo ================= */}

                <NavLink

                    to="/home"

                    className="

                        flex

                        items-center

                        gap-3

                        flex-shrink-0

                        mr-4

                    "

                >

                    <div

                        className="
                            w-12
                            h-12

                            rounded-2xl

                            bg-orange-500

                            flex
                            items-center
                            justify-center

                            shadow-lg
                        "

                    >

                        <ChefHat

                            className="text-white"

                            size={25}

                        />

                    </div>

                    <div>

                        <h1

                            className="
                                font-black
                                text-xl
                                text-gray-900
                            "

                        >

                            FoodShare

                        </h1>

                        <p

                            className="
                                text-xs
                                text-gray-500
                            "

                        >

                            Share Amazing Recipes

                        </p>

                    </div>

                </NavLink>


                {/* ================= Navigation ================= */}

                <nav

                    className="

                        hidden

                        lg:flex

                        items-center

                        gap-1

                        flex-shrink-0

                    "

                >

                    <NavLink

                        to="/home"

                        className={({ isActive }) => `

                            flex
                            items-center
                            gap-2

                            px-3
                            py-2.5

                            rounded-full

                            transition-all
                            duration-300

                            ${isActive

                                ? "bg-orange-500 text-white shadow-md"

                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"

                            }

                        `}

                    >

                        <Home size={18} />

                        Home

                    </NavLink>

                    <NavLink

                        to="/favorites"

                        className={({ isActive }) => `

                            flex
                            items-center
                            gap-2

                            px-4
                            py-2

                            rounded-full

                            transition-all
                            duration-300

                            ${isActive

                                ? "bg-orange-500 text-white shadow-md"

                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"

                            }

                        `}

                    >

                        <Heart size={18} />

                        Favorites

                    </NavLink>

                    <NavLink

                        to="/create-recipe"

                        className={({ isActive }) => `

                            flex
                            items-center
                            gap-2

                            px-4
                            py-2

                            rounded-full

                            transition-all
                            duration-300

                            ${isActive

                                ? "bg-orange-500 text-white shadow-md"

                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"

                            }

                        `}

                    >

                        <PlusCircle size={18} />

                        Create

                    </NavLink>

                    <NavLink

                        to="/my-recipes"

                        className={({ isActive }) => `

                            flex
                            items-center
                            gap-2

                            px-4
                            py-2

                            rounded-full

                            transition-all
                            duration-300

                            ${isActive

                                ? "bg-orange-500 text-white shadow-md"

                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"

                            }

                        `}

                    >

                        <BookOpen size={18} />

                        My Recipes

                    </NavLink>

                </nav>
                {/* ================= Search ================= */}

                <div

                    className="

                    hidden

                    lg:block

                    flex-1

                    px-5

                "

                >

                    <SearchBar

                        variant="navbar"

                        value={search}

                        onChange={(e)=>

                            setSearch(

                                e.target.value

                            )

                        }

                    />

                </div>
                {/* ================= Right Side ================= */}

                <div

                    className="
                        flex
                        items-center
                        gap-3
                        relative
                    "

                >

                    {/* Notification */}



                    {/* Profile */}

                    <button

                        onClick={() =>

                            setShowMenu(!showMenu)

                        }

                        className="
                            flex
                            items-center
                            gap-2

                            px-2
                            py-2

                            rounded-full

                            hover:bg-orange-50

                            transition-all
                        "

                    >

                        <UserCircle2

                            size={34}

                            className="text-orange-500"

                        />

                        <ChevronDown

                            size={18}

                            className={`
                                transition-all

                                ${showMenu ? "rotate-180" : ""}
                            `}

                        />

                    </button>

                    {/* ================= Dropdown ================= */}

                    {

                        showMenu &&

                        <div

                            className="
                                absolute

                                top-16
                                right-0

                                w-72

                                bg-white

                                rounded-3xl

                                shadow-2xl

                                border
                                border-orange-100

                                overflow-hidden

                                animate-in
                                fade-in
                                zoom-in
                            "

                        >

                            {/* User */}

                            <div

                                className="
                                    p-5

                                    border-b
                                    border-orange-100
                                "

                            >

                                <div

                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "

                                >

                                    <UserCircle2

                                        size={45}

                                        className="text-orange-500"

                                    />

                                    <div>

                                        <h2

                                            className="
                                                font-bold
                                                text-gray-900
                                            "

                                        >

                                            My Profile

                                        </h2>

                                        <p

                                            className="
                                                text-sm
                                                text-gray-500
                                            "

                                        >

                                            Welcome Back

                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Menu */}

                            <NavLink

                                to="/favorites"

                                className="
                                    flex
                                    items-center
                                    gap-3

                                    px-5
                                    py-4

                                    hover:bg-orange-50

                                    transition-all
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

                                    transition-all
                                "

                            >

                                <BookOpen size={20} />

                                My Recipes

                            </NavLink>

                            <NavLink

                                to="/profile"

                                className="
                                    flex
                                    items-center
                                    gap-3

                                    px-5
                                    py-4

                                    hover:bg-orange-50

                                    transition-all
                                "

                            >

                                <Settings size={20} />

                                Profile Settings

                            </NavLink>

                            {/* Logout */}

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

                                    transition-all
                                "

                            >

                                <LogOut size={20} />

                                Logout

                            </button>

                        </div>

                    }

                </div>

            </div>
        </header>

    );

}