const INCREMENT = 'countertwo/INCREMENT';
const DECREMENT = 'countertwo/DECREMENT';
const SET_DIFF = 'countertwo/SET_DIFF'

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const setDiff = diff => ({ type: SET_DIFF, diff });

const initialState = {
    number: 0,
    diff: 5
};

export default function countertwo(state = initialState, action){
    switch (action.type){
        case SET_DIFF:
            return {
              ...state,
              diff: action.diff
            };
            case INCREMENT:
                return{
                    ...state,
                    number: state.number + state.diff
                };
               case DECREMENT:
                   return{
                       ...state,
                       number: state.number - state.diff
                   } ;
                   default:
                       return state;
    }
}
