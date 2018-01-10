// Tutaj state NIE JEST STATEM APLIKACJI, tylko state za który jest odpowiedzialny ten reducer
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
