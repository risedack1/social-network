import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const { dialogs, messages } = props.data;

    const dialogsItems = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    const messagesItems = messages.map(m => <Message message={m.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsItems}
            </div>
            <div className={classes.messages}>
                {messagesItems}
            </div>
        </div>
    )
}

export default Dialogs;