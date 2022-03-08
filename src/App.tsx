import React from 'react';
import './App.css';
import {ReactTable} from "./components/ReactTable/ReactTable";
import {ReactTableItemProps} from "./components/ReactTable/ReactTableItem";
import {AddMovie} from "./components/AddMovie/AddMovie";

function App() {

  const [movieList, setMovieList] = React.useState<ReactTableItemProps[]>([]);

  const handleAddMovie = (name: string, review: number) => {
    const newList = [...movieList, {
      name: name,
      review: review
    }];
    setMovieList(newList);
  }

  React.useEffect(() => {
    alert("Poruka");
  }, [movieList]);

  return (
    <div>
      <div style={{
        marginLeft: "40rem",
        marginTop: "5rem"
      }}>
        <h1>Popis filmova</h1>
      </div>
      <div>
        <AddMovie addMovie={handleAddMovie}/>
      </div>
      <div>
        <ReactTable movieList={movieList}/>
      </div>
    </div>
  );
}

export default App;
