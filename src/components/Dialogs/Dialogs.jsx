import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { redirect, Navigate } from "react-router-dom";

const Dialogs = ({ dialogsPage, sendMessage, updateNewMessageBody, isAuth }) => {

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

    // alert(isAuth) // кликаем на Messages - проверяем приходит ли сюда isAuth

    // Если пользовательне залогинен, то при клике на Messages, Profile перенапрвлять его на станицу, где логинятся
    // react-router-dom v5
    // if(isAuth == false) return <Redirect to={'/login'} />;

     // react-router-dom v6
     if(!isAuth) return <Navigate to={'/login'} />;
     //что-то из доки
    // if (!isAuth) {
    //     return redirect("/login");
    //   }
    

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