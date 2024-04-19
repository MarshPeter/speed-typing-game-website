import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Logout() {
    const userName = localStorage.getItem("username");

    if (userName) {
        localStorage.removeItem("username");
    }

    return <Navigate to="/" replace={true}></Navigate>;
}
