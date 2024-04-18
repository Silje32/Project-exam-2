import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Comments from "./pages/Comments";
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";
import MyProfile from "./pages/MyProfile";
import AllProfiles from "./pages/AllProfiles";
import SingleProfile from "./pages/SingleProfile";
import Layout from "./components/Layout/Layout";
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
            <Route path="/home/:id" element={<SingleProfile />} />
            <Route path="/home/comments/:id" element={<Comments />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="/my-profile/:id" element={<SinglePost />} />
            <Route path="/my-profile/comments/:id" element={<Comments />} />
            <Route path="profiles" element={<AllProfiles />} />
          </Route>
        </Routes>
      </>
    );
  }
  
  export default App;
