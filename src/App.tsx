import React, { useState } from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

import { data } from "./data/Players";
import "./App.css";
import { Player } from "./components/DraggablePlayerCard/types";
import DraggablePlayerCard from "./components/DraggablePlayerCard/DraggablePlayerCard";

const App = () => {
  const [players, setItems] = useState<Player[]>(data.slice(0, 250)); // supply your own state

  // target id will only be set if dragging from one dropzone to another.
  function onChange(
    sourceId: any,
    sourceIndex: any,
    targetIndex: any,
    targetId: any
  ) {
    const nextState = swap(players, sourceIndex, targetIndex);
    setItems(nextState);
  }

  return (
    <GridContextProvider onChange={onChange}>
      <div className='app poppins-regular'>
        <div className='title'>
          <h2>Player Ranking</h2>
        </div>
        <div className='tool-bar'></div>
        <div className='list-container'>
          <GridDropZone
            id='player'
            boxesPerRow={6}
            rowHeight={175}
            style={{ height: `${(players.length / 6) * 178}px` }}
          >
            {players.map((player, index) => (
              <GridItem
                key={player.id}
                className={`card ${player.position.toLocaleLowerCase()}`}
              >
                <DraggablePlayerCard player={player} index={index} />
              </GridItem>
            ))}
          </GridDropZone>
        </div>
      </div>
    </GridContextProvider>
  );
};

export default App;
