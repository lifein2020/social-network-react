import React from "react";

const StoreContext = React.createContext(null);


// Оборачиваем StoreContext.Provider в компоненту Provider для рефакторинга
export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;
