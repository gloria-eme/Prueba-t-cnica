const Footer = () => {
  return (
    <div className="footer">
      <div className="buttonFooter">
        <button>Home</button>
        <button>Terms and Condicions</button>
        <button>Privacy Policy</button>
        <button>Collection Statement</button>
        <button>Help</button>
        <button>Manage Acount</button>
      </div>
      <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
      <div className="socialstore">
        <div className="social">
          <a href="https://www.facebook.com" target="_blanck">
            <img src="../../assets/social/facebook-white.svg" alt="social" width="30px" />
          </a>
          <a href="https://www.twitter.com" target="_blanck">
            <img src="../../assets/social/twitter-white.svg" alt="social" width="30px" />
          </a>
          <a href="https://www.instagram.com" target="_blanck">
            <img
              src="../../assets/social/instagram-white.svg"
              alt="social"
              width="30px"
            />
          </a>
        </div>
        <div className="store">
          <a href="https://www.apple.com/es/app-store/" target="_blanck">
            <img src="../../assets/store/app-store.svg" alt="store" width="30px" />
          </a>
          <a href="https://play.google.com/store/games?hl=es_419&gl=US" target="_blanck">
            <img src="./../assets/store/play-store.svg" alt="store" width="30px" />
          </a>
          <a href="https://www.microsoft.com/es-ad/store" target="_blanck">
            <img src="./../assets/store/windows-store.svg" alt="store" width="30px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
