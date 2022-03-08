import React from "react";

export type ReactTableItemProps = {
  name: string;
  review: number;
};

export const ReactTableItem = (props: ReactTableItemProps) => {
  return (
      <div className="row"
           style={{
             border: "solid",
             borderColor: "black",
             borderWidth: "1px",
             paddingTop: "0.2rem",
             paddingBottom: "0.2rem",
             paddingLeft: "0.2rem"
           }}
      >
            <span style={{
              marginRight: "10rem"
            }}>{props.name}</span>
        <span>{props.review + "/5"}</span>
      </div>
  );
}
