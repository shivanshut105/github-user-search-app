import classes from './Profile.module.css';
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import Stats from './Stats';
import { useSelector } from 'react-redux';

const Profile = ({userData}) => {
    const theme = useSelector(state=>state.ui.mode);
    const convertDateFormat = (date)=> {
        const dateObj = parseISO(date);
        return format(dateObj, "dd LLL yyyy");
    }

    const profileCreationDate = convertDateFormat(userData.created_at);

    let profileClasses, repoClasses;
    if(theme) profileClasses = classes.user + ' '+ classes.Light;
    else profileClasses = classes.user + ' ' + classes.Dark;
    
    if(theme) repoClasses = classes.Repo + ' '+ classes.LightRepo;
    else repoClasses = classes.Repo + ' ' + classes.DarkRepo;

    return (
        <div className={profileClasses}>
            <div className={classes.Summary}>
                <div>
                    <img
                        src={userData.avatar_url}
                        alt="User Avatar"
                    />
                </div>
                <div className={classes.Info}>
                    <div>
                        <h2>{userData.name}</h2>
                        <h3>
                            <a
                                href={userData.html_url}
                                target="_blank"
                                rel="noopener nofollow noreferrer"
                            >
                                @{userData.login}
                            </a>
                        </h3>
                    </div>
                    <span>Joined {profileCreationDate}</span>
                </div>
            </div>
            <div className={classes.Bio}>
                <span>{!userData.bio ? "This profile has no bio" : userData.bio}</span>
            </div>
            <div className={repoClasses}>
                <div>
                    <h4>Repos</h4>
                    <span>{userData.public_repos}</span>
                </div>
                <div>
                    <h4>Followers</h4>
                    <span>{userData.followers}</span>
                </div>
                <div>
                    <h4>Following</h4>
                    <span>{userData.following}</span>
                </div>
            </div>
            <Stats className={classes.Stats} userData={userData} />
        </div>
    );
}

export default Profile;