import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'; 
// import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/store';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


// connect() позволяет нам забыть про store. Мы теперь пользуемся state.
// state = store.getState() 

// Функция превращающая state (данные оттуда) в props. 
// Прилюбых измениях в state запускается эта функция
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage, //  в props Dialogs попадет  dialogsPage
        // isAuth: state.auth.isAuth, // больше здесь не нужен -> перенесли в hoc withAuthRedirect, теперь оттуда передасться автоматически
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);

// Теперь в compose
// // HOC
// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// // connect() возвращает новую контейнерную компоненту, которая внутри рендерит презентационную компоненту, внутрь презентационной компоненты в качестве props передает те свойства, которые сидят в объектах, которые ретурнит mapStateToProp, mapDispatchToProp.Настраиваем данными функциями connect.
// // Dialogs законнектится к store по правилам connect()
// // Dialogs перерисуется, если изменится объект state.dialogsPage

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

// export default DialogsContainer;