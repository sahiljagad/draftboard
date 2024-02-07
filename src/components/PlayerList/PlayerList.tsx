import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import DraggablePlayerCard from "../DraggablePlayerCard/DraggablePlayerCard";
import { PlayerListProps } from "./types";

function PlayerList({ players }: PlayerListProps) {
  return (
    <Droppable droppableId='ROOT' type='group'>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {players.map((player, index) => (
            <DraggablePlayerCard
              player={player}
              index={index}
              key={player.id}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default PlayerList;
