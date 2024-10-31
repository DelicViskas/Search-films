import classes from "@/components/CardFilm/CardFilms.module.css";
import { memo } from "react";

export const CardFilms = memo(function CardFilms({ films, onFilmClick }) {
  console.log('Render grid films');

  if (films) {
    return films.map(film => {
      const
        { imdbID, Title, Poster } = film;
      return <div key={Title} onClick={() => onFilmClick(imdbID)} className={classes.previewMovie}>
        <img className={classes.moviePoster} src={Poster} alt="Poster" />
        <a href={`https://www.imdb.com/title/${imdbID}`}>{Title}</a>
      </div>
    })
  }
})