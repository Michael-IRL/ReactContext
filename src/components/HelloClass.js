import React, { Component } from 'react'
import UserInfoContext from '../contexts/UserInfoContext'

export class HelloClass extends Component {
    render() {
        return (
            <div>
                <h2>Hello Class {this.context}</h2>
            </div>
        )
    }
}

HelloClass.contextType = UserInfoContext;

export default HelloClass
