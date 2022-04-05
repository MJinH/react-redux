import './App.css';
import Leftbar from './components/leftbar/Leftbar';
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightbar/Rightbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Leftbar />
        <Rightbar />
      </div>
    </>
  );
}

export default App;
