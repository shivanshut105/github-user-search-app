import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import SearchBar from "../components/SearchBar/SearchBar";
import classes from "./Layout.module.css"

const Layout = () => {
    return ( 
        <div className={classes.container}>
            <Header />
            <SearchBar />
            <Profile />
        </div>
     );
}
 
export default Layout;