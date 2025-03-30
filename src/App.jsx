import { useState } from "react";
import "./App.css";
import { TodoThemeProvider } from "./contexts/todoContext";
import TodoForm from "./components/TodoForm";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo(todo);
  };
  const updateTodo = (todo) => {
    setTodo(todo);
  };
  const deleteTodo = (todo) => {
    setTodo(todo);
  };
  const toggleComplete = (todo) => {
    setTodo(todo);
  };

  return (
    <TodoThemeProvider
      value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Your Daily Todo List
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoThemeProvider>
  );
}

export default App;
