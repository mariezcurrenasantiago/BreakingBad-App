import React from "react";
import Spinner from "./Spinner";
import PersonajeItem from "./PersonajeItem";

const PersonajesGrid = ({items,loading}) => {
    return loading ? <Spinner /> : (
        <section className="cards">
            {items.map(item => <PersonajeItem key={item.char_id} item={item} />)}
        </section>
       
    )
}

export default PersonajesGrid;


// rafc