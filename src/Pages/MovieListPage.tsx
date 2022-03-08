import React from "react";
import {ReactTable} from "../components/ReactTable/ReactTable";
import {AddMovie} from "../components/AddMovie";
import {ReactTableItemProps} from "../components/ReactTable/ReactTableItem";
import {createMovie, getMovies} from "../api/movies";

export const MovieListPage = () => {

  const [movieList, setMovieList] = React.useState<ReactTableItemProps[]>([]);

  const addMovie = (name: string, review: number) => {
    createMovie({name: name, review: review});
  };

  React.useEffect(() => {
    getMovies().then((movieList) => {
      setMovieList(movieList);
    })
  }, []);

  return (
      <div>
        <div>
          <h1 style={{
            marginLeft: "40rem",
            marginTop: "4rem"
          }}>Popis filmova</h1>
        </div>
        <div style={{
          marginLeft: "30rem",
          marginBottom: "1rem"
        }}>
          <AddMovie addMovie={addMovie}/>
        </div>
        <div style={{
          width: "30rem",
          marginLeft: "30rem"
        }}>
          <ReactTable movieList={movieList}/>
        </div>
      </div>
  )
};
