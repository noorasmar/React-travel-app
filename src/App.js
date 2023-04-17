import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Header from './components/Header';
import Booking from './components/Booking';
import Plan from './components/Plan';
import Show from './components/Show';

function App() {
  return (
    <div className="App">
      <Header />
      <Booking />
      <Plan />
      <Show />
    </div>
  );
}

export default App;
