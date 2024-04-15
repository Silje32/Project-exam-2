import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../Footer/index";

function Layout() {
    return (
      <>
        <Nav />
        <Outlet />
        <Footer />
      </>
    );
  }

export default Layout;  