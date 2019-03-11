import React, {Component} from 'react';

class AddNpc extends Component {
    state = {
        type: null,
        skill: null,
        weapon: null,
        lvl: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNpc(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="type">Type: </label>
                    <input type="text" id="type" onChange={this.handleChange}/>
                    <label htmlFor="skill">Skill: </label>
                    <input type="text" id="skill" onChange={this.handleChange}/>
                    <label htmlFor="weapon">Weapon: </label>
                    <input type="text" id="weapon" onChange={this.handleChange}/>
                    <label htmlFor="lvl">Lvl: </label>
                    <input type="text" id="lvl" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddNpc;