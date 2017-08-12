import React from "react";
import { contentViewerStream } from "../../streaming/streamStore"
import htmlTranformer from "../../transforming/htmlTransformer";

class HtmlViewer extends React.Component {
    constructor() {
        super();
        this.state = {
            contentData: ""
        }
    }

    componentDidMount() {
        contentViewerStream.subscribe((value) => { 
            setTimeout(() => this.setState({contentData: value }), 300); 
        } );
    }

    renderParagraph() {
        const paragraphs = this.state.contentData.paragraph;
        return paragraphs;
    }

    render() {
        return(
            <div>
                {this.renderParagraph()}
            </div>);
    }
}

export default HtmlViewer;