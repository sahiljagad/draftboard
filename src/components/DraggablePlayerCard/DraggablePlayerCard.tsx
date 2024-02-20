import React from "react";
import { DraggablePlayerCardProps } from "./types";

const DraggablePlayerCard = ({ player }: DraggablePlayerCardProps) => {
  return (
    <div className={`player-card ${player.position.toLocaleLowerCase()}`}>
      <h4>{player.name}</h4>
      <p>ADP: {player.adpPPR}</p>
      <p>Position: {player.position}</p>
      <p>Team: {player.team}</p>
    </div>
  );
};

export default DraggablePlayerCard;
