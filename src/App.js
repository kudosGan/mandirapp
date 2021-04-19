
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Pyaudio from "./component/Pyaudio/Pyaudio";
import Youtube from "./component/Youtube/Youtube";
import Streaming from "./component/Streaming/Streaming";
import Developer from "./component/Developer/Developer";


function App() {
  return (
    <div>
    <Pyaudio/>
    <Youtube/>
    <Streaming/>
    <Developer/>
    
    </div>
  );
}
 

export default App;
