import React from "react";
import ContentEditor from "./component/content/ContentEditor";
import ContentViewer from "./component/content/ContentViewer";

class Input extends React.Component {
    render() {
        return(
            <div>
                Have no fear, NoP is here!<br/>
                <ContentEditor />
                <ContentViewer />
            </div>);
    }
}

export default Input;
