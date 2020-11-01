
const SHOWINVENTORY = 'SHOW_INVENTORY';

export const showInventoryAction = ()=>{
  const makeValue = document.getElementById('selectStock').value;
  console.log('sel value: '+makeValue);

  return{
  type: SHOWINVENTORY,
  maker: makeValue
  }
}

export const inventoryReducer = (state='BMW',action)=>{
  switch (action.type) {
    case SHOWINVENTORY:
      return{intMaker: action.maker};

    default:
      return state;

  }
}
