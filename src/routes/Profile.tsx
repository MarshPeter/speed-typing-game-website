import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const userLoggedIn = localStorage.getItem("username");

    useEffect(() => {
        if (!userLoggedIn) {
            navigate("/");
        }
    }, []);

    return <div>Profile</div>;
}
