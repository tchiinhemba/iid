import { useState } from "react";
import axios from "axios";

import "./App.scss";
import { FaLinkedinIn, FaGithub } from "react-icons/all";
import cloudIcon from "./assets/icons/download-cloud.svg";

function App() {
  const [link, setLink] = useState('');

  const downloadImage = async () => {
    try {
      const response = await axios.get(link, { responseType: "blob" });
      const url = URL.createObjectURL(response.data);
      window.open(url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <header className="header-container">
            <div className="logo">Down</div>
            <div className="social-icons">
              <ul className="list-icons">
                <li>
                  <a href="" className="icon">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="" className="icon">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </header>

          <main className="content-wrapper">
            <div className="content-container">
              <div className="input-container">
                <input
                  type="text"
                  className="input-link"
                  placeholder="Paste your link here..."
                  value={link}
                  onChange={handleLinkChange}
                />
                <button className="btn-download" onClick={downloadImage}>
                  <img src={cloudIcon} height={20} />
                </button>
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
  );
}

export default App;
