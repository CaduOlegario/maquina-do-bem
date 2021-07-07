import { GlobalStyle } from './styles/style'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home';

function App() {
  return (
    <>
     <Header />
     <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
      </Switch>
    </Router>
     <GlobalStyle />
    </>
  );
}

export default App;
