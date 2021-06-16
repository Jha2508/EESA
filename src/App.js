import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { GiElectric } from 'react-icons/gi'
import { FaCopyright, FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import homeimg from './EESAlogo.png'
import './App.css'
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand logo" ><GiElectric />
          EESA</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse menus" id="navbarNav">
          <ul className="navbar-nav menulist">
            <li>
              <Link to='/' className='menulist'>
                Home
              </Link>

            </li>
            <li>
              <Link to='/TNP'>
                T & P Stats
              </Link>
            </li><li>
              <Link to='/Articles'>
                Articles
              </Link>
            </li>
            <li>
              <Link to='/Internships'>
                Internships
              </Link>
            </li>
            <li>
              <Link to='/knowyouralumni'>
                Know your alumni
              </Link>
            </li>
            <li>
              <Link to='/Flash'>
                Flash
              </Link>

            </li>
            <li>
              <Link to='/OurTeam'>
                Our Team
              </Link>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
const style = { color: 'blue', fontSize: '50px', marginRight: '20px' }
function Footer() {
  return (
    <footer className='foot'>

      <center>
        <h1>EESA</h1>
        <hr width='60%' />
        <FaFacebookF style={style} /><FaLinkedin style={style} /><SiGmail style={style} /><FaYoutube style={style} /><br />
        <FaCopyright /> @ Kshitiz Jha
      </center>
    </footer>
  )
}
function HomePage() {
  return (
    <div>
      <div className='row about'>
        <div className='col'>
          <img src={homeimg} className='homeimg' alt='...' />
        </div>
        <div className='col aboutdesc'>
          <div className='aboutushead'>
            <b>About Us</b>
          </div>

          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>

        </div>
      </div>
      <div className='hearit'> Hear it from them!</div>

      <div className='card customcard'>
        <div className='row'>
          <div className='col-3'>
            <img src='https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg' className='rounded-circle z-depth-2' alt='...' />
          </div>
          <div className='col-6 hearname'>
            <i> Name of the person</i>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
          </div>


          <div className='col-3 carrdet'>
            <div className='divider' />
            <b> Year of passout:</b>
            <br />
            2018
            <br />

            <b> Work Experience:</b><br />
            <ul>
              <li> SDE At microsoft (2019-2020)</li>
              <li>Senior Web Developer at Google(2021 - present)</li>

            </ul>

          </div>
        </div>
      </div>
      <div className='card customcard custom2'>
        <div className='row'>
          <div className='col-3 carrdet2'>
            <b> Year of passout:</b>
            <br />
            2018
            <br />

            <b> Work Experience:</b><br />
            <ul>
              <li> SDE At microsoft (2019-2020)</li>
              <li>Senior Web Developer at Google(2021 - present)</li>

            </ul>

          </div>

          <div className='col-6 hearname hearname2'>
            <i> Name of the person</i>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
          </div>
          <div className='col-3'>
            <img src='https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg' className='rounded-circle z-depth-2 im2' alt='...' />
          </div>

        </div>
      </div>
      <div className='knowmore'>
        <Link to='/knowyouralumni' style={{ textDecoration: 'none' }}>....know more</Link>

      </div>
      <div className='row about'>
        <div className='col'>
          <img src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ae/d44940bc1211e6b2f15d37bbd770b5/916893ea2bbac7be1db992f4715d13c9.jpg?auto=format%2Ccompress&dpr=1' className='homeimg' alt='...' />
        </div>
        <div className='col aboutdesc'>
          <div className='aboutushead'>
            <b>Projects</b>
          </div>

          <p>Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>

        </div>
      </div>
      <div className='row about'>

        <div className='col' style={{ marginLeft: '103px' }}>
          <div className='aboutushead'>
            <b>Events</b>
          </div>

          <p>Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>

        </div>
        <div className='col'>
          <img src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ae/d44940bc1211e6b2f15d37bbd770b5/916893ea2bbac7be1db992f4715d13c9.jpg?auto=format%2Ccompress&dpr=1' className='homeimg' alt='...' />
        </div>
      </div>


    </div>)
}

function TNP() {
  return (<div className='margintop'>TNP</div>)
}
function Internship() {
  return (<div className='margintop'>Internships</div>)
}


function Articles() {
  return (<div className='margintop'>Articles</div>)
}


function Flash() {
  return (
    <div className='margintop'>
      <div className='wisf'>
        What is Flash?
      </div>
      <div className='flashdesc'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      </div>
      <div className='projhead'>Now Let's see our projects...</div>

      <div className='row project'>
        <div className='col-3'>
        <div className="card" style={{ width: '18rem' }}>
        <img src="https://holycoders.com/content/images/wordpress/2020/02/Web-Development.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Project Title</h5>
        </div>
      </div>
        </div>
        <div className='col-9'>
          <h5> By Team Leader and Team Name</h5>
          <h6>Team members</h6>
          project description sshould come here..
        </div>
      </div>
      <div className='row project'>
        
        <div className='col-9'>
          <h5> By Team Leader and Team Name</h5>
          <h6>Team members</h6>
          project description sshould come here..
        </div>
        <div className='col-3'>
        <div className="card" style={{ width: '18rem' }}>
        <img src="https://holycoders.com/content/images/wordpress/2020/02/Web-Development.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Project Title</h5>
        </div>
      </div>
        </div>
      </div>
      

    </div>)
}

function Knowyouralumni() {
  return (<div className='margintop'>Know your alumni</div>)
}
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/TNP" exact component={TNP} />
          <Route path="/Internships" exact component={Internship} />
          <Route path="/knowyouralumni" exact component={Knowyouralumni} />
          <Route path="/Articles" exact component={Articles} />
          <Route path="/Flash" exact component={Flash} />

        </Switch></Router>
      <Footer />
    </div>
  );
}

export default App;
