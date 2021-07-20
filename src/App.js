import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Bookshelf from './components/Bookshelf/BookShelf'
import BookLibrary from './components/BookLibrary/BookLibrary';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from './redux/ducks/books';
import BookDescription from './components/BookDescription/BookDescription';

// function useQuery() {
//   console.log(useLocation())
//   return new URLSearchParams(useLocation().search);
// }

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books.books);
  console.log(books);

  // let query = useQuery();
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {books && <Bookshelf books={books} />}
        </Route>
        <Route path="/books">
          <BookLibrary />
        </Route>
        <Route path="/book/:id">
          <BookDescription  />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
