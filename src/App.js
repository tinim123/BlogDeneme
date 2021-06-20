import "./App.css";
import Menu from "./components/menu";
import Posts from "./components/posts";
import BottomMenu from './components/bottomMenu'

function App() {
  return (
    <div className="Main">
      <Menu />
      <Posts />
      <BottomMenu/>
    </div>
  );
}

export default App;
