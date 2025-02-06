import ListItem from "../list-item/list-item"

const List = ({data}) => {

    const elements = data.map(item => {
        const { id, name } = item;

        return (
            <ListItem key={id} name={name}/>
        )
    });

    return (
        <ul>
            {elements}
        </ul>
    ) 
}

export default List;