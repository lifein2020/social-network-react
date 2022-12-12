import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ dialogsPage, sendMessage, updateNewMessageBody }) => {

    // К store эта презентационная компонента не обращается
    let state = dialogsPage;

    // ... преобразуем в новый массив компонентов с пропсами
    // там где мапится массив элементов всегода добавляем key, в качестве которого id элемента из которго получаем JSX-'элемент, чтобы эти элементы были уникальными
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
    let newMessagesBody = state.newMessagesBody;

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
                        <textarea value={newMessagesBody}
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