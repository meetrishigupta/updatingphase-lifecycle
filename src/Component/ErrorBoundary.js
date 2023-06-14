import React from "react";
import { Component } from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            errorState: false,
        }
    }       
    static getDerivedStateFromError(error) {
return {
    errorState: true,
}
    }
    componentDidCatch(error, info) {
        console.log("error", error);
        console.log("info", info);
    }
    render() {
        if(this.state.errorState){
            return (<h1>Something Went Wrong, Contact to Admin</h1>)
        }
        return this.props.children
        

    }
}
export default ErrorBoundary;