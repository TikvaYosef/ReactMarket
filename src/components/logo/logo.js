import React ,{Component} from "react";


class Title extends React.Component{
    constructor(props){
        super(props)
        this.state = {title:"Welcome To Market"}
        this.title = this.title.bind(this)
    }

    title(){
       const nameOfTitle = this.state.title;
       this.setState({title: nameOfTitle});
    }

    render(){
        return(
            <div>
            <h1 className="title">{this.state.title}</h1>
            </div>
        )
    }
}

export default Title;