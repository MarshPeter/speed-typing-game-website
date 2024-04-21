import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getWordsPerMinuteOverTime from "../services/dataFetcher";
import Header from "../components/Header";
import Button from "../components/Button";
import Analytics from "../components/Analytics";
import WordData from "../Models/WordData";
import UserDetails from "../components/UserDetails";

enum PageType {
    DETAILS,
    ANALYTICS,
}

export default function Profile() {
    const navigate = useNavigate();
    const userLoggedIn = localStorage.getItem("username");
    const [data, setData] = useState([{}]);
    const [dataRetrieved, setDataRetrieved] = useState(false);
    const [showComponent, setShowComponent] = useState(PageType.ANALYTICS);

    useEffect(() => {
        if (!userLoggedIn) {
            navigate("/");
        }

        setData(getWordsPerMinuteOverTime());
        setDataRetrieved(true);
    }, []);

    function showAnalytics() {
        setShowComponent(PageType.ANALYTICS);
    }

    function showDetails() {
        setShowComponent(PageType.DETAILS);
    }

    if (!dataRetrieved) {
        return <div>loading</div>;
    }

    return (
        <div>
            <Header></Header>
            <main className="flex justify-center gap-8">
                <div className="flex flex-wrap flex-col gap-8 justify-center bg-indigo-100/40 content-center min-h-96 rounded-2xl border-8 border-black p-8 text-2xl">
                    <Button
                        prompt={"Profile Details"}
                        onPressFunction={showDetails}
                    ></Button>
                    <Button
                        prompt={"Analytics"}
                        onPressFunction={showAnalytics}
                    ></Button>
                </div>
                <div className="flex flex-wrap gap-8 justify-center bg-indigo-100/40 content-center min-h-96 min-w-96 rounded-2xl border-8 border-black p-8 text-2xl">
                    {showComponent === PageType.ANALYTICS ? (
                        <Analytics data={data as WordData[]}></Analytics>
                    ) : (
                        <UserDetails></UserDetails>
                    )}
                </div>
            </main>
        </div>
    );
}
