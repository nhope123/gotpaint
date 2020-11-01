import store from './../store/store.js';
export const inventory = {
    Acura: {},
    'BMW': {
            '283': 1,'300': 1,'482': 2,'475': 1,A51: 1,A52: 1,A22: 1,A35: 1,B39: 1,X04: 1
          },
    Chrysler: {
               EBL: 1,PBX: 1, PVK: 1, PGH: 1, PXR: 2,PAV: 1, PR3: 1, PRH: 2, PEL: 2,
               PG8: 1, PDM: 1, PS2: 2, PP4: 1, PBV: 1, PSC: 1, PQD: 1, PVG: 1,
             },
    Fiat: {PX8: 1},
    Ford: {
            G2: 1,G3: 2,JV: 1,NZ: 1,UH: 2,U6: 1,UG: 1,VX: 1,VH: 2,VJ: 1,Y2: 1
          },
    'GMC': {
            '122V': 1,'224L': 1,'534F': 1,'706S': 1,'817K': 2,'810T': 1,'9792': 1,
            '994L': 1,'403P': 1,'WS5': 1,WA565Q: 1, WA139X: 1, WA232M: 1, WA9753: 1,
            WA502Q: 2,WA213M: 1,WA960: 1,WA505Q: 1,WA707S: 1,WA503Q: 1,YR600M: 1
          },
    Honda: {
            B561P: 1, B527P: 2,B537M: 2, B588P: 1, B92P: 1,G508P: 1, G51P: 1,
            NH624P: 3, NH788P: 3, NH797M: 3, NH578: 1, NH658P: 5,NH739M: 1,
            NH707: 1, NH623M: 1, NH731P: 1,NH741: 1,NH737M: 2,NH883P: 1,NH782M: 1,
            NH675M : 1, NH603P: 1,NH677P: 1,'NAH-BASE': 1, R525P: 2,R530P : 1, R543P: 1,
            RP32P: 1, R81: 1, YR562P: 1, YR573M: 1, YR574M: 1, YR578M: 1
          },
    Hyundai: {
              P3: 2,WJ: 1,DO: 1,TR3: 2,NGA: 1,'2X': 1,T3: 1,EB: 1,P9R: 1,NAA: 1,TG4: 1,SWP: 1,BV: 1
            },
    Infiniti: {},
    Kia: {
          'SWP-BASE': 1,ABP: 1,'7V': 1,U4: 1,IM: 1,IE: 1,HO: 1,DRB: 1
        },
    Mazada: {
             '189': 1,'27A': 1,'211': 1,'22V': 1,'28B': 1,'26X': 1,'28W': 1,'38H': 1,
             '34J': 2,'32V': 1,'35N': 1,'34R': 1,'38P': 1,'34K': 1,'32S': 1,'42A': 2,
             '42S': 2,'42M': 1,'46G': 1,'41W': 1,'JAG': 1
           },
    Mercedes: {
                '149':  2,'197': 2,'650': 1,'775': 1,'792': 1,'903': 1
              },
    Mini: {
            A31: 1,D14: 1, '850': 1
          },
    Mitsubishi: {
                  X42: 1
                },
    Nissan: {
              C12: 1,G41: 3,L5D: 1,LAE: 1,K23: 1,K26: 1,KAD: 2,KY2: 1,KX6: 1,K36: 1,
              NAH: 1,QX3: 2,RAB: 1,W40: 1
            },
    Porsche: {
              LM3W: 1
            },
    Subaru: {
              A9K: 1,C62: 1,'O2C': 1,'61K': 1
            },
    Toyota: {
             '1E3': 1, '1G1': 1, '1F7': 1, '1D2' : 1, '1C6': 1, '1G0': 1, '1F9': 1, '2O2': 1,
             '2O9': 1, '2I8': 1, '3Q3': 2, '3Q4': 2, '3T0': 1, '4Q2': 2, '4T8': 1, '6S5': 1,
             '6R1': 1, '6Q7': 1, '6N1': 1, '7U8': 1, '8V3': 1, '8W6': 1, '8V5': 1, '8R6': 1,
             '083': 1, '070': 1,'CRO': 1,'UAFO': 1, 'WA140X': 1
           },
    Volkswagen: {
                  '497W': 1,B5H: 1,L29Y: 1, LD7X: 1, LD1W: 1, LM7W: 1, L479: 1,
                  LA9W: 1, L49C: 1,'664': 1,WV2: 1
                },
    Volvo: {}
};



// Submit Actions
const SEARCHSUBMIT = 'searchSubmit';
const ADDSUBMIT    = 'addSubmit';
const REMOVESUBMIT = 'removeSubmit';
//const LOGSUBMIT    = 'logSubmit';
//const SAVESUBMIT   = 'saveSubmit';
//const BACKUPSUBMIT = 'backupSubmit';

// Acquire form data
const getAutoMakeRecord = (makeId,codeId)=>{
  var autoMake = document.getElementById(makeId).value;
  var autoCode = document.getElementById(codeId).value;
  document.getElementById(codeId).value = '';
 return [ autoMake, autoCode.toUpperCase()];
}

// Acquire element input values
const getElementValues = (operation, makeId, codeId)=>{
  // Acquire auto make and code from element
  var [autoMake,paintCode]  =  getAutoMakeRecord(makeId,codeId);
  // Acquire the make values from the store
  var stateMakeValue = store.getState().submit[autoMake];
  // Update the inventory paint count
  var paintCount = (stateMakeValue.[paintCode] !== undefined)? (stateMakeValue.[paintCode] ) : 0;
  paintCode = (paintCode === '' || paintCode === null)? 'noCode' : paintCode;
  switch (operation) {
    case 'search':
      if (paintCode === 'noCode') {
        alert('Enter code');
        return '';
      }
      else {
        alert(
          autoMake + '\n\nPaint code: '+ paintCode + '\nIn stock: ' + paintCount
        );
        return '';
      }
    case 'add':
      if (paintCode === 'noCode') {
        alert('Enter code');
        return {[autoMake]: stateMakeValue};
      }
      else {
        return {[autoMake]: Object.assign({},stateMakeValue,{[paintCode]: (paintCount + 1)})}
      }
    case 'remove':
      if (paintCode === 'noCode') {
        alert('Enter code');
        return {[autoMake]: stateMakeValue};
      }
      else {
        return (paintCount === 0)?
          {[autoMake]: Object.assign({},stateMakeValue,{[paintCode]: paintCount })} :
         {[autoMake]: Object.assign({},stateMakeValue,{[paintCode]: (paintCount - 1)})}
      }
    default:

  }




}

// Submit Action creators
export const searchSubmitAction = ()=>{
  getElementValues('search','searchMake','searchCode');
  return{type: SEARCHSUBMIT}
};

export const addSubmitAction = ()=>{
  return{type: ADDSUBMIT, value: getElementValues('add','addMake','addCode')};
};
export const removeSubmitAction = ()=>{
   return{type: REMOVESUBMIT,value: getElementValues('remove','removeMake','removeCode')};
 };


export const submitReducer = (state=inventory, action)=>{
  switch (action.type) {
    case ADDSUBMIT:
      return Object.assign({},state,action.value);
    case REMOVESUBMIT:
      return Object.assign({},state,action.value);
    default:
      return state;
  }
}
