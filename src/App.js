import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import GetUsers from './GetUsers';
import DeleteUser from './DeleteUser';
import CrudApp from './CrudApp';
function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<CrudApp></CrudApp>}></Route>
      <Route path='/createUser' element={<CreateUser></CreateUser>}></Route>
      <Route path='/updateUser' element={<UpdateUser></UpdateUser>}></Route>
      <Route path='/getUsers' element={<GetUsers></GetUsers>}></Route>
      <Route path='/deleteUser' element={<DeleteUser></DeleteUser>}></Route>
    </Routes>
  </Router>
}

export default App;
