export type DraggablePlayerCardProps = {
  player: Player;
  index: number;
};

type Player = {
  id: number;
  name: string;
  team: string;
  position: string;
  bye: number;
  age: number | null;
  adpPPR: number;
  positionRank: string;
};
