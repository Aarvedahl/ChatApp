var React = require('react');

class InputForm extends React.Component {
    componentDidMount () {
        console.log("Testing 123");
        const script = document.createElement("script");
        script.src = "/socket.io/socket.io.js";
        script.innerHTML = "var socket = io();";
        document.body.appendChild(script);
    }

    render() {
        return<form action="">
            <input id="m" autoComplete="off"/>
            <button>Send</button>
        </form>;
    }
}

module.exports = InputForm;