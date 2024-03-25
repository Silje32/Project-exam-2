import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Comments from "./pages/Comments";
import CreatePost from "./pages/CreatePost";
import MyProfile from "./pages/MyProfile";
import Layout from "./components/Layout/index";
import GlobalStyles from "./styles/GlobalStyles";

  
  function App() {
  
    return (
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="/home/comments/:id" element={<Comments />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>
        </Routes>
      </>
    );
  }
  
  export default App;
