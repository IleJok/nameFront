import './App.css';
import React, {Suspense} from "react";
import Search from './Search';

const AlphaComponent = React.lazy(() => import('./Alphabetical'));


function App() {
    return (
      <div className="App">
        <h1>Solitalaisten nimet</h1>
          <Suspense fallback={<div>Loading...</div>}>        
          <h2>Nimet yleisimmästä harvinaisimpaan</h2>
          <AlphaComponent site="/"/>                   
          <h2>Nimet aakkosjärjestyksessä</h2>
          <AlphaComponent site="/alphabetical"/>
          <h2>Hae nimellä</h2>
          <Search></Search>
          </Suspense>
      </div>
    );
}
  
export default App;
