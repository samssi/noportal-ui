import { connect } from "react-redux";
import Editor from "../containers/editors/Editor"

const paragraphs = state => {
    console.log(state.paragraphs);
    const foo = {
        paragraphs: state.paragraphs
    }
    console.log(foo);
    return foo;
}

const AllEditors = connect(paragraphs)(Editor)

export default AllEditors;