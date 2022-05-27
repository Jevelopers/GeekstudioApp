import Aside from "./Components/Aside";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Navbar />
        <Aside />
      </div>
      <div className='App-main'>
      </div>
      <div className='App-footer'></div>
    </div>
  );
}

export default App;
