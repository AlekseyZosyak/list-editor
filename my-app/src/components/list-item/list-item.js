
const ListItem = (props) => {
    
    const { name } = props;
        
        return (
            <li>
                
                    <span>{name}</span>
                    <button>&darr;</button>
                    <button>Add Sublist</button>
                    <button>Remove</button>
                
            </li>
        )   
    
}

export default ListItem;