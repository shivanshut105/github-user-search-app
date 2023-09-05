import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import RepoInfo from './RepoInfo';
import Stats from './Stats';

const Profile = () => {
    return ( 
        <div className={classes.Profile}>
            <img className={classes.ProfileImg} src="https://avatars.githubusercontent.com/u/583231?v=4" alt="profile-img"/>
            <div className={classes.wrapper}>
                <ProfileInfo />
                <RepoInfo />
                <Stats />
            </div>
        </div>
     );
}
 
export default Profile;