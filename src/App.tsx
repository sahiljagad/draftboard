import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
} from "react-beautiful-dnd";

import { data } from "./data/Players";
import "./App.css";

let data2 = data.map((player, index) => ({ ...player, id: index }));

function App() {
  const [players, setPlayers] = useState(data2);

  const handleDragDrop: OnDragEndResponder = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedPlayers = [...players];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removedPlayer] = reorderedPlayers.splice(sourceIndex, 1);
      reorderedPlayers.splice(destinationIndex, 0, removedPlayer);
      return setPlayers(reorderedPlayers);
    }
  };

  return (
    <div className='layout__wrapper'>
      <div className='card'>
        <DragDropContext onDragEnd={handleDragDrop}>
          <div className='header'>
            <h1>Player Ranking</h1>
          </div>
          <Droppable droppableId='ROOT' type='group'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {players.map((player, index) => (
                  <Draggable
                    draggableId={player.id.toString()}
                    key={player.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className='card'
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <h3>{player.Name}</h3>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
