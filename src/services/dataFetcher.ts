const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

interface Data {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

function getProfileData(): Data[] {
    return data;
}

interface WordData {
    date: string;
    wordsPerMinute: number;
}

const wordData = [
    {
        date: "1/1/24",
        wordsPerMinute: 55,
    },
    {
        date: "8/1/24",
        wordsPerMinute: 60,
    },
    {
        date: "15/1/24",
        wordsPerMinute: 64,
    },
    {
        date: "22/1/24",
        wordsPerMinute: 63,
    },
    {
        date: "29/1/24",
        wordsPerMinute: 70,
    },
    {
        date: "6/2/24",
        wordsPerMinute: 67,
    },
    {
        date: "13/2/24",
        wordsPerMinute: 68,
    },
    {
        date: "20/2/24",
        wordsPerMinute: 74,
    },
];

function getWordsPerMinuteOverTime(): WordData[] {
    return wordData;
}

export default getWordsPerMinuteOverTime;
