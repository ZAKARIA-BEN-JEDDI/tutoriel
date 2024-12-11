export const FORM_REDUCER_VALUES = {
  floating_email :'',
  password:'',
  lastName:'',
  firstName:'',
  coutry:'',
  phone:'',
  condition:''
}

export default function FromReducerFunction (state,action){
  switch (action.type) {
    case 'INPUT':
      return {...state,[action.payload.name]:action.payload.value}
    case 'SELECT':
      return {...state,[action.payload.name]:action.payload.value}
    case 'CHECKBOX':
      return {...state,[action.payload.name]:action.payload.checked}
    default:
      return state;
  }
} 