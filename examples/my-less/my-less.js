import less from "less";

export function translate(load) {
    return less.render(load.source).then(function(output) {
        return output.css;
    });
};

export function instantiate(load) {
    load.metadata.execute = function () {
        if(load.name.indexOf("examples/my-less") >= 0) {
            var style = window.document.createElement('style');
            style.appendChild(document.createTextNode(load.source));
            window.document.head.appendChild(style);
        }
    };
    load.metadata.format = "css";
}