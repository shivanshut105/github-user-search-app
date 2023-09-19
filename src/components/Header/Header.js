import classes from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store";

const Header = () => {
    // const [theme, setTheme] = useState(false);
    const theme = useSelector(state => state.ui.mode);
    const dispatch = useDispatch();

    const toggleThemeHandler = () => {
        dispatch(uiActions.toggle());
    }

    return (
        <div className={classes.container}>
            <h2>devfinder</h2>
            {!theme &&  
                <button className={classes.ButtonLight} onClick={toggleThemeHandler}>
                    <span>LIGHT</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                </button>
            }
            {theme &&
                <button className={classes.ButtonDark} onClick={toggleThemeHandler}>
                    <span className={classes.dark}>DARK</span>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" id="toggle__icon"><path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="currentColor" fill-rule="nonzero"></path></svg>
                </button>
            }
        </div>
    );
}

export default Header;