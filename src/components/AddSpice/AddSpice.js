import React, { Component } from "react";


class AddS extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: "this component for add spice", text: "", spice: "paprika" ,array:[] }
        this.title = this.title.bind(this)
        this.funcInput = this.funcInput.bind(this)
        this.btnFunc = this.btnFunc.bind(this)
    }

    title() {
        const nameOfTitle = this.state.title;
        this.setState({ title: nameOfTitle });
    }

    funcInput(event) {

        const inp = event.target.value;
        this.setState({ text: inp })
    }

    btnFunc() {
        const btn = this.state.spice;
        this.setState({array: btn})
    }



    render() {
        return (
            <div>
                <h1 className="spiceetable">{this.state.title}</h1>
                <input onChange={this.funcInput}></input>
                <h1>{this.state.text}</h1>
                <button onClick={this.btnFunc}>Add</button>

                <ul>
                    <li>{this.state.array}</li>
                </ul>
               

            </div>
        )
    }
}

export default AddS;