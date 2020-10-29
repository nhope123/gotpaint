// Select Actions
const SEARCH = 'searchSelect';
const ADD    = 'addSelect';
const REMOVE = 'removeSelect';
const LOG    = 'logSelect';
const SAVE   = 'saveSelect';
const BACKUP = 'backupSelect';
// Select Action Creators
export const searchAction = ()=>{ return {type: SEARCH}};
export const addAction = ()=>{ return {type: ADD}};
export const removeAction = ()=>{ return {type: REMOVE}};
export const logAction = ()=>{ return {type: LOG}};
export const saveAction = ()=>{ return {type: SAVE}};
export const backupAction = ()=>{ return {type: BACKUP}};
// Deafault state value
const defaultState = {role:['show','hide','hide','hide','hide','hide'],select:['active','','','','','']};

// Select Reducer
export function selectReducer(state = defaultState,action){
    switch (action.type) {
      case SEARCH:
        return({role:['show','hide','hide','hide','hide','hide'],select:['active','','','','','']});
      case ADD:
        return({role:['hide','show','hide','hide','hide','hide'],select:['','active','','','','']});
      case REMOVE:
        return({role:['hide','hide','show','hide','hide','hide'],select:['','','active','','','']});
      case LOG:
        return({role:['hide','hide','hide','show','hide','hide'],select:['','','','active','','']});
      case SAVE:
        return({role:['hide','hide','hide','hide','show','hide'],select:['','','','','active','']});
      case BACKUP:
        return({role:['hide','hide','hide','hide','hide','show'],select:['','','','','','active']});
      default:
        return state;
    }
}










/* export const inventory = {
    acura: [],
    bmw: [],
    chrysler: [],
    ford: [],
    gmc: [],
    honda: [],
    hyundai: [],
    infiniti: [],
    kia: [],
    mazada: [],
    mercedes: [],
    mini: [],
    mitsubishi: [],
    nissan: [],
    porsche: [],
    subaru: [],
    toyota: [],
    vw: [],
    volvo: [],
}; */
