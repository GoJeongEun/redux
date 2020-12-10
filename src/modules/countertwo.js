const INCREMENT = 'countertwo/INCREMENT';
const DECREMENT = 'countertwo/DECREMENT';


export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});

const initialState = {
    number: 0,
    diff: 5
};

export default function countertwo(state = initialState, action){
    switch (action.type){
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
