import twitterSvg from '../../assets/images/icon-twitter.svg';
import locationSvg from '../../assets/images/icon-location.svg';
import companySvg from '../../assets/images/icon-company.svg';
import websiteSvg from '../../assets/images/icon-website.svg';
import classes from './Stats.module.css';

const Stats = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.miniWrapper}>
                <div className={classes.cell}>
                    <img src={locationSvg} className={classes.icon} alt="location-icon" />
                    <span>San Francisco</span>
                </div>
                <div className={classes.cell}>
                    <img src={websiteSvg} className={classes.icon} alt="website-icon" />
                    <span>linlkfsalm.com</span>
                </div>
            </div>
            <div className={classes.miniWrapper}>
                <div className={classes.cell}>
                    <img src={twitterSvg} className={classes.icon} alt="twitter-icon" />
                    <span>twitter</span>
                </div>
                <div className={classes.cell}>
                    <img src={companySvg} className={classes.icon} alt="company-icon" />
                    <span>Organisation name</span>
                </div>
            </div>
        </div>
    );
}

export default Stats;