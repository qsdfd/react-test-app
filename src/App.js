import React, {Component} from 'react';
import Npcs from './Npcs'
import AddNpc from './AddNpc';

class App extends Component {
    state = {
        npcs: [
            {type: 'Mage', skill: 'Magic', weapon: 'Staff', lvl: 105, id: 1},
            {type: 'Warrior', skill: 'Attack', weapon: 'Sword', lvl: 100, id: 2},
            {type: 'Berserker', skill: 'Strength', weapon: 'Maul', lvl: 72, id: 3},
        ]
    }


    addNpc = (npc) => {
        npc.id = Math.random();
        // this.npcs.push(npc) // bad practise, don't alter state like this ...
        let npcs = [...this.state.npcs, npc];
        this.setState({
            npcs: npcs
        });
    }

    deleteNpc = (id) => {
        let npcs = this.state.npcs.filter(npc => npc.id !== id);
        this.setState({
            npcs: npcs
        });
    }

    componentDidMount() {
        console.log('Component mounted')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('component updated')
        console.log(prevProps, prevState)
    }

    render() {
        return (
            <div className="App">
                <h1>Very nice app</h1>
                <p>Nice</p>
                <Npcs deleteNpc={this.deleteNpc} npcs={this.state.npcs}/>
                <AddNpc addNpc={this.addNpc}/>
            </div>
        );
    }
}

export default App;
