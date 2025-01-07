import React, { useState } from "react";


function Recommended() {

    
    const [activeTab, setActiveTab] = useState("chats"); 

    return (
        <div>
            <section className="min-h-screen bg-gray-100 pb-2">
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
                <div className=" bg-gray-100 md:p-4 p-2">
                    <div className=" bg-white rounded-lg shadow-lg h-full">
                        {/* Tabs */}
                        <div className="flex border-b">
                            <button
                                className={`flex-1 py-2 px-4 text-center ${activeTab === "chats"
                                        ? "border-b-2 border-blue-500 text-blue-500"
                                        : "text-gray-600"
                                    }`}
                                onClick={() => setActiveTab("chats")}
                            >
                                Chats
                            </button>
                            <button
                                className={`flex-1 py-2 px-4 text-center ${activeTab === "exercises"
                                        ? "border-b-2 border-blue-500 text-blue-500"
                                        : "text-gray-600"
                                    }`}
                                onClick={() => setActiveTab("exercises")}
                            >
                                Exercises
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {activeTab === "chats" && (
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">Chats</h2>
                                    <p className="mt-4 text-gray-600">
                                        Here you can view and manage your chats.
                                    </p>
                                    {/* Add chat-related content here */}
                                </div>
                            )}
                            {activeTab === "exercises" && (
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">Exercises</h2>
                                    <p className="mt-4 text-gray-600">
                                        Here you can view your recommended exercises.
                                    </p>
                                    {/* Add exercise-related content here */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                



            </section>

        </div>

    )
}
export default Recommended