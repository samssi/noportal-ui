import React from "react";
import streamStore from "../../streaming/streamStore"

class Input extends React.Component {
    handleEvent(event) {
        streamStore.subjectStream().next(event.target.value);
    }

    render() {
        return(
            <div>
               <textarea name="contentArea" id="contentArea" cols="30" rows="10" onChange={this.handleEvent.bind(this)} />
            </div>);
    }
}

export default Input;
