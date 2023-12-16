import {Routes, Route} from 'react-router-dom'

import BerandaPage from './pages/BerandaPage'
import ArtikelPage from './pages/ArtikelPage'
import ForumPage from './pages/ForumPage'
import Artikel from './pages/Artikel'
// import SignupPage from './pages/SignupPage'

import NavbarComponents from './components/NavbarComponents'
import FooterComponents from './components/FooterComponents'
import LoginComponents from './components/LoginComponents'
import SuksesPage from './pages/SuksesPage'

function App() {
  return (
    <div>
      <NavbarComponents/>

      <Routes>
        <Route path='/' Component={BerandaPage} />
        <Route path='/artikel' Component={ArtikelPage} />
        <Route path='/forum' Component={ForumPage} />
        <Route path='/artikel/:id' Component={Artikel}/>

        <Route path='/profil' Component={SuksesPage}></Route>
        <Route path='/login' Component={LoginComponents}></Route>
        {/* <Route path='signup' Component={SignupPage} />  */}
      </Routes>

      <FooterComponents/>
    </div>
  )
}

export default App
