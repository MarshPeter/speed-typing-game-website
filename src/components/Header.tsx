import { Link } from "react-router-dom";

export default function Header() {
    const loggedIn = localStorage.getItem("username");
    return (
        <header className="flex justify-center bg-black p-3 mb-8 text-4xl text-white border-b-2 border-white">
            <div className="w-10/12 flex justify-between">
                <div>
                    <p>SpeedTypers</p>
                </div>
                <div>
                    <nav className="flex gap-4">
                        <Link to="/">Home</Link>
                        <Link to="/prompt">Race</Link>
                        {loggedIn === null ? (
                            <Link to="/login">Login</Link>
                        ) : (
                            <>
                                <Link to="/logout">Logout</Link>
                                <Link to="/profile">Profile</Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
