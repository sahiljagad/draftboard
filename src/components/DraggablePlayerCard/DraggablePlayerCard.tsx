import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { DraggablePlayerCardProps } from "./types";

const DraggablePlayerCard = ({ player, index }: DraggablePlayerCardProps) => {
  return (
    <Draggable draggableId={player.id.toString()} key={player.id} index={index}>
      {(provided) => (
        <div
          className={`player-card ${player.position.toLocaleLowerCase()}`}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h4>{player.name}</h4>
          <p>ADP: {player.adpPPR}</p>
        </div>
      )}
    </Draggable>
  );
};

export default DraggablePlayerCard;
// dummy
