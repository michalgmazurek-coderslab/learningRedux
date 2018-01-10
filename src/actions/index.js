export function selectBook(book) {
  // selectBook to ActionCreator i jako akcję zwraca nam obiekt - każda akcja musi mieć własność type, aby określić co dokładnie robi
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
