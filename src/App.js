import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Components/Homepage';
import TaskPage from './Components/TaskPage';
import Navbar from './Components/Navbar';
import { About } from './Components/About';
import NoMatch from './Components/NoMatch';
import IncompleteTasks from './Components/IncompleteTasks';
import CompletedTasks from './Components/CompletedTasks';
import Task from './Components/Task';

function App() {
  return (
    <div className="App">
    <Navbar/>
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/taskpage" element={<TaskPage/>} >
              <Route path  = 'incomplete' element ={<IncompleteTasks/>}/>
              <Route path  = ':taskid' element ={<Task/>}/>
              <Route index element ={<IncompleteTasks/>}/>
              <Route path  = 'complete' element ={<CompletedTasks/>}/>
               </Route>
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
    </div>
  );
}

export default App;

