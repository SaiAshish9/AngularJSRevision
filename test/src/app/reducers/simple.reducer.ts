export function simpleReducer(state: string = 'Hello', action) {
  console.log(action.type, state);

  switch (action.type) {
    case 'A':
      return (state = action.payload);
    default:
      return state;
  }
}
