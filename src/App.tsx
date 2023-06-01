import { Suspense, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './styles/index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { ThemeContext } from './theme/ThemeContext';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const { theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
