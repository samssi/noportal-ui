import React from "react";
import { contentViewerStream } from "../../streaming/streamStore"
import jsonTransformer from "../../transforming/jsonTransformer"

class JsonViewer extends React.Component {
    constructor() {
        super();
        this.state = {
            contentData: ""
        }
    }

    componentDidMount() {
        contentViewerStream.subscribe((value) => { 
            setTimeout(() => this.setState({contentData: value}), 300); 
        } );
    }

    render() {
        return(
            <div>
                <p>JsonContent: </p>
                <p>{JSON.stringify(this.state.contentData)}</p>
            </div>);
    }
}

export default JsonViewer;