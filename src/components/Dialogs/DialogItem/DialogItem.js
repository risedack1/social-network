import dialogUser from '../../img/dialogUser.png';

import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id}>
            <div className={classes.item + ' ' + classes.active}>
                <img className={classes.userImage} src={dialogUser} alt={"user" + props.id} />
                <span className={classes.userName}>{props.name}</span>
            </div>
        </NavLink>
    )
};

export default DialogItem;