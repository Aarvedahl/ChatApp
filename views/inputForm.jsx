var React = require('react');

class InputForm extends React.Component {
    render() {
        return <form action="">
            <input id="m" autoComplete="off"/>
            <button>Send</button>
        </form>;
    }
}

module.exports = InputForm;