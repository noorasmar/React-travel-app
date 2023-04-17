import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Header from './components/Header';
import Booking from './components/Booking';

function App() {
  return (
    <div className="App">
      <Header />
      <Booking />
    </div>
  );
}

export default App;
