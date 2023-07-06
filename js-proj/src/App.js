import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './store/usersSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="App">
      initial
    </div>
  );
}

export default App;
