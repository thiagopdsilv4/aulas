import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Kasinski"/>
                <Item marca="Ferrari"/>
            </ul>
        </>
    )
}

export default List