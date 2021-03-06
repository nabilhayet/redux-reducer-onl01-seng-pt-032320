export function manageFriends(state = { friends: [] }, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
          let findFriend = state.friends.filter(f => f.id !== action.id)
          return {...state, friends: findFriend }
        default:
          return state;
      }

}

