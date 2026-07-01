import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

export default function DashboardLayout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">

            <Navbar />

            <main className="max-w-7xl mx-auto px-4 lg:px-6 py-6 pb-24">
                <Outlet />
            </main>

            <BottomNav />

        </div>
    );
}