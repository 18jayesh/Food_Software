import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
    Menu,
    X,
    ChefHat,
    LayoutDashboard,
    PlusCircle,
    BookOpen,
    Heart,
    CalendarDays,
    UserCircle,
    LogOut
} from "lucide-react";

export default function Sidebar() {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard
        },
        {
            name: "Create Recipe",
            path: "/dashboard/create-recipe",
            icon: PlusCircle
        },
        {
            name: "My Recipes",
            path: "/dashboard/my-recipes",
            icon: BookOpen
        },
        {
            name: "Favorites",
            path: "/dashboard/favorites",
            icon: Heart
        },
        {
            name: "Meal Planner",
            path: "/dashboard/meal-planner",
            icon: CalendarDays
        },
        {
            name: "Profile",
            path: "/dashboard/profile",
            icon: UserCircle
        }
    ];

    const handleLogout = () => {

        localStorage.removeItem("user");

        navigate("/login");
    };

    const SidebarContent = () => (
        <>
            {/* Logo */}

            <div className="p-6 border-b border-orange-100">

                <div className="flex items-center gap-3">

                    <div
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-gradient-to-r
                            from-orange-500
                            to-amber-500
                            flex
                            items-center
                            justify-center
                            shadow-lg
                        "
                    >
                        <ChefHat
                            size={28}
                            className="text-white"
                        />
                    </div>

                    <div>

                        <h2 className="text-xl font-bold text-gray-800">
                            Recipe Hub
                        </h2>

                        <p className="text-sm text-gray-500">
                            Food Community
                        </p>

                    </div>

                </div>

            </div>

            {/* Menu */}

            <div className="flex-1 p-4 space-y-2">

                {
                    menuItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `
                                    flex
                                    items-center
                                    gap-3
                                    px-4
                                    py-3
                                    rounded-2xl
                                    transition-all
                                    duration-300

                                    ${
                                        isActive
                                            ? `
                                            bg-gradient-to-r
                                            from-orange-500
                                            to-amber-500
                                            text-white
                                            shadow-lg
                                            `
                                            : `
                                            text-gray-700
                                            hover:bg-orange-50
                                            hover:text-orange-600
                                            `
                                    }
                                    `
                                }
                            >

                                <Icon size={20} />

                                <span className="font-medium">
                                    {item.name}
                                </span>

                            </NavLink>

                        );
                    })
                }

            </div>

            {/* Logout */}

            <div className="p-4 border-t border-orange-100">

                <button
                    onClick={handleLogout}
                    className="
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-2
                        py-3
                        rounded-2xl
                        bg-red-500
                        text-white
                        hover:bg-red-600
                        transition-all
                    "
                >

                    <LogOut size={18} />

                    Logout

                </button>

            </div>
        </>
    );

    return (
        <>
            {/* Mobile Menu Button */}

            <button
                onClick={() => setOpen(true)}
                className="
                    lg:hidden
                    fixed
                    top-5
                    left-5
                    z-40
                    bg-white
                    p-3
                    rounded-xl
                    shadow-lg
                "
            >
                <Menu size={22} />
            </button>

            {/* Desktop Sidebar */}

            <aside
                className="
                    hidden
                    lg:flex
                    w-72
                    p-4
                "
            >

                <div
                    className="
                        w-full
                        bg-white/80
                        backdrop-blur-xl
                        border
                        border-orange-100
                        rounded-[30px]
                        shadow-xl
                        flex
                        flex-col
                    "
                >
                    <SidebarContent />
                </div>

            </aside>

            {/* Mobile Drawer */}

            <AnimatePresence>

                {
                    open && (

                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setOpen(false)}
                                className="
                                    fixed
                                    inset-0
                                    bg-black/40
                                    z-40
                                "
                            />

                            <motion.div
                                initial={{ x: -300 }}
                                animate={{ x: 0 }}
                                exit={{ x: -300 }}
                                transition={{
                                    duration: 0.3
                                }}
                                className="
                                    fixed
                                    left-0
                                    top-0
                                    h-full
                                    w-72
                                    bg-white
                                    z-50
                                    flex
                                    flex-col
                                "
                            >

                                <div className="flex justify-end p-4">

                                    <button
                                        onClick={() =>
                                            setOpen(false)
                                        }
                                    >
                                        <X size={24} />
                                    </button>

                                </div>

                                <SidebarContent />

                            </motion.div>

                        </>
                    )
                }

            </AnimatePresence>
        </>
    );
}