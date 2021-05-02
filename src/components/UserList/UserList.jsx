import React, {Component} from "react";
import Person from '../Person/Person';
import './UserList.css';
import '../Person/Person.css';


class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        persons: this.props.personDetails,
    }

    deletePersonHandler = (index) => {
        console.log(index);
        const newPerosons = [...this.state.persons];
        newPerosons.splice(index, 1);
        this.setState({persons: newPerosons})
        console.log(newPerosons);
    }

    render() {

        return (
            <div className="UserList">
                {
                    this.state.persons.map(person => <Person personName={person.name}
                                                             personAge={person.age}
                                                             key={person.index}
                                                             click={() => this.deletePersonHandler(person.index)} classNmae="Person"/>
                    )
                }
                {
                    this.state.persons.map((person, index) => {
                        return <Person personName={person.name}
                                       personAge={person.age}
                                       key={index}
                            click={() => this.deletePersonHandler(index)}
                        />
                    })
                }
            </div>

        );
    };
}


export default UserList;