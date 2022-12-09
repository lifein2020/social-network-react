import Dialogs from './Dialogs';
// import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'; // выдает ошибку
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/store';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer> 
            { (store) => {
                let state = store.getState().dialogsPage;

                // Оборачивает dispatch() в функции, чтобы их как callback передать презентационной компоненте
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                // body приходит из <Dialogs /> - то что введут в поле ввода принимает и передает сюда <Dialogs />
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}
                        />
            }
        }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;