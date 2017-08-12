import React from "react";
import ContentEditor from "./component/content/ContentEditor";
import ContentViewer from "./component/content/ContentViewer";
import HtmlViewer from "./component/content/HtmlViewer"

class Input extends React.Component {
    render() {
        return(
            <div>
                Have no fear, NoP is here!<br/>
                <ContentEditor />
                <ContentViewer />
                <HtmlViewer />
            </div>);
    }
}

export default Input;
