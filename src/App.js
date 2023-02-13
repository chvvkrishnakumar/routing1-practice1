import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound/index'
import About from './components/About/index'
import Home from './components/Home/index'
import Contact from './components/Contact/index'
import Header from './components/Header/index'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </>
)
export default App
