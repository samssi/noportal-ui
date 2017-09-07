import React from "react";
import PropTypes from "prop-types";
import Paragraph from "./Paragraph"

const Editor = ({paragraphs}) => (
    <ul>
        {paragraphs.map(paragraph => (
            <Paragraph key={paragraph.id} />
        ))}
    </ul>
    );
    
// TODO: proptypes

export default Editor;