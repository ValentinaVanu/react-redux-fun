export const initialState = [
  {
    name: "Valentina",
    age: 26,
    id: 224
  },
  {
    name: "Chloe",
    age: 1,
    id: 4
  },
]

export const betReducer = (state = initialState, action) => {
  switch(action.type){
    case "add": 
      return [
        ...state,
        action.bet
      ] 
    default: 
      return state
  }
}
