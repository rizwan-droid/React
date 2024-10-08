import reactLogo from './assets/react.svg';
import UserListing from './users/UserListing';
import viteLogo from '/vite.svg';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  return (
    <>
    <div className='text-center'>
      <h1 className='text-info'>Welcome to CRUD Application</h1>
    </div>
    <div className='text-center'>
    <button className='btn btn-primary' onClick={()=>navigate("/create-user")}>create-user</button>
    </div>
    
      
    </>
  )
}

export default App
