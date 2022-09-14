
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Device/Watch/Watch';

function App() {
  return (
    <div className="App">
     <Device name = {"Laptop-Black"} price = {"1000 Taka"}></Device>
     <Watch></Watch>
    </div>
  );
}

export default App;
