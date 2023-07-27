import { Fragment } from "react";


function ListGroup() {
    let items = [
        'New York',
        'San Francisco ' 
    ]
    //items = [];
    // This is the default message to display whenever there is no data item to display
    const message  = items.length === 0 && <p>No item found</p> 
    return (
        <>
            <h1>List</h1>
            {message}
            <ul className="list-group">
                { items.map((item) => (
                    <li key={item}>{item}</li>
                )) }
            </ul>
        </>
    );
}

export default ListGroup
