import React from 'react';
import './npcs.css';

const Npcs = ({npcs, deleteNpc}) => { // destrucuring
    const npcList = npcs.map(npc => {
        return npc.lvl > 90 ? (
            // use key prop to not get warning ...
            <div className="npc" key={npc.id}>
                <div>Type: { npc.type }</div>
                <div>Skill: { npc.skill }</div>
                <div>Weapon: { npc.weapon }</div>
                <div>Lvl: { npc.lvl }</div>
                <button onClick={ () => {deleteNpc(npc.id)} }>Delete Npc</button>
            </div>
        ) : null;
    });

    return (
        <div className="npc-list">
            { npcList }
        </div>
    );
}

export default Npcs;