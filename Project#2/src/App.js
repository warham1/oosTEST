import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Form, Input, Image} from 'semantic-ui-react';
import { AppBar, FlatButton } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/note" component={Note}/>
    </div>
  </Router>
)

var blankstyle =
{
  height: '200px'
}

var customstyle =
{
  width: '50px',
  float: 'left'
}

var formstyle =
{
  width:'300px',
  float: 'left'
}

var formElementstyle =
{
  float: 'right',
  clear: 'right'
}

var mainstyle = 
{
  width: '900px',
  height: '600px',
  border: '2px #00BCD5 solid'
}

var leftside =
{
  width: '370px',
  height: '600px',
  float: 'left'
}

var rightside =
{
  width: '500px',
  height: '600px',
  float: 'left'
}

const Home = () => (
  <div style={mainstyle}>
    <MuiThemeProvider>
      <AppBar title="Minimal Note App" style={{width: '896px'}} iconClassNameRight="muidocs-icon-navigation-expand-more" />
    </MuiThemeProvider>
    <div style={leftside}>
      
      <div style={blankstyle}>
      </div>
      <div style={customstyle}>&nbsp;
      </div>
      <Form style={formstyle}>
        <Form.Field inline style={formElementstyle}>
          <label color='blue'>email</label>
          <Input color='red' placeholder='input email' />
        </Form.Field>
        <Form.Field inline style={formElementstyle}>
          <label>password</label>
          <Input type='password' placeholder='input password' />
        </Form.Field>
        <div style={formElementstyle}>
          <MuiThemeProvider>
            <FlatButton href='/signup' label="sign up" primary={true} />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FlatButton href='/note' label="sign in" />
          </MuiThemeProvider>
        </div>
      </Form>
    </div>
    <div style={rightside}>
      <Image src='res/note.JPG' size='medium' style={{ paddingTop: '80px'}} centered/>
    </div>
  </div>
)

const Signup = () => (
  <div>
    <h2>Signup</h2>
  </div>
)

const Note = () => (
  <div>
    <h2>Note</h2>
  </div>
)


export default App