import './App.css';
import Navbar from './component/Navbar/Navbar'
import Carousel from './component/Carousel/Carousel';
import EventTime from './component/EventTime/EventTime';
import Choose from './component/Choose/Choose';
import AboutEvent from './component/AboutEvent/AboutEvent';
import Speaker from './component/Speaker/Speaker';
import Guideline from './component/Guideline/Guideline';
import Price from './component/Price/Price';
import Form from './component/Form/Form';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <EventTime/>
      <Choose/>
      <AboutEvent/>
      <Speaker/>
      <Guideline/>
      <Price/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
