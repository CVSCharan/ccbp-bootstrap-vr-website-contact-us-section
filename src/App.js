import "./App.css";

function App() {
  return (
    <div className="bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 order-md-2 pt-5">
            <h1 className="heading">
              Virtually Anything <br />
              is Possible
            </h1>

            <div className="d-md-none pt-3">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-set-img.png"
                className="img"
                alt="img1"
              />
            </div>
            <div>
              <button className="butn btn-outline-light mt-3">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="d-none col-md-5 d-md-block order-md-1 pt-3">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-set-img.png"
              className="img"
              alt="img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
