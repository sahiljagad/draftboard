import React from "react";
import { GridItem } from "react-grid-dnd";
import DraggablePlayerCard from "../DraggablePlayerCard/DraggablePlayerCard";
import { DraggablePlayerCardProps } from "../DraggablePlayerCard/types";

const DnDItem = ({ player, index }: DraggablePlayerCardProps) => {
  return (
    <GridItem
      key={player.id}
      className={`card ${player.position.toLocaleLowerCase()}`}
    >
      <DraggablePlayerCard player={player} index={index} />
    </GridItem>
  );
};

export default DnDItem;
