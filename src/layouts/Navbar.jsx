import {
    Search,
    Bell,
    ChefHat
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    const navLinks = [
        {
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            name: "Create Recipe",
            path: "/dashboard/create-recipe"
        },
        {
            name: "My Recipes",
            path: "/dashboard/my-recipes"
        },
        {
            name: "Favorites",
            path: "/dashboard/favorites"
        },
        {
            name: "Meal Planner",
            path: "/dashboard/meal-planner"
        }
    ];
    return (
        <header
            className="
                sticky
                top-0
                z-50
                bg-white/90
                backdrop-blur-xl
                border-b
                border-orange-100
                shadow-sm
            "
        >

            {/* Top Row */}

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-4
                    lg:px-6
                    h-18
                    flex
                    items-center
                    justify-between
                "
            >

                {/* Logo */}

                <div className="flex items-center gap-3">

                    <div
                        className="
                            logo
                            w-12
                            h-12
                            rounded-2xl
                            bg-gradient-to-r
                            from-orange-500
                            to-amber-500
                            flex
                            items-center
                            justify-center
                        "
                        
                    >
                        <Link to="/dashboard">
                            <ChefHat
                                size={24}
                                className="text-white"
                            />
                        </Link>
                        
                    </div>

                    <div>

                        <h2
                            className="
                                text-xl
                                font-bold
                                text-gray-800
                            "
                        >
                            Recipe Hub
                        </h2>

                    </div>

                </div>

                {/* Search */}

                <div
                    className="
                        hidden
                        md:flex
                        relative
                        w-[320px]
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
                        type="text"
                        placeholder="Search recipes..."
                        className="
                            w-full
                            h-11
                            pl-11
                            pr-4
                            rounded-full
                            border
                            border-orange-100
                            bg-orange-50
                            focus:outline-none
                            focus:ring-2
                            focus:ring-orange-300
                        "
                    />

                </div>

                {/* Right */}

                <div className="flex items-center gap-3">

                    <button
                        className="
                            w-11
                            h-11
                            rounded-full
                            bg-orange-50
                            flex
                            items-center
                            justify-center
                            hover:bg-orange-100
                            transition
                        "
                    >
                        <Bell size={20} />
                    </button>

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            px-3
                            py-2
                            rounded-full
                            bg-orange-50
                        "
                    >

                        <div
                            className="
                                w-9
                                h-9
                                rounded-full
                                bg-gradient-to-r
                                from-orange-500
                                to-amber-500
                                flex
                                items-center
                                justify-center
                                text-white
                                font-semibold
                            "
                        >
                            J
                        </div>

                        <span
                            className="
                                hidden
                                md:block
                                font-medium
                                text-gray-700
                            "
                        >
                            Jayesh
                        </span>

                    </div>

                </div>

            </div>

            {/* Navigation Row */}

            <div
                className="
                    hidden
                    lg:flex
                    justify-center
                    pb-3
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        bg-orange-50
                        p-2
                        rounded-full
                    "
                >

                    {navLinks.map((link) => (

    <NavLink
        key={link.path}
        to={link.path}
        end={link.path === "/dashboard"}
        className={({ isActive }) =>
            `
            px-5
            py-2
            rounded-full
            font-medium
            transition-all
            duration-300

            ${
                isActive
                    ? `
                    bg-orange-500
                    text-white
                    shadow-md
                    `
                    : `
                    text-gray-600
                    hover:bg-white
                    `
            }
            `
        }
    >
        {link.name}
    </NavLink>

))}

                </div>

            </div>

        </header>
    );
}