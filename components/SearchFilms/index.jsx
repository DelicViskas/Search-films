import { useCallback, useState } from "react";
import { SmartInput } from "../SmartInput/SmartInput";
import { Fetcher } from "../Fetcher/Fetcher";
import { CardFilms } from "../CardFilm/CardFilm";
import { PopupWindow } from "../PopupWindow";
import InfoCardFilm from "../CardFilm/InfoCardFilm";

export function SearchFilms() {
  console.log('Render SearchFilms');
  const
    [value, setValue] = useState(''),
    [films, setFilms] = useState(null),
    [open, setOpen] = useState(false),
    [film, setFilm] = useState(null),
    fetchFilms = useCallback(data => setFilms(data?.Search || null), []),
    setVal = useCallback(val => setValue(val), []),
    openPopupWindow = useCallback(id => {
      setOpen(true);
      fetchFilmDetails(id);
    }, []),
    fetchFilmDetails = async id => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=a2b07930`);
        setFilm(await response.json())
      } catch (error) {
        console.error("Failed to fetch film details:", error)
      }
    },
    closePopupWindow = useCallback(() => {
      setOpen(false);
      setFilm(null);
    }, [])


  return (
    <div className="container">
      <SmartInput setVal={setVal} />
      <div className="wrapper">
        {value &&
          <Fetcher url={`https://www.omdbapi.com/?apikey=a2b07930&s=${value}`} onLoad={fetchFilms}>
            {films && <CardFilms films={films} onFilmClick={openPopupWindow} />}
          </Fetcher>}
        {open && film &&
          <PopupWindow>
            <InfoCardFilm data={film} close={closePopupWindow} />
          </PopupWindow>
        }
      </div>
    </div>
  )
}

