import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="bg-white border-t border-black/5 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-bold uppercase opacity-20 mb-4">
                        MinhDepTraiBook
                    </p>
                    <p className="text-sm opacity-40">© 2026 MinhDepTraiBook</p>
                </div>
            </footer>
        </div>
    );
}
