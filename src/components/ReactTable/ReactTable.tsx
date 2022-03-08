import React from "react";
import {ReactTableItem, ReactTableItemProps} from "./ReactTableItem";

type ReactTableProps = {
  movieList: ReactTableItemProps[]
};

export const ReactTable = (props: ReactTableProps) => {
  return (
      <div className="table">
        <div className="row"
             style={{
               border: "solid",
               borderColor: "black",
               borderWidth: "1px"
             }}
        >
            <span style={{
              marginRight: "10rem"
            }}>Ime</span>
          <span>Ocjena</span>
        </div>
        {
          props.movieList.map((item) => <ReactTableItem name={item.name} review={item.review} key={item.name}/>)
        }
      </div>
  );
}
