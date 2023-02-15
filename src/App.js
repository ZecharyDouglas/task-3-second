import productNames from './componentfolder/productNames';
import productsSorted from './componentfolder/sortedPrice';
import totalCost from './componentfolder/totalCost';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='productsSorted'></div>
      <div className='totalCost'></div>
      <div className='sortedPrice'></div>
    </div>
  );
}

export default App;
