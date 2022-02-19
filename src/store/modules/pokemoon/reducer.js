export default function pokemon(state = [], action){

    switch(action.type) {
        case 'USE_POKEMON':
            return [ ...state, action.pokemon ];
        
        default:
            return state;
    }
}