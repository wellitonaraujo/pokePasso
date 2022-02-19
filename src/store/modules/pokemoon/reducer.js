export default function pokemon(state = [], action){

    console.log(state)
    switch(action.type) {
        case 'USE_POKEMON':
            return [ ...state, action.pokemon ];
        
        default:
            return state;
    }
}