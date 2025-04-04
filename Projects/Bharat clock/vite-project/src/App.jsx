import BodyText from "./components/BodyText";
import ClockName from "./components/ClockName";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return (
      <center className="wrapper">
         <ClockName> </ClockName>
        <BodyText></BodyText>
        <CurrentTime></CurrentTime>
        
      </center>
  );
}

export default App;
