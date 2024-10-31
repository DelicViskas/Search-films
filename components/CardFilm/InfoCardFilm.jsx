import classes from '@/components/CardFilm/InfoCardFilm.module.css'
export default function InfoCardFilm({ data, close }) {
  console.log('Render card film');
  const
    { Genre, imdbRating, Language, Country, Awards, Director, Writer, Actors, Plot, Poster, Title, Year, Rated, Runtime, imdbID } = data
  return (
    <div className={classes.infoFilm}>
      <button className={classes.close} onClick={close}></button>
      <img className={classes.poster}
        src={Poster} alt="" />
      <div className={classes.info}>
        <h3 className={classes.title}>
          {Title}
          <span className={classes.shortInfo}>{Year} | {Rated} | {Runtime}</span>
        </h3>
        <span >Genres: <span>{Genre}</span></span>
        <span >imdbRating:<span>{imdbRating}</span></span>
        <span >Language: <span>{Language}</span></span>
        <span >Country: <span>{Country}</span></span>
        <span >Awards: <span>{Awards}</span></span>
        <span >Director: <span>{Director}</span></span>
        <span >Writers: <span >{Writer}</span></span>
        <span >Actors: <span >{Actors}</span></span>
        <span>Plot:<span className={classes.plot}>{Plot}</span></span>
        <a target="_blank" href={`https://www.imdb.com/title/${imdbID}/`}>www.imdb.com</a>
      </div>
    </div>)
}

