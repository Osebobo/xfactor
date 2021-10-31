
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
import ViewEvent from "./pages/ViewEvent.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import Team from "./component/Team.jsx";
import Gallery from "./pages/Gallery.jsx";
import Booking from "./pages/Booking.jsx";
import logo from "./assets/images/xfactor-logo-01.png"
// import whitelogo from "./assets/images/logow.png"
import { useEffect } from "react"
import ViewTeam from "./pages/ViewTeam.jsx";
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

      <nav  className="navbar navbar-fixed-top navigation"  >
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" ></span>
              <span className="icon-bar" ></span>
              <span className="icon-bar" ></span>
            </button>
            <a className="navbar-brand logo" >
              <img className="normal" src={logo} alt="" style={{ width: '200px' }} />
              <img className="white" src={logo} alt="" style={{ width: '200px' }} />
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
      <div style={{ overflowX: 'hidden' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/team/view/:id" component={ViewTeam} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/team" component={Team} />
          <Route path="/booking" component={Booking} />
          <Route path="/event/:id" component={ViewEvent} />
        </Switch>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="footer-top">
                <div className="col-md-4">


                  <div className="footer-about">
                    <h3 className="footer-title">About</h3>
                    <p>X Factor Productions's World is a boutique entertainment company specializing in talent development,
                     artistes management, event planning, advertising and media consultancy.</p>
                  </div>
                </div>
                <div className="col-md-4">


                  <div className="footer-address">
                    <h3 className="footer-title">Address</h3>
                    <p>21, Mabo Street, Surulere Lagos, Nigeria.</p>
                    <p className="contact-address">
                      Contact us : <a href="tel:+2348105974232">+234 (0) 810 597 4232 | 907 538 1066 | +44730795509, </a> <br />
                      Write us : <a href="mailto:info@xfactorproductions.ng">info@xfactorproductions.ng
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-social-media">
                    <h3 className="footer-title">Keep in touch</h3>
                    <ul className="footer-media-link">
                      <li><a href="https://web.facebook.com/thexfactorproductions" target="_blank"><i className="tf-ion-social-facebook" aria-hidden="true"></i></a></li>
                      <li><a href="https://twitter.com/thexfactorprod?fbclid=IwAR3FR5dQfWP1-6U0-S3gmuTX19wz-2w3ckUFOnb4jy7YJ-a6gjqsJler5Qw" target="_blank"><i className="tf-ion-social-twitter" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.instagram.com/thexfactorproductions/?fbclid=IwAR3_CAyBdtGvyhlEJtzSDZi8nfbU6T2JiRki3VNKNETQDLLYlph89GHWIKc" target="_blank"><i className="tf-ion-social-instagram-outline" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.youtube.com/channel/UCmMylJooYnZJVztgbDxsznA" target="_blank"><i className="tf-ion-social-youtube-outline" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="col-md-12">
                  <div className="copyright">
                    <p>  Copyright &copy; 2021 X Factor Productions Company. All Rights Reserved </p>
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
