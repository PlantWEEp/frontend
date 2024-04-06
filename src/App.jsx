import './App.css';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Questions from './pages/Questions';
import Students from './pages/Students';
import Login from './pages/Login';



function App() { 

  return (
    <>
    <Routes>
        <Route path="admin/login" element={<Login/>}/>
        <Route path="admin/dashboard" element={<Dashboard/>}/>
        <Route path="admin/questions" element={<Questions/>}/>
        <Route path="admin/students" element={<Students/>}/>
    </Routes>
    </>
  )
}

export default App
