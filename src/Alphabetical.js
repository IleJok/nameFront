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
                    <th>Nimi</th>
                    <th>Lukumäärä</th>
                </tr>
                </thead>               
              {items.map(item => (
                <tbody  key={item.name}>
                  <tr>
                <th>
                {item.name}</th>
                 <th>{item.amount}</th>
                 </tr></tbody>
               ))}
            </table>
          </>
        );
      }   
}
export default Alphabetical;