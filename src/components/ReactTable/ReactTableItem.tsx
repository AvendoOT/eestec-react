import React from "react";

export type ReactTableItemProps = {
  name: string;
  review: number;
};

export const ReactTableItem = (props: ReactTableItemProps) => {
  return (
      <div>
            <span style={{
              marginRight: "2rem"
            }}>{props.name}</span>
        <span>{props.review + "/5"}</span>
      </div>
  );
}
