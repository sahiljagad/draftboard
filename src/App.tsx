import React, { useState } from "react";
import { GridContextProvider, GridDropZone, swap } from "react-grid-dnd";

import { data } from "./data/Players";
import "./App.css";
import { Player } from "./components/DraggablePlayerCard/types";
import DnDItem from "./components/DnDItem/DnDItem";
import Select from "react-dropdown-select";

const options = [
  {
    value: 1,
    label: "RB",
    key: 1,
  },
  {
    value: 2,
    label: "WR",
    key: 2,
  },
  {
    value: 3,
    label: "TE",
    key: 3,
  },
  {
    value: 4,
    label: "QB",
    key: 4,
  },
  {
    value: 5,
    label: "K",
    key: 5,
  },
];

const options2 = [
  {
    value: 6,
    label: "6",
    key: 1,
  },
  {
    value: 8,
    label: "8",
    key: 2,
  },
  {
    value: 10,
    label: "10",
    key: 3,
  },
  {
    value: 15,
    label: "15",
    key: 4,
  },
];

const App = () => {
  const [players, setPlayers] = useState<Player[]>(data.slice(0, 250));

  const [, setValues] = useState(options);
  const [columns, setColumns] = useState(options2);

  const onChange = (
    sourceId: string,
    sourceIndex: number,
    targetIndex: number
  ) => {
    const nextState = swap(players, sourceIndex, targetIndex);
    setPlayers(nextState);
  };

  const filter = (positions: string[]) => {
    return data.filter(({ position }) => positions.includes(position));
  };

  return (
    <GridContextProvider onChange={onChange}>
      <div className='app poppins-regular'>
        <div className='title'>
          <h2>Player Ranking</h2>
        </div>
        <div className='tool-bar'>
          <div className='player-filter'>
            <Select
              options={options}
              onChange={(values) => {
                const positions = values.map((value) => value.label);
                setPlayers(filter(positions));
                setValues(values);
                return;
              }}
              color='#222222'
              values={options}
              keepSelectedInList
              multi
            />
          </div>
          <div className='column-setter'>
            <Select
              options={options2}
              onChange={(values) => {
                setColumns(values);
                return;
              }}
              color='#222222'
              values={options2}
            />
          </div>
        </div>
        <div className='list-container'>
          <GridDropZone
            id='player'
            boxesPerRow={columns.at(0)?.value ?? 6}
            rowHeight={195}
            style={{
              height: `${
                (players.length / (columns.at(0)?.value ?? 6)) * 197
              }px`,
            }}
          >
            {players.map((player, index) => (
              <DnDItem player={player} index={index} key={index}></DnDItem>
            ))}
          </GridDropZone>
        </div>
      </div>
    </GridContextProvider>
  );
};

export default App;
