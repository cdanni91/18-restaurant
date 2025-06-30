function FunctionFactory() {

    function logContent(content) {
        console.log(content);
    }

    function getElement(querySelector) {
        const element = document.querySelector(querySelector);

        return element;

    }

    function createElement(elementType,elementName) {
        const newElement = document.createElement(elementType);
        newElement.classList.add(elementName);

        return newElement;
    }

    function appendChildToElement(element,child) {
        element.appendChild(child);
    }

    function removeElementHTML (element) {
        element.innerHTML = "";
    }

    return {
        logContent,
        getElement,
        createElement,
        appendChildToElement,
        removeElementHTML
    }

}

export {FunctionFactory};