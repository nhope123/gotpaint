
const SEARCH = 'searchSelect';
const ADD    = 'addSelect';
const REMOVE = 'removeSelect';
const LOG    = 'logSelect';
const SAVE   = 'saveSelect';
const BACKUP = 'backupSelect';
export const inventory = {
    acura: ['ar54'],
    bmw: ['b68'],
    chrysler: ['cs56'],
    ford: ['f556'],
    gmc: ['g55'],
    honda: ['ho68'],
    hyundai: ['hy86'],
    infiniti: ['i865'],
    kia: ['k66'],
    mazada: ['ma686'],
    mercedes: ['me53'],
    mini: ['mi28'],
    mitsubishi: ['ms545'],
    nissan: ['n586'],
    porsche: ['po56'],
    subaru: ['su5'],
    toyota: ['tl863'],
    vw: ['vw6'],
    volvo: ['vo745'],
};

export const searchAction = ()=>{ return {type: SEARCH}};
export const addAction = ()=>{ return {type: ADD}};
export const removeAction = ()=>{ return {type: REMOVE}};
export const logAction = ()=>{ return {type: LOG}};
export const saveAction = ()=>{ return {type: SAVE}};
export const backupAction = ()=>{ return {type: BACKUP}};

const defaultState = {role:['show','hide','hide','hide','hide','hide'],select:['active','','','','','']};

export function paintReducer(state = defaultState,action){
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
