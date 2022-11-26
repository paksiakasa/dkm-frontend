import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Users from "./pages/Users.jsx";
import Merchs from "./pages/Merchs.jsx";
import AddUser from "./pages/AddUser.jsx";
import EditUser from "./pages/EditUser.jsx";
import AddMerch from "./pages/AddMerch.jsx";
import EditMerch from "./pages/EditMerch.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/add" element={<AddUser/>}/>
          <Route path="/users/edit/:id" element={<EditUser/>}/>
          <Route path="/merchs" element={<Merchs/>}/>
          <Route path="/merchs/add" element={<AddMerch/>}/>
          <Route path="/merchs/edit/:id" element={<EditMerch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
