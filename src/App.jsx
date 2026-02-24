import React ,{useState,useEffect, use} from "react";
import axios from "axios";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import PersonajesGrid from "./components/PersonajesGrid";


const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await axios.get("/personajes.json");
          setItems(response.data);
          setLoading(false);
          
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      }
      fetchItems();

    },[])
        
    return (
        <div className="container">
            <Header />
            <PersonajesGrid items={items} loading={loading} />
        </div>
    );
}

export default App;