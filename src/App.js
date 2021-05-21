import './App.css';
import Home from './component/homepage/index'
import Loading from './component/loading/index'
function App() {
  return (
    <div className="App">
      <Loading></Loading>
      <Home></Home>
    </div>
  );
}

export default App;
