import React from "react";

type AddMovieProps = {
  addMovie: (name: string, review: number) => void;
};

export const AddMovie = (props: AddMovieProps) => {

  const [name, setName] = React.useState<string>("");
  const [review ,setReview] = React.useState<number>(0);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  }

  const handleReviewChange = (e: any) => {
    setReview(e.target.value);
  }

  const handleClick = () => {
    props.addMovie(name, review);
  }

  return (
      <div>
        <label>
          Ime:
          <input onChange={handleNameChange}/>
        </label>
        <label>
          Ocjena:
          <input onChange={handleReviewChange}/>
        </label>
        <button onClick={handleClick}>Dodaj</button>
      </div>
  );
};
