import React, { Component } from 'react'
// import Button from './components/PrimaryButton'

class ComponentEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Message from component",
            counter: 0
        }
    }

    changeMessage = () => {
        this.setState({
            message: "New message"
        })
    }

    render() {
        return (
            <div>

                {/* <Button /> */}

                <p> Class Component </p>
                <p> {this.state.message} </p>
                <button onClick={() => this.changeMessage()}> Press</button>
            </div>
        )
    }
}

export default ComponentEx
