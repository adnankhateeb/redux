import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import { Todo } from "./components/Todo";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </div>
   );
}

export default App;
