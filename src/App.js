import Linechart from './components/Linechart';
import './App.css';
import Barchart from './components/Barchart';
import Navbar from './components/Navbar';
import Tab from './components/Tab';
function App() {
  return (
    <>
      <Navbar/>
      <Tab/>
      <div className="nav justify-content-centre"><Barchart/><Linechart /></div>
      
    </>
  );
}
export default App;
