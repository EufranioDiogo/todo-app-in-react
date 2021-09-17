import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import MainApp from './components/MainApp';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Route path="/" exact render={() => (
            <MainApp></MainApp>
          )
        }></Route>

        <Route path="/about" component={About}></Route>
        <Footer></Footer>
      </div>
    </Router >

  );
}

export default App;
