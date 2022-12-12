import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'; 
// import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/store';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';

// connect() позволяет нам забыть про store. Мы теперь пользуемся state.
// state = store.getState() 

// Функция превращающая state (данные оттуда) в props. 
// Прилюбых измениях в state запускается эта функция
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage //  в props Dialogs попадет  dialogsPage
    }
}

// Функция превращающая state (callback оттуда) в props. 
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => { // в props Dialogs попадет updateNewMessageBody
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => { // в props Dialogs попадет sendMessag
            dispatch(sendMessageCreator());
        }
    }
}

// connect() возвращает новую контейнерную компоненту, которая внутри рендерит презентационную компоненту, внутрь презентационной компоненты в качестве props передает те свойства, которые сидят в объектах, которые ретурнит mapStateToProp, mapDispatchToProp.Настраиваем данными функциями connect.
// Dialogs законнектится к store по правилам connect()

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;