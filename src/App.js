
import { Routes , Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLayout from './layout/AppLayout';
import Hompage from './pages/Homepages/Hompage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';


function App() {
  /* index는 부모와 같은 path를 쓴다는 뜻 */
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Hompage />} />
        <Route path='movies'>
          <Route index element={<MoviePage />} />
          <Route path=':id' element={<MovieDetailPage />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
