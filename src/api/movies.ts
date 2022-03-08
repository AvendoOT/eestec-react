import {CreateMovieDTO, MovieDTO} from "./type";

export const getMovies = async (): Promise<MovieDTO[]> => {
  const response = await fetch("http://localhost:8080/movie-library");

  return response.json();
};

export const createMovie = async (command: CreateMovieDTO): Promise<any> => {
  return fetch("http://localhost:8080/movie-library/create", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(command)
  })
};
