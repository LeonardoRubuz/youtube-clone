import { Fragment, useState } from "react";
import { MouseEvent } from "react";


function ListGroup() {
    let items = [
        'New York',
        'San Francisco ' 
    ]
    let selectedItem = -1;
    //items = [];
    // This is the default message to display whenever there is no data item to display
    const message  = items.length === 0 && <p>No item found</p> ;

    // Event handler
    //const handleClick = (event : MouseEvent) => console.log(event);
    let selectedIndex = 0;
    
    // Hook
    useState         

    return (
        <>
            <h1>List</h1>
            {message}
            <ul className="list-group">
                { items.map((item, index) => (
                    <li 
                    className={
                        selectedItem === index
                        ? "list-group-item active"
                        : "list-group-item"
                    } 
                    key={item} 
                    onClick={() => 
                    {selectedIndex === index}} >{item}</li>
                )) }
            </ul>
        </>
    );
}

export default ListGroup
