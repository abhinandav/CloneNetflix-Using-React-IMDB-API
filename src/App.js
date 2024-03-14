import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/Row-Post/RowPost';
import {action,originals} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Action Movies' url={action} isSmall/>
    </div>
  );
}

export default App;
