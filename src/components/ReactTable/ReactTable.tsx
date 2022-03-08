import React from "react";
import {ReactTableItem, ReactTableItemProps} from "./ReactTableItem";

type ReactTableProps = {
  movieList: ReactTableItemProps[]
};

export const ReactTable = (props: ReactTableProps) => {
  return (
      <div>
        <div>
            <span style={{
              marginRight: "2rem"
            }}>Ime</span>
          <span>Ocjena</span>
        </div>
        {
          props.movieList.map((item) => <ReactTableItem name={item.name} review={item.review} key={item.name}/>)
        }
      </div>
  );
}
