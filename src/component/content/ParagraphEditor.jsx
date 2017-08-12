import React from "react";
import { contentViewerStream } from "../../streaming/streamStore"
import jsonTransformer from "../../transforming/jsonTransformer"

class ParagraphEditor extends React.Component {
    handleEvent(event) {
        const id = this.props.id;
        // TODO: every single component-object should have a subject. Objects form the whole data-structure
        // eg. "paragraph", "paragraph", "image", "link", etcetc...
        const json = jsonTransformer.transform("paragraph", event.target.value);
        contentViewerStream.next(json);
    }

    render() {
        return (
            <div>
                <textarea name="contentArea" id="contentArea" cols="30" rows="10" onChange={this.handleEvent.bind(this)} />
            </div>
        );        
    }
}

export default ParagraphEditor;