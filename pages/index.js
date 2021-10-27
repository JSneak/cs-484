import Login from "./login.component"

export default function Home() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {/* <Link className="navbar-brand" to={"/sign-in"}>Tidal</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* <Link className="nav-link" to={"/sign-in"}>Login</Link> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to={"/sign-up"}>Sign up</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Login></Login>
          {/* <Switch>
            <Route exact path='/' component={Login}>
              <Login />
            </Route>
            <Route path="/sign-in" component={Login}>
              <Login />
            </Route>
            <Route path="/sign-up" component={SignUp}>
              <SignUp/>
            </Route>
            <Route path="/dashboard" component={Dashboard}>
              <Dashboard authed={true}/>
            </Route>
          </Switch> */}
        </div>
      </div>
    </div>
  );
}
