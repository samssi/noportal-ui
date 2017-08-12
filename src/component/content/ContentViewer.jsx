import React from "react";
import streamStore from "../../streaming/streamStore"
import jsonTransformer from "../../transforming/jsonTransformer"

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            contentData: ""
        }
    }

    componentDidMount() {
        streamStore.subjectStream().subscribe((value) => { 
            setTimeout(() => this.setState({contentData: jsonTransformer.transform("paragraph", value)}), 300); 
        } );
    }

    render() {
        return(
            <div>
                <p>Content: </p>
                <p>{this.state.contentData}</p>
            </div>);
    }
}

export default Input;