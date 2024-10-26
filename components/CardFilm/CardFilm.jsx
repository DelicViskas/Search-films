import classes from "@/components/CardFilm/CardFilm.module.css";

export default function CardFilm({user}) {
  const
    {imdbID,Title,Poster} = user;

  return (
    <div className={classes.previewMovie}>
      <img className={classes.moviePoster} src={Poster} alt="Poster"/>
      <a href={`https://www.imdb.com/title/${imdbID}`}>{Title}</a>
    </div>
  )
}