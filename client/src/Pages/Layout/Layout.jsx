import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";

const Layout = ({isLogin}) => {
    return (
        <main>
            {/*<Header islogin={isLogin}/>*/}
            <Outlet/>
        </main>
    );
};

export default Layout;