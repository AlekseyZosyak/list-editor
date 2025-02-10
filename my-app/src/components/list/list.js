import ListItem from "../list-item/list-item"

const List = ({ data, onDelete }) => {

    const elements = data.map(item => {
        const { key, name } = item;

        return (
            <ListItem key={key} name={name} onDelete={onDelete}/>
        )
    });

   

    return (
        <ul>
            {elements}
        </ul>
    ) 
}

export default List;