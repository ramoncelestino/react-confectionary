import './footer.module.scss';

const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <h2>RC</h2>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto"></ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
