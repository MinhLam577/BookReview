import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500">
            <Outlet />
        </div>
    );
}
