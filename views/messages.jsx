var React = require('react');
import InputForm from './inputForm';
import HelloMessage from './index';

class MessageList extends React.Component {
    render() {
        return <div>
            <HelloMessage/>
            <ul id="messages"></ul>
            <InputForm />
        </div>;
    }
}

module.exports = MessageList;