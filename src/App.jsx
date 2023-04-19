import './App.scss'
import { FaLinkedinIn, FaGithub } from 'react-icons/all'
import cloudIcon from './assets/icons/download-cloud.svg'

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <header className="header-container">
            <div className="logo">Down</div>
            <div className="social-icons">
              <ul>
                <li><a href=""><FaLinkedinIn/></a></li>
                <li><a href=""><FaGithub/></a></li>
              </ul>
            </div>
          </header>

          <main className="content-wrapper">
            <div className="content-container">

              <div className="input-container">
                <input type="text" />
                <button><img src={cloudIcon} height={20}/></button>
              </div>
            </div>
          </main>

          <footer className="footer-container">
            <div className="footer-description">
              <span>Eládio Tchinhemba</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
