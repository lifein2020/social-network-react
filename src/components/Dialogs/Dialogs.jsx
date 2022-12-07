import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ state }) => {

    // Данные, приходящие с сервера ...
    // let dialogs = [
    //     { id: 1, name: "Sveta" }, // dialog
    //     { id: 2, name: "Pasha" }, // dialog
    //     { id: 3, name: "Olya" }, // dialog
    //     { id: 4, name: "Serge" }, // dialog
    //     { id: 5, name: "Kolya" }, // dialog
    // ];

    // let messages = [
    //     { id: 1, message: "Hi!" }, // message
    //     { id: 2, message: "How are you?" }, // message
    //     { id: 3, message: "How is your course?" }, // message
    //     { id: 4, message: "Yo" }, // message
    //     { id: 5, message: "Yo" }, // message
    // ];
    
    // ... преобразуем в новый массив компонентов с пропсами
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id} />);

    // рендерим
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div >
    )
}

export default Dialogs;