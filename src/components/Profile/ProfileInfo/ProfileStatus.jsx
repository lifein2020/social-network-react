import React from 'react';

class ProfileStatus extends React.Component {
    //локальный стейт
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        // console.log(this.state.editMode) // false

        // ассинхронный запуск
        this.setState( {
            editMode: true,
        } )

        // console.log(this.state.editMode) // false потому что setState запустится после этой строчки- и когда вернет true передаст его в render
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false,
        } );
        this.props.updateStatus(this.state.status);
    }

    // когда пользователь вбивает символы в input меняется только локальный стейт,  глобальный стейт не меняется,т.е. в DAL запрос не отправляется
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        // debugger
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status || "---"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={ this.onStatusChange }
                               autoFocus={ true } 
                               onBlur={ this.deactivateEditMode } 
                               value={ this.state.status } />  //при даблклике фокус в input автоматически появляется
                    </div>
                }
            </div >
        )
    }

}
export default ProfileStatus;