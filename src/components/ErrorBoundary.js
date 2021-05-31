import React, { Component } from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        //if any error out this will run
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Oooops. That is not good</h1>
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;