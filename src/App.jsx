import './App.css'
import Layout from './components/layout'
import Home from './pages/home' 
import Details from './pages/details'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
          <Route path='/:slug' element={<Details/>}></Route> 
        </Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
