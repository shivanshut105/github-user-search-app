import iconSvg from '../../assets/images/icon-search.svg';
import classes from "./SearchBar.module.css"
import SearchButton from './SearchButton';

const SearchBar = () => {
    return ( 
        <div className={classes.container}>
            <img src={iconSvg} alt='search'/>
            <SearchButton />
        </div>
     );
}
 
export default SearchBar;