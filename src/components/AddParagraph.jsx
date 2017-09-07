import { connect } from "react-redux";
import React from "react";
import { addParagraph } from '../actions'

let AddParagraph = ({ dispatch }) => {
    return (<input type="button" value="P" onClick={
        event =>  {
            event.preventDefault();
            dispatch(addParagraph());
        }
    } 
    
    />);
}

AddParagraph = connect()(AddParagraph);

export default AddParagraph;