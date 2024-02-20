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
  const [players, setItems] = useState<Player[]>(data); // supply your own state

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
      <GridDropZone
        id='player'
        boxesPerRow={10}
        rowHeight={100}
        style={{ height: "400px" }}
      >
        {players.map((player) => (
          <GridItem key={player.id}>
            <DraggablePlayerCard player={player} />
          </GridItem>
        ))}
      </GridDropZone>
    </GridContextProvider>
  );
};

export default App;
