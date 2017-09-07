const paragraphs = (state = [], action) => {
    switch(action.type) {
        case "ADD_PARAGRAPH":
            console.log("Adding a paragraph")
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        default:
            return state;
    }
}

export default paragraphs;