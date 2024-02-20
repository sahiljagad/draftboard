import React from "react";
import { DraggablePlayerCardProps } from "./types";

const DraggablePlayerCard = ({ player, index }: DraggablePlayerCardProps) => {
  return (
    <div>
      <p>#{index + 1}</p>
      <p>{player.name}</p>
      <p>{player.position}</p>
      <p>{player.team}</p>
    </div>
  );
};

export default DraggablePlayerCard;
