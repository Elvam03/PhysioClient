import React, { useState, useRef, useEffect } from 'react';

const Library = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedExercises, setBookmarkedExercises] = useState([]);
  const popupRef = useRef(null);

  const featuredExercises = [
    { id: 1, name: 'Push-Up', description: 'A basic upper-body exercise.', image: './src/assets/push ups.jpg' },
    { id: 2, name: 'Squat', description: 'Strengthens the legs and core.', image: './src/assets/squat.jpg' },
    { id: 3, name: 'Plank', description: 'Core stability exercise.', image: './src/assets/plank.jpg' },
  ];

  const allExercises = [
    { id: 4, name: 'Lunge', target: 'Legs', description: 'Improves balance and leg strength.', image: './src/assets/lunge.jpg' },
    { id: 5, name: 'Bicep Curl', target: 'Arms', description: 'Strengthens the biceps.', image: './src/assets/bicep curl.jpg' },
    { id: 6, name: 'Deadlift', target: 'Back', description: 'Improves posture and back strength.', image: './src/assets/deadlift.jpg' },
    { id: 7, name: 'Burpee', target: 'Full Body', description: 'High-intensity exercise for overall strength.', image: './src/assets/burpee.jpg' },
    { id: 8, name: 'Mountain Climber', target: 'Core', description: 'Engages the core and legs.', image: './src/assets/mountain.jpeg' },
    { id: 9, name: 'Jumping Jack', target: 'Full Body', description: 'Cardio exercise to improve stamina.', image: './src/assets/jumping.jpg' },
    { id: 10, name: 'Pull-Up', target: 'Arms', description: 'Strengthens upper body muscles.', image: './src/assets/pull up.jpg' },
    { id: 11, name: 'Leg Raise', target: 'Abs', description: 'Strengthens the lower abdominal muscles.', image: './src/assets/leg raises.jpeg' },
  ];

  const handleBookmark = (exercise) => {
    setBookmarkedExercises((prev) =>
      prev.some((item) => item.id === exercise.id)
        ? prev.filter((item) => item.id !== exercise.id)
        : [...prev, exercise]
    );
  };

  const filteredExercises = allExercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close pop-up when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSelectedExercise(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>

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
    <div className="p-6 min-h-screen bg-gray-100 text-black">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Featured Carousel */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Featured Exercises</h2>
        <div className="flex overflow-x-auto gap-4">
          {featuredExercises.map((exercise) => (
            <div
              key={exercise.id}
              onClick={() => setSelectedExercise(exercise)}
              className="flex-shrink-0 w-64 p-4 bg-white shadow-md rounded-lg cursor-pointer">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="h-32 w-full object-cover rounded-lg mb-2"
              />
              <h3 className="font-bold text-lg">{exercise.name}</h3>
              <p className="text-sm text-gray-600">{exercise.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Exercise Grid */}
      <div>
        <h2 className="text-xl font-bold mb-4">Exercise Library</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              onClick={() => setSelectedExercise(exercise)}
              className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg cursor-pointer">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="h-32 w-full object-cover rounded-lg mb-2"
              />
              <h3 className="font-bold text-lg">{exercise.name}</h3>
              <p className="text-sm text-gray-600">Target: {exercise.target}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBookmark(exercise);
                }}
                className={`mt-2 px-4 py-2 rounded-lg ${
                  bookmarkedExercises.some((item) => item.id === exercise.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                {bookmarkedExercises.some((item) => item.id === exercise.id)
                  ? 'Unbookmark'
                  : 'Bookmark'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      {selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div ref={popupRef} className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="font-bold text-lg mb-2">{selectedExercise.name}</h3>
            <p className="text-sm mb-4">{selectedExercise.description}</p>
            <img
              src={selectedExercise.image}
              alt={selectedExercise.name}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => alert(`Watching ${selectedExercise.name}`)}>
                Watch
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => setSelectedExercise(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Library;
