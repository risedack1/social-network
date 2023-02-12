import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogs = [
        { name: 'Viktor', id: 1 },
        { name: 'Alex', id: 2 },
        { name: 'John', id: 3 },
        { name: 'Viktoria', id: 4 },
        { name: 'Inna', id: 5 },
    ];

    const messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Message2' },
        { id: 1, message: 'Message3' },
    ];

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