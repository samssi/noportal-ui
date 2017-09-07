let nextParagraphId = 0;

export const addParagraph = () => {
    return {
        type: "ADD_PARAGRAPH",
        id: nextParagraphId++,
        text: ""
    }
}