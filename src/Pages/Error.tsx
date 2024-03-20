import { useLocation, useNavigate } from "react-router-dom";

const Error = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract error information from location state
    const error = location.state as { status: number; statusText: string } | undefined;

    return (
        <div className="bg-slate-500 h-screen flex flex-col items-center justify-center">
            <div className="w-full py-10 px-11">
                <h1 className="self-center py-6 text-white text-3xl text-center">Oops!!! We Couldn't Find the Page you're Looking For </h1>
                {error && (
                    <h2 className="self-center py-6 text-red-500 text-4xl text-center text-nowrap">{error.status} : {error.statusText}</h2>
                )}
            </div>
            <button className="px-8 py-4 rounded-lg bg-yellow-400" onClick={() => navigate("/")}>Go Home</button>
        </div>
    );
};

export default Error;
