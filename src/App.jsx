import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import Students from './pages/Students.jsx';
import Login from "./component/auth/Login.jsx";
import Addquestions from './pages/Addquestions.jsx';
import EditUserPage from './component/actions/student/EditUserPage.jsx';
import Settings from './pages/Settings.jsx';
import Viewuserdata from './component/actions/student/Viewuserdata.jsx';
import Questionsection from './pages/Questionsection.jsx';
import FilteredcategoryBasic from './component/Questioncategory/FilteredcategoryBasic.jsx';
import Basic from './component/actions/questions/Basic.jsx';

function App() { 
  return (
    <Routes> 
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin/students" element={<Students />} />
      <Route path="/admin/addquestions" element={<Addquestions />} />45
      <Route path="/admin/student/edit/:userId" element={<EditUserPage />} />
      <Route path="/admin/student/view/:userId" element={<Viewuserdata />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/category" element={<Questionsection />} />
      <Route path="/admin/category/basic" element={<FilteredcategoryBasic />} />
      <Route path="/admin/category/:slug" element={<Basic />} />
    </Routes>
  );
}

export default App;
