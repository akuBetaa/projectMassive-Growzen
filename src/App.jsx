import {Routes, Route} from 'react-router-dom'

import BerandaPage from './pages/BerandaPage'
import ArtikelPage from './pages/ArtikelPage'
import ForumPage from './pages/ForumPage'
// import SignupPage from './pages/SignupPage'

import NavbarComponents from './components/NavbarComponents'
import FooterComponents from './components/FooterComponents'

function App() {
  return (
    <div>
      <NavbarComponents/>

      <Routes>
        <Route path='/' Component={BerandaPage} />
        <Route path='/artikel' Component={ArtikelPage} />
        <Route path='/forum' Component={ForumPage} />
        {/* <Route path='signup' Component={SignupPage} />  */}
      </Routes>

      <FooterComponents/>
    </div>
  )
}

export default App
