import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.cover}>
                <img className={classes.bg} src='https://drasler.ru/wp-content/uploads/2019/05/%D0%A8%D0%B8%D1%80%D0%BE%D0%BA%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-1.jpg' alt="img" />
                <img className={classes.avatar} src="https://imagej.nih.gov/ij/images/baboon.jpg" alt="img" />
            </div>
            <div className={classes.about}>
                <div className={classes.descr}>
                    <h2 className={classes.name}>
                        John S.
                    </h2>
                    <ul className={classes.list}>
                        <li className={classes.item}>
                            Date of Birthday: 2 january
                        </li>
                        <li className={classes.item}>
                            City: Minsk
                        </li>
                        <li className={classes.item}>
                            Education:
                        </li>
                        <li className={classes.item}>
                            Web Site:
                        </li>
                    </ul>
                </div>
            </div>
            <MyPosts />
        </div>
    )
};

export default Profile;