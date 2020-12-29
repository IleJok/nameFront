import {useEffect, useState} from "react";
function Alphabetical(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const url = "https://localhost:44304/name";

    useEffect(() => {
        fetch(url + props.site)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [props])
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
                </thead>   
                <tbody>        
              {items.map(item => (
                
                  <tr key={item.name}>
                <td>
                {item.name}</td>
                 <td>{item.amount}</td>
                 </tr>
                 
               ))}
               </tbody>
            </table>
          </>
        );
      }   
}
export default Alphabetical;