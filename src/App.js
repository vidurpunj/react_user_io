import {Component} from "react";
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from "./UserOutput/UserOutput";
import UserList from "./UserList/UserList";

class App extends Component {
    state = {
        username: 'state Vidur Punj',
        persons: [
            {index: 'dsdasd', name: 'John', age: 31},
            {index: '123sad', name: 'Shown', age: 32},
            {index: 'as3dasfsdf ', name: 'Peter', age: 30},
            {index: 'asdas3', name: 'Parker', age: 31},
            {index: 'dasde3', name: 'Spyde', age: 1},
            {index: 'dfasf34', name: 'Syndicate', age: 1}],
        showPerson: false,
    }

    togglePersonHandler = () => {
        const showPerson = this.state.showPerson;
        this.setState({showPerson: !showPerson})
    }
    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value})
    }

    render() {
        const style = {
            backgroundColor: 'blue',
            font: 'inherit',
            broder: '1px red solid',
            padding: '8px',
        };
        let person = []
        if (this.state.showPerson) {
            person = []
        } else {
            person = <><h2>Show other person list</h2>
                <UserList personDetails={this.state.persons}></UserList></>;

        }

        return (
            <>
                <div className="App">
                    <UserInput changed={this.usernameChangedHandler} currrentName={this.state.username}/>
                    <UserOutput userName={this.state.username}/>
                </div>
                <button onClick={this.togglePersonHandler} style={style}>Toggle Person</button>
                {this.state.showPerson === true ?
                    <>
                        <h2>Show Person List</h2>
                        <UserList personDetails={this.state.persons}></UserList>
                    </>
                    : null
                }
                {
                    person
                }
            </>
        );
    }

}

export default App;
