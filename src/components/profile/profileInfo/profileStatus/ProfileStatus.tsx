import React, { ChangeEvent, ChangeEventHandler } from "react";


type ProfileStatusPropsType = { 
    status: string
    updateStatus: (statusText: string)=> void 
}
export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({ editMode: true })
    }
    deactivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate = (prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) => {
        if (this.props.status !== prevProps.status) {
            this.setState({status: this.props.status})
        }
        console.log('componentDidUpdate')

    }
    render() {
        return <div>
            {this.state.editMode 
            ? <input value = {this.state.status} onChange = {this.onChangeStatus } onBlur={this.deactivateEditMode} autoFocus={true} type="text" /> 
            : <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'anything status should be here' }</span>}
        </div>

    }

}