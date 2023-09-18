import { useRef } from 'react';
import iconSvg from '../../assets/icons/icon-search.svg';
import classes from "./SearchBar.module.css"

const SearchBar = (props) => {
    const inputRef = useRef();
    
    const submitHandler = (event)=>{
        event.preventDefault();
        props.fetchData(inputRef.current.value);
        inputRef.current.value = "";
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.container}>
                <img src={iconSvg} alt='search' />
                <input type="text"
                    ref={inputRef}
                    name="username"
                    id="search-bar__username"
                    placeholder="Search GitHub username..."
                    required />
                <button type='submit' className={classes.Button}>Search</button>
            </div>
        </form>
    );
}

export default SearchBar;