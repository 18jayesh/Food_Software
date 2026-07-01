import { Outlet } from "react-router-dom";

import TopNavbar from "../pages/Home/TopNavbar";
import BottomNavigation from "../pages/Home/BottomNavigation";

import { useSearch } from "../context/SearchContext";

export default function MainLayout() {

    const {

        search,

        setSearch

    } = useSearch();

    return (

        <>

            {/* Desktop Navbar */}

            <div className="hidden lg:block">

                <TopNavbar

                    search={search}

                    onSearchChange={(e) =>

                        setSearch(e.target.value)

                    }

                />

            </div>

            {/* Page */}

            <main>

                <Outlet />

            </main>

            {/* Mobile Navigation */}

            <div className="lg:hidden">

                <BottomNavigation />

            </div>

        </>

    );

}