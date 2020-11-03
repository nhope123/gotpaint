
const SHOWINVENTORY = 'SHOW_INVENTORY';

export const showInventoryAction = ()=>{
  const makeValue = document.getElementById('selectStock').value;
  return{
  type: SHOWINVENTORY,
  maker: makeValue
  }
}

export const inventoryReducer = (state='Acura',action)=>{
  switch (action.type) {
    case SHOWINVENTORY:
      return action.maker;

    default:
      return state;

  }
}
