import './App.css';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Questions from './pages/Questions';
import Students from './pages/Students.jsx';
import Login from "./component/auth/Login.jsx";
import Addquestions from './pages/Addquestions.jsx';
import EditUserPage from './component/actions/student/EditUserPage.jsx';
import Settings from './pages/Settings.jsx';
import Viewuserdata from './component/actions/student/Viewuserdata.jsx';
import Questionsection from './pages/Questionsection.jsx';

function App() { 

  return (
    <>
    <Routes> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/admin/questions" element={<Questions/>}/>
        <Route path="/admin/students" element={<Students/>}/>
        <Route path="/admin/addquestions" element={<Addquestions/>}/>
        <Route path="/admin/student/edit/:userId" element={<EditUserPage/>}  />
        <Route path="/admin/student/view/:userId" element={<Viewuserdata/>}  />
        <Route path="/admin/settings" element={<Settings/>}  />
        <Route path="/admin/questionsection" element={<Questionsection/>}  />

    </Routes>
    </>
  )
}

export default App
