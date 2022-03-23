import './App.css';
import {Helmet} from "react-helmet";
import Certificatemodel from './Components/Certificatemodel';
import Header from './Components/Header';
import Newtech from './Components/Newtech';
import Programdetails from './Components/Programdetails';
import Spotlight from './Components/Spotlight';
import Wishsection from './Components/Wishsection';

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tefun | Yiaai</title>
      </Helmet>
      <Header />
      <Spotlight/>
      <Wishsection/>
      <Newtech/>
      <Certificatemodel/>
      <Programdetails/>
    </div>
  );
}

export default App;
