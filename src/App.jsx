import './App.css'
import Beautiful from './Beautiful/Beautiful'
import Navbar from './Navbar/Navbar'
import Orange from './Orange/Orange'
import White from './White/White'
import Blue from './Blue/Blue'
import Invision from './Invision/Invision'
import Footer from './Footer/Footer'

function App() {
  return (
    <div>
      {/* I separated multiple element as components for it to be less painful to watch :)*/}
      <Navbar></Navbar>
      <Beautiful></Beautiful>
      <Orange></Orange>
      <White></White>
      <Blue></Blue>
      <Invision></Invision>
      <Footer></Footer>
    </div>
  );
}

export default App;
