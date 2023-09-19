import { useRef } from 'react';
import { ReactComponent as SearchSvg } from '../../assets/icons/icon-search.svg';
import classes from "./SearchBar.module.css"
import { useSelector } from 'react-redux';

const SearchBar = (props) => {
    const inputRef = useRef();
    const theme = useSelector(state => state.ui.mode);

    const submitHandler = (event) => {
        event.preventDefault();
        props.fetchData(inputRef.current.value);
        inputRef.current.value = "";
    }

    let searchBarClasses;
    if (theme) searchBarClasses = classes.container + ' ' + classes.Light;
    else searchBarClasses = classes.container + ' ' + classes.Dark;

    return (
        <form onSubmit={submitHandler}>
            <div className={searchBarClasses}>
                <div id='svg'>
                    <SearchSvg />
                </div>
                <input type="text"
                    ref={inputRef}
                    name="username"
                    id="search-bar__username"
                    placeholder="Search GitHub username"
                    required />
                <button type='submit' className={classes.Button}>Search</button>
            </div>
        </form>
    );
}

export default SearchBar;