import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import ViewUsers from './components/ViewUsers';
import Header from './components/Header';
function App() {
  return (
    <>
    <h1>CRUD Reactjs App</h1>
    <Header/>

    <BrowserRouter>
    <Routes>
      <Route path= {"/"} element={<ViewUsers/>} exact={true}/>
      <Route path= {"/viewusers"} element={<ViewUsers/>} exact={true}/>
      <Route path= {"/adduser"} element={<AddUser/>} exact={true}/>
      <Route path= {"/updateuser"} element={<UpdateUser/>} exact={true}/>
      <Route path= {"/deleteuser"} element={<DeleteUser/>} exact={true}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
