import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/Layout'
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import {purple} from '@material-ui/core/colors'

const theme = createTheme({
  palette:{
    primary:{
      main : '#fefefe'
    },
    secondary: purple
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight : 400,
    fontWeightReguler: 500,
    fontWeightMedium: 600,
    fontWeightBold : 700,
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
