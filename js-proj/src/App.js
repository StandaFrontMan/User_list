import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './store/usersSlice';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';

function App() {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])

  const hendleClick = () => {
    dispatch(fetchUsers())
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage hendleClick={hendleClick}/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
