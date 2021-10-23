
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About.jsx";
import Home from './pages/Index.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// import "./assets/css/style.css"
import ViewEvent from "./pages/ViewEvent.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import Team from "./component/Team.jsx";
import Gallery from "./pages/Gallery.jsx";
import Booking from "./pages/Booking.jsx";
import logo from "./assets/images/logo-yellow.png"
import whitelogo from "./assets/images/logow.png"
import { useEffect } from "react"
function Homepage() {

  return (

    <Router>

      <div className="loading">

        {/* <!-- <img src="img/loader.gif" alt=""> --> */}

        <div className="windows8 loading-position">
          <div className="wBall" id="wBall_1">
            <div className="wInnerBall"></div>
          </div>
          <div className="wBall" id="wBall_2">
            <div className="wInnerBall"></div>
          </div>
          <div className="wBall" id="wBall_3">
            <div className="wInnerBall"></div>
          </div>
          <div className="wBall" id="wBall_4">
            <div className="wInnerBall"></div>
          </div>
          <div className="wBall" id="wBall_5">
            <div className="wInnerBall"></div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-fixed-top navigation"  >
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand logo" >
              <img className="normal" src={logo} alt="" style={{ width: '80px' }} />
              <img className="white" src={whitelogo} alt="" style={{ width: '80px' }} />
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/team" component={Team} />
        <Route path="/booking" component={Booking} />
        <Route path="/event/:id" component={ViewEvent} />
      </Switch>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="footer-top">
                <div className="col-md-4">


                  <div className="footer-about">
                    <h3 className="footer-title">About</h3>
                    <p>Platinum J's World is a boutique entertainment company specializing in talent development,
                     artistes management, event planning, advertising and media consultancy.</p>
                  </div>
                </div>
                <div className="col-md-4">


                  <div className="footer-address">
                    <h3 className="footer-title">Address</h3>
                    <p>21, Mabo Street, Surulere Lagos, Nigeria.</p>
                    <p className="contact-address">
                      Contact us : <a href="tel:+2348012345678">+234 (8083641967, 803474855) | +447307955509 </a> <br />
                      Write us : <a href="mailto:info@xfactorproductions.ng">info@xfactorproductions.ng
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-social-media">
                    <h3 className="footer-title">Keep in touch</h3>
                    <ul className="footer-media-link">
                      <li><a href="http://facebook.com/platinumjsworld"><i className="tf-ion-social-facebook" aria-hidden="true"></i></a></li>
                      <li><a href="http://twitter.com/platinumjsworld"><i className="tf-ion-social-twitter" aria-hidden="true"></i></a></li>
                      <li><a href="http://www.instagram.com/platinumjsworld"><i className="tf-ion-social-instagram-outline" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="col-md-12">
                  <div className="copyright">
                    <p>  Copyright &copy; 2021 Platinum J Entertainment Company. All Rights Reserved </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </Router>
  );
}

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>

  )
}

export default App;
