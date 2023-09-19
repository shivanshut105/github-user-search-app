import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import SearchBar from "../components/SearchBar/SearchBar";
import classes from "./Layout.module.css"

const Layout = (props) => {
    return ( 
        <div className={classes.container}>
            <Header />
            <SearchBar fetchData={props.fetchData} />
            {props.userData && <Profile userData={props.userData}/>}
        </div>
     );
}
 
export default Layout;