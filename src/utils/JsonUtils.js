

export const ProductSaved = (item, old) => {
    console.log("item ", item);
    console.log("old ", old);
    if (old != null) {
        item.id = old.id;
        item.codice = old.codice;
        item.reparto =  { id: (!isNaN(item.reparto)) ? old.reparto : item.reparto }
        item.categoria = { id : (!isNaN(item.categoria)) ? old.categoria : item.categoria }
    } else {
        item.reparto = {id : item.reparto};
        item.categoria = {id:item.categoria};
    }

    return item;
}
