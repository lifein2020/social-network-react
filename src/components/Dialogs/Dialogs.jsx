import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ dialogsPage, sendMessage, updateNewMessageBody }) => {

    // К store эта презентационная компонента не обращается
    let state = dialogsPage;

    // ... преобразуем в новый массив компонентов с пропсами
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        // вызываем callback, который пришел через props, вся его логика в <DialogsContainer /> в onSendMessageClick()- если нажали на кнопку, надо отправить сообщение
        sendMessage(); 
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        updateNewMessageBody(body);
    }

    // рендерим
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>   
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message">
                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>         
            </div>
        </div >
    )
}

export default Dialogs;