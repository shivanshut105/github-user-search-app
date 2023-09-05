import classes from './RepoInfo.module.css';

const RepoInfo = () => {
    return ( 
        <div className={classes.wrapper}>
            <div className={classes.miniContainer}>
                <span className={classes.heading}>Repos</span>
                <span className={classes.number}>8</span>
            </div>
            <div className={classes.miniContainer}>
                <span className={classes.heading}>Followers</span>
                <span className={classes.number}>10837</span>
            </div>
            <div className={classes.miniContainer}>
                <span className={classes.heading}>Following</span>
                <span className={classes.number}>9</span>
            </div>
        </div>
     );
}
 
export default RepoInfo;