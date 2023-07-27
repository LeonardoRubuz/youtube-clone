import { Fragment } from "react";
import { MouseEvent } from "react";


function ListGroup() {
    let items = [
        'New York',
        'San Francisco ' 
    ]
    //items = [];
    // This is the default message to display whenever there is no data item to display
    const message  = items.length === 0 && <p>No item found</p> ;

    // Event handler
    const handleClick = (event : MouseEvent) => console.log(event);
                    

    return (
        <>
            <h1>List</h1>
            {message}
            <ul className="list-group">
                { items.map((item) => (
                    <li 
                    className="list-group-item" 
                    key={item} 
                    onClick={handleClick} >{item}</li>
                )) }
            </ul>
        </>
    );
}

export default ListGroup
