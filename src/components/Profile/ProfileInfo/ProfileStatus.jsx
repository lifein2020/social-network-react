import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    //локальный стейт
    state = {
        editMode: false,
    }

    activateEditMode() {
        // console.log(this.state.editMode) // false

        // ассинхронный запуск
        this.setState( {
            editMode: true,
        } )

        // console.log(this.state.editMode) // false потому что setState запустится после этой строчки- и когда вернет true передаст его в render
    }

    deactivateEditMode() {
        this.setState( {
            editMode: false,
        } )
    }

    render() {
        // debugger
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.props.status} /> //при даблклике фокус в input автоматически
                    </div>
                }

            </div >
        )
    }

}
export default ProfileStatus;