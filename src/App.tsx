import { useState } from 'react'
import './App.css' 

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <header className='header'>
        <a href=''><img height="60" width="60" src = "/img/logo.png" /></a>
      <div className = "container"><a href=""><h3>INFO<span>HAVE</span></h3></a></div>
      <ul className = "right">
        <li className='nav'><a className='nav_link' href=''>ПОПУЛЯРНОЕ</a></li>
        <li className='nav'><a className='nav_link' href=""><img height='30' width='30' src = '/src/assets/calendar.svg'/></a></li>
        <li className='nav'><a className='nav_link' href=''><img height='30' width='30' src = '/src/assets/heart.svg' /></a></li>
      </ul>
      
      </header>
      <div className = "all">
      <h1>Все концерты</h1>
      <div className = "card">
        <img height='180' width='200' src='/img/morgen.jpg'></img>
        <p>Концерт Morgenshtern'a</p>
        <div>
          <div>
              <span>textextextxtxetextxetxetxetextextextextextextxetextxeetxetextext</span>
              <a className='nav_link' href=''>Подробнее</a>
              <a href=''><img height='30' width='30' src = '/src/assets/heart.svg' /></a>
              <button>Приобрести</button>
          </div>
      </div>
      <img height='180' width='200' src='/img/lilkrystal.jpeg'></img>
        <p>Концерт Lil krystal'a</p>
        <div>
          <div>
              <span>textextextxtxetextxetxetxetextextextextextextxetextxeetxetextext</span>
              <a className='nav_link' href=''>Подробнее</a>
              <a href=''><img height='30' width='30' src = '/src/assets/heart.svg' /></a>
              <button>Приобрести</button>

          </div>
      </div>
      <img height='180' width='200' src='/img/pharaoh.jpg'></img>
        <p>Концерт Pharaoh'a</p>
        <div>
          <div>
              <span>textextextxtxetextxetxetxetextextextextextextxetextxeetxetextext</span>
              <a class='nav_link' href=''>Подробнее</a>
              <a href=''><img height='30' width='30' src = '/src/assets/heart.svg' /></a>
              <button>Приобрести</button>

          </div>
      </div>
      
      </div>
    </div>
  </div>

  )
  
}
export default App