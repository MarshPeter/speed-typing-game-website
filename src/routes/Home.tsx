import Header from "../components/Header";
import InPageLink from "../components/InPageLink";

function App() {
    return (
        <div className="bg-gray-200 min-h-screen min-w-screen">
            <Header></Header>
            <main className="flex justify-center">
                <div className="flex flex-col justify-center text-center gap-14 w-2/3 h-full p-16 bg-gray-700">
                    <div>
                        <h1 className="text-6xl text-white">SPEED TYPERS</h1>
                    </div>
                    <div>
                        <InPageLink linkTo="/prompt" text="Login"></InPageLink>
                    </div>
                    <div>
                        <InPageLink
                            linkTo="/prompt"
                            text="Register"
                        ></InPageLink>
                    </div>
                    <div>
                        <InPageLink
                            linkTo="/prompt"
                            text="Play as guest"
                        ></InPageLink>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
