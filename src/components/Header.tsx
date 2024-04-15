export default function Header() {
    return (
        <header className="flex justify-center bg-black p-3 mb-4 text-4xl text-white border-b-2 border-white">
            <div className="w-10/12 flex justify-between">
                <div>
                    <p>SpeedTypers</p>
                </div>
                <div>
                    <nav className="flex gap-4">
                        <a href="">Home</a>
                        <a href="">Race</a>
                        <a href=""></a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
