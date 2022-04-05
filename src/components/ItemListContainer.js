import ItemCount from "./ItemCount"
function ItemListContainer (params){

    const addCart = (params) => {
        return;
    }
    return(
        <div>
            {params.gretting}
            <ItemCount stock={5} initial={1} onAdd={addCart}/>            
        </div>
    )
}
export default ItemListContainer;