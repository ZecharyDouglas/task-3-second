import productNames from './componentfolder/productNames';
import productsSorted from './componentfolder/sortedPrice';
import totalCost from './componentfolder/totalCost';
import onSale from './componentfolder/ProductsOnSale';
import './App.css';

function App() {
  return (
    <div className="App">
        
     
       <div className='totalCost'></div>
       <div className='productNames'></div>
       <div className='sortedPrice'></div>
       <div className='ProductsOnSale'></div>
      
    </div>
  );
}

export default App;
