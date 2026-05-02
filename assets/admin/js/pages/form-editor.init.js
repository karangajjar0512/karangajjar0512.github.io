// Initialize all CKEditor Classic instances
document.querySelectorAll(".ckeditor-classic").forEach(function (textarea) {
    ClassicEditor.create(textarea)
        .then(function (editor) {
            editor.ui.view.editable.element.style.height = "200px"; // set height
        })
        .catch(function (error) {
            console.error(error);
        });
});

// Initialize all Quill Snow editors
document.querySelectorAll(".snow-editor").forEach(function (editorElem) {
    var options = {
        theme: "snow",
        modules: {
            toolbar: [
                [{ font: [] }, { size: [] }],
                ["bold", "italic", "underline", "strike"],
                [{ color: [] }, { background: [] }],
                [{ script: "super" }, { script: "sub" }],
                [{ header: [false, 1, 2, 3, 4, 5, 6] }, "blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                ["direction", { align: [] }],
                ["link", "image", "video"],
                ["clean"]
            ]
        }
    };
    new Quill(editorElem, options);
});

// Initialize all Quill Bubble editors
document.querySelectorAll(".bubble-editor").forEach(function (editorElem) {
    var options = {
        theme: "bubble"
    };
    new Quill(editorElem, options);
});