import "./App.css";
import Menu from "./components/menu";
import Posts from "./components/posts";
//import BottomMenu from "./components/bottomMenu";
import SideBar from "./components/sideBar";
import Auth from './components/auth';



/* <SideBar/>
      <Posts />
      <BottomMenu />
       */

function App() {
  return (
    <>
    <Auth/>
      <Menu />
      <SideBar/>
      <Posts />
    </>
  );
}

export default App;
