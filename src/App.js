import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Components/Homepage';
import TaskPage from './Components/TaskPage';
import Navbar from './Components/Navbar';
// import { About } from './Components/About';
import NoMatch from './Components/NoMatch';
import IncompleteTasks from './Components/IncompleteTasks';
import CompletedTasks from './Components/CompletedTasks';
import Task from './Components/Task';
import Profile from './Components/Profile';
import { AuthProvider } from './Utils/auth';
import Login from './Components/Login';
import RequireAuth from './Utils/RequireAuth';
const LazyAbout = React.lazy(() => import('./Components/About'))

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/taskpage" element={<TaskPage />} >
          <Route path='incomplete' element={<IncompleteTasks />} />
          <Route path=':taskid' element={<Task />} />
          <Route index element={<IncompleteTasks />} />
          <Route path='complete' element={<CompletedTasks />} />
        </Route>
        <Route path="/about" element={<React.Suspense fallback = 'loading. . .'><LazyAbout /></React.Suspense>} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;

