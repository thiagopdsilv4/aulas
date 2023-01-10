import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Kasinski" ano_lancamento={2011}/>
                <Item marca="Ferrari" ano_lancamento={2023}/>
                <Item marca="Chevrolet" ano_lancamento={1996}/>
            </ul>
        </>
    )
}

export default List