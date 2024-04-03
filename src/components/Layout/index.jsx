import { Outlet } from "react-router-dom";
import Nav from "./nav";
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