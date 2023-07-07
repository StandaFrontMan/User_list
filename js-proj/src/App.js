import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './store/usersSlice';

function App() {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])

  const hendleClick = () => {
    dispatch(fetchUsers())
  }

  return (
    <div className="App">
      <button onClick={() => hendleClick()}>Click</button>
    </div>
  );
}

export default App;
