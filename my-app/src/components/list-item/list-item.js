
const ListItem = (props) => {
    
    const { name, onDelete } = props;
        
        return (
            <li>
                <span>{name}</span>
                <button>&darr;</button>
                <button>Add Sublist</button>
                <button onClick={() => onDelete()}>Remove</button>
            </li>
        )   
    
}

export default ListItem;