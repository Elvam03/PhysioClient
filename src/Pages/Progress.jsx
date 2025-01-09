import React, { useState } from "react";

function Progress() {
    const videos = [
        { id: 1, title: "Morning Stretch Routine", completed: true },
        { id: 2, title: "Lower Back Pain Relief", completed: true },
        { id: 3, title: "Full-Body Relaxation", completed: false },
    ];

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);
        }
    };

    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState("");

    const addGoal = () => {
        if (newGoal) {
            setGoals([...goals, newGoal]);
            setNewGoal("");
        }
    };

    return (
        <div className="">
            {/* Navbar */}
            <div className="sticky top-0">
                <nav className="bg-white flex flex-col">
                    <div className="text-center p-2">
                        <span className="text-lg lg:text-4xl text-blue-800 font-semibold p-2">
                            PhysioCare
                        </span>
                        <span className="text-lg lg:text-4xl text-teal-500 font-semibold">
                            Network
                        </span>

                    </div>
                    <div className="text-center text-gray-400 pb-2 text-sm md:text-md">
                        <h1>Making you better</h1>
                    </div>
                </nav>
            </div>



            <div className="bg-gray-100 max-w-screen">
                {/* My progress */}
                <div>
                    <div className="mb-5 p-5">
                        <h2 className="text-2xl font-bold text-gray-800">My Progress</h2>
                        <p className="text-gray-600 mt-2">
                            Below is a list of videos you have watched or completed.
                        </p>
                        <div className="mt-6">
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="flex items-center justify-between border-b py-4"
                                >
                                    <div>
                                        <h3
                                            className={`text-lg font-semibold ${video.completed ? "text-green-600" : "text-gray-800"
                                                }`}
                                        >
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {video.completed ? "Completed" : "In Progress"}
                                        </p>
                                    </div>
                                    <div>
                                        {video.completed ? (
                                            <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                                                ✅ Finished
                                            </span>
                                        ) : (
                                            <span className="inline-block px-3 py-1 bg-yellow-400 text-white text-sm rounded-full">
                                                🔄 Continue
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* My Health Section */}
                <section className="mb-5 p-6">
                    <h2 className="text-2xl font-bold text-gray-800">My Health</h2>
                    <p className="text-gray-600 mt-2">Track your health and calculate BMI.</p>
                    <div className="mt-6 space-y-4">
                        <div className="flex space-x-4">
                            <input
                                type="number"
                                placeholder="Height (cm)"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="flex-1 p-2 border rounded-lg"
                            />
                            <input
                                type="number"
                                placeholder="Weight (kg)"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="flex-1 p-2 border rounded-lg"
                            />
                        </div>
                        <button
                            onClick={calculateBMI}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            Calculate BMI
                        </button>
                        {bmi && (
                            <p className="text-lg font-bold text-gray-800">
                                Your BMI is: {bmi}
                            </p>
                        )}
                    </div>
                </section>


                {/* My Goals Section */}
                <div className="mb-5 p-6">
                    <h2 className="text-2xl font-bold text-gray-800">My Goals</h2>
                    <p className="text-gray-600">
                        Set and track your personal fitness goals.
                    </p>
                    <div className="mt-6 space-y-4">
                        <input
                            type="text"
                            placeholder="Enter a goal"
                            value={newGoal}
                            onChange={(e) => setNewGoal(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                        />
                        <button
                            onClick={addGoal}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            Add Goal
                        </button>
                        <ul className="mt-4 list-disc pl-6 text-gray-800">
                            {goals.map((goal, index) => (
                                <li key={index}>{goal}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* My Achievements Section */}
                <section className="bg-white p-6 mb-5">
                    <h2 className="text-2xl font-bold text-gray-800">My Achievements</h2>
                    <p className="text-gray-600 mt-2">
                        Celebrate your achievements with medals!
                    </p>
                    <div className="mt-6 flex space-x-4">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                                🥇
                            </div>
                            <p className="text-sm mt-2">Gold Medal</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                                🥈
                            </div>
                            <p className="text-sm mt-2">Silver Medal</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                                🥉
                            </div>
                            <p className="text-sm mt-2">Bronze Medal</p>
                        </div>
                    </div>
                </section>

            </div>


        </div>

    )

}
export default Progress