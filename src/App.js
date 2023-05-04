import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Components/Homepage';
import TaskPage from './Components/TaskPage';
import Navbar from './Components/Navbar';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">
    <Navbar/>
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/task" element={<TaskPage/>} />
            <Route path="/about" element={<About/>} />
          </Routes>

    </div>
  );
}

export default App;

