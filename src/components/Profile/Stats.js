import {ReactComponent as TwitterSvg} from '../../assets/icons/x-twitter.svg';
import {ReactComponent as LocationSvg} from '../../assets/icons/icon-location.svg';
import {ReactComponent as CompanySvg} from '../../assets/icons/icon-company.svg';
import {ReactComponent as WebsiteSvg} from '../../assets/icons/icon-website.svg';
import classes from './Stats.module.css';
import { useSelector } from 'react-redux';

const Stats = (props) => {
    const theme = useSelector(state=>state.ui.mode);
    const notAvailableHandler = (value)=>{
        if(value) return <span>{value}</span>;
        else{
            return <span style={{color: 'gray'}}>N/A</span>
        }
    }
    const user = props.userData;
    let statsClasses;
    if(theme) statsClasses = classes.wrapper + ' ' + classes.Light;
    else statsClasses = classes.wrapper + ' ' + classes.Dark;
    return (
        <div className={statsClasses}>
            <div className={classes.miniWrapper1}>
                <div className={classes.cell}>
                    <LocationSvg className={classes.icon} />
                    {notAvailableHandler(user.location)}
                </div>
                <div className={classes.cell}>
                    <WebsiteSvg className={classes.icon} />
                    {notAvailableHandler(user.blog)}
                </div>
            </div>
            <div className={classes.miniWrapper2}>
                <div className={classes.cell}>
                    <TwitterSvg className={classes.icon}  />
                    {notAvailableHandler(user.twitter_username)}
                </div>
                <div className={classes.cell}>
                    <CompanySvg className={classes.icon} />
                    {notAvailableHandler(user.company)}
                </div>
            </div>
        </div>
    );
}

export default Stats;