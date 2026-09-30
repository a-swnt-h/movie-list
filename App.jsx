
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [inputMovie, setInputMovie] = useState({
    movie: "",
    genre: "",
    isCom: false
  })

  const [movieList, setMovieList] = useState([])

  let handleOnChange = (e) => {

    let { name, value } = e.target

    setInputMovie({
      ...inputMovie,[name]: value})
  }

  let onHandleAdd = () => {

    let newdata = [...movieList, inputMovie]

    setMovieList(newdata)

    setInputMovie({movie: "",genre: "",isCom: false})
  }

  return (
    <>
      <h2>Movie List</h2>
      <input type="text" name="movie" value={inputMovie.movie} onChange={handleOnChange}/>
      <input type="text" name="genre" value={inputMovie.genre} onChange={handleOnChange}/>

      <button onClick={onHandleAdd}>Add Movie</button>

      {movieList.map((data, index) => (
        <div key={index}>
          <p>Movie: {data.movie} Genre: {data.genre}</p>
          <button >favorite</button>
          <button >not favorite</button>
        </div>
      ))}
    </>
  )
}

export default App