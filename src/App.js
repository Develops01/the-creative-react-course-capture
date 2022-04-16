//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import { React } from 'react';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
    <AboutUs/>
    </div>
  );
}

export default App;
