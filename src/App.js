import './App.css';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import { Outlet,Routes,Route } from 'react-router-dom';
import MainPage from '../src/pages/MainPages'
import DetailPage from '../src/pages/DetailPages'
import SearchPage from '../src/pages/SearchPage'
const Layout =()=>{

  return(
  <div>
    <Nav/>
    <Outlet/>
    <Footer/>

  </div>
  );

};


//App.js를 라우팅을 위한 파일로 만든다.
function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path=":movieId" element={<DetailPage/>}/>
        <Route path="search" element={<SearchPage/>}/>
      </Route>
     </Routes>
    </div>
   
  );
}

export default App;
