import React, { Component } from "react";


class AddV extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: "this component for add vegetable", text: "", veg: "", array: [] }
        this.title = this.title.bind(this)
        this.funcInput = this.funcInput.bind(this)
        this.btnFunc = this.btnFunc.bind(this)
    }

    title() {
        const nameOfTitle = this.state.title;
        this.setState({ title: nameOfTitle });
    }
    changeVeg(){
        this.state.array.push(this.state.veg)
        this.setState({ veg : this.state.veg})
    }

    funcInput(event) {
        // this.state.array.push(this.state.veg)
        this.state.veg = event.target.value;
        // this.setState({ veg : this.state.veg})
    }

    btnFunc() {
        const btn = this.state.veg;
        this.setState({ array: btn })
    }



    render() {
        return (
            <div>
                <h1 className="vegetable">{this.state.title}</h1>
                <input onChange={this.funcInput}></input>
                <h1>{this.state.text}</h1>
                <button onClick={this.btnFunc}>Add</button>



                <ul>
                   
                       {this.state.array.map((vegItem)=> <li>|{vegItem}</li>)}
                    
                    
                </ul>




            </div>
        )
    }
}

export default AddV;