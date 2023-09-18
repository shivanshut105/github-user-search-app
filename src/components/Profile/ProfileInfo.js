import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes["main-container"]}>
            <div>
                <div className={classes.bioData}>
                    <h2>Profile name</h2>
                    <span id={classes.username}>@username</span>
                </div>
                <div className={classes.date}>Joined  26 Jan 2011</div>
            </div>
        </div>
    );
}

export default ProfileInfo;