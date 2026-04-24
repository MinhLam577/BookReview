import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";

function AppContent() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location}>
                {/* Layout chính */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>

                {/* Layout riêng cho auth */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}
