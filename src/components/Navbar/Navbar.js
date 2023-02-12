import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const setActive = ({ isActive }) => isActive ? classes.active : '';

    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <NavLink to="/profile" className={setActive}>
                        Profile
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" className={setActive}>
                        Messages
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" className={setActive}>
                        News
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" className={setActive}>
                        Music
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;