import { Route, Routes } from "react-router";
import "./App.css";
import SingleTodo from "./components/SingleTodo";
import { Todo } from "./components/Todo";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/:id" element={<SingleTodo />} />
         </Routes>
      </div>
   );
}

export default App;
