import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>);
    });
  }

  render() {
    return (<ul className="list-group col-sm-4">
      {this.renderList()}
    </ul>);
  }
}

function mapStateToProps(state) {
  // Wszystko, co zostanie tutaj zwrócone, zostanie użyte jako Props w Kontenerze BookList
  return {
    books: state.books
  }
}
  // Z tej funkcji też wszystko do propsóww w BookList
function mapDispatchToProps(dispatch) {
   // Jak ta funkcja zostanie wywołana, to wynik powinien zostać przekazany do wszystkich naszych reducerów
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Nasz komponent BookList staje się dzięki temu KONTENEREM, ma dostęp do globalnego stateu
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
