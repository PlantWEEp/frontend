import './App.css';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Questions from './pages/Questions';
import Students from './pages/Students.jsx';
import Login from "./component/auth/Login.jsx";
import Addquestions from './pages/Addquestions.jsx';

function App() { 

  return (
    <>
    <Routes> 
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/admin/questions" element={<Questions/>}/>
        <Route path="/admin/students" element={<Students/>}/>
        <Route path="/admin/addquestions" element={<Addquestions/>}/>
    </Routes>
    </>
  )
}

export default App
