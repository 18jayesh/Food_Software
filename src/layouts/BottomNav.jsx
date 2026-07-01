import { NavLink } from "react-router-dom";

import {
    LayoutDashboard,
    PlusCircle,
    BookOpen,
    Heart,
    UserCircle
} from "lucide-react";

export default function BottomNav() {

    const navItems = [
        {
            icon: LayoutDashboard,
            path: "/dashboard"
        },
        {
            icon: PlusCircle,
            path: "/dashboard/create-recipe"
        },
        {
            icon: BookOpen,
            path: "/dashboard/my-recipes"
        },
        {
            icon: Heart,
            path: "/dashboard/favorites"
        },
        {
            icon: UserCircle,
            path: "/dashboard/profile"
        }
    ];

    return (
        <div
            className="
                lg:hidden
                fixed
                bottom-0
                left-0
                right-0
                z-50
                bg-white/90
                backdrop-blur-xl
                border-t
                border-orange-100
            "
        >

            <div className="grid grid-cols-5 h-16">

                {
                    navItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `
                                    flex
                                    items-center
                                    justify-center
                                    transition-all

                                    ${
                                        isActive
                                            ? "text-orange-500"
                                            : "text-gray-500"
                                    }
                                    `
                                }
                            >
                                <Icon size={24} />
                            </NavLink>

                        );
                    })
                }

            </div>

        </div>
    );
}