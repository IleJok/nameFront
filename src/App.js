import './App.css';
import React, {Suspense} from "react";
import Search from './Search';

const AlphaComponent = React.lazy(() => import('./Alphabetical'));
const TotalComponent = React.lazy(() => import('./Total'));


function App() {
    return (
      <div className="App">
        <h1>Name application</h1>
          <Suspense fallback={<div>Loading...</div>}>        
          <h2>List of most popular names</h2>
          <AlphaComponent site="/"/>                   
          <h2>Names in alphabetical order</h2>
          <AlphaComponent site="/alphabetical"/>
          <h2>Total amount of all names</h2>
          <TotalComponent/>
          <h2>Search with names</h2>
          <Search/>
          </Suspense>
      </div>
    );
}
  
export default App;
