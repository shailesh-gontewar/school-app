import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeLayout from "./component/Home";
import SignIn from "./component/auth/login";
import AddTeacher from "./component/pages/AddTeacher";
import Box from "@mui/material/Box";
import CreatePost from "./component/pages/CreatePost";
import SignInTeacher from "./component/auth/loginteacher";
import Dashboard from "./component/dashboard";
import TeacherList from "./component/pages/TeacherList";
import Row from "./component/Dummy";
import MyProSidebar from "./component/Sidebar";
import Facebook from "./component/pages/Postlist";
import { useState } from "react";

function App() {
  const admin = null;
  const [login, setLogin] = useState(admin);
  return (
    <div className="App">
      {login && <MyProSidebar />}
      <main className="content">
        {login && <HomeLayout setLogin={setLogin} />}
        <Box component="main" sx={{ pt: 3 }}>
          <Routes>
            {login && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signinteacher" element={<SignInTeacher />} />
                <Route path="/addteacher" element={<AddTeacher />} />
                <Route path="/createpost" element={<CreatePost />} />
                <Route path="/list" element={<TeacherList />} />
                <Route path="/dummy" element={<Row />} />
                <Route path="/post" element={<Facebook />} />{" "}
              </>
            )}
            <Route index path="/" element={<SignIn setLogin={setLogin} />} />
          </Routes>
        </Box>
      </main>
    </div>
  );
}

export default App;
