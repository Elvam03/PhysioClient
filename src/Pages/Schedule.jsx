import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [todoList, setTodoList] = useState([]);
  const [newEvent, setNewEvent] = useState("");

  // Format the date for the key (YYYY-MM-DD) to store events
  const formatDate = (date) => {
    return date.toLocaleDateString(); // Local date format without time zone issues
  };

  // Handle selecting a day on the calendar
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Add event to the calendar and to-do list
  const addEvent = () => {
    const eventDate = formatDate(date);
    if (newEvent) {
      setEvents((prev) => ({
        ...prev,
        [eventDate]: [...(prev[eventDate] || []), newEvent],
      }));
      setTodoList([...todoList, { date: eventDate, event: newEvent }]);
      setNewEvent(""); // Reset input field
    }
  };

  // Delete event from to-do list and calendar
  const deleteEvent = (eventToDelete) => {
    setTodoList(todoList.filter((item) => item.event !== eventToDelete));
    const updatedEvents = { ...events };
    for (const key in updatedEvents) {
      updatedEvents[key] = updatedEvents[key].filter(
        (event) => event !== eventToDelete
      );
      if (updatedEvents[key].length === 0) {
        delete updatedEvents[key];
      }
    }
    setEvents(updatedEvents);
  };

  // Render highlighted dates for calendar
  const tileClassName = ({ date, view }) => {
    const eventDate = formatDate(date);
    if (events[eventDate]) {
      return "highlight";
    }
    return "";
  };

  return (
    <div>
         {/* Navbar */}
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
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="p-6 w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-600">My Schedule</h1>

        {/* Calendar */}
        <div className="m-6 flex justify-center">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileClassName={tileClassName}
            
          />
        </div>

        {/* Add Event Section */}
        <div className="mb-6 flex justify-center flex-col">
          <h2 className="text-xl font-semibold mb-2 text-center text-teal-500">My Events</h2>
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Event details"
            className="border p-2 mb-2 w-full"
          />
          <button
            onClick={addEvent}
            className="bg-blue-900 text-white py-2 px-4 rounded"
          >
            Add Event
          </button>
        </div>

        {/* To-Do List */}
        <div className="bg-white rounded-lg shadow-lg h-full p-5">
          <h2 className="text-xl font-semibold mb-2 text-center text-teal-500">To-Do List</h2>
          <h1 className="text-gray-500">This is my to-do list:</h1>
          <ul className="list-none">
            {todoList.map((todo, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span>
                  {todo.event} - {todo.date}
                </span>
                <button
                  onClick={() => deleteEvent(todo.event)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Schedule;
