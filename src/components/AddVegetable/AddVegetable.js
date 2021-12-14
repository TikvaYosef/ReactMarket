import React, { Component } from "react";


class AddV extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: "this component for add vegetable", text: "", veg: "onion" ,array:[] }
        this.title = this.title.bind(this)
        // this.text = this.text.bing(this)
        // this.veg = this.veg.bing(this)

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
        const btn = this.state.veg;
        this.setState({array: btn})
    }



    render() {
        return (
            <div>
                <h1 className="vegetable">{this.state.title}</h1>
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

export default AddV;