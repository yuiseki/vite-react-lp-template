import "./App.css";

const productInfo = {
  name: "vite-react-lp-template",
  catchphrase: "Beautiful Landing Page in Minutes",
  description:
    "Creating high quality landing page as easy as possible. Build with Vite, React and Typescript.",
  demoVideoUrl: "https://i.gyazo.com/ebd55be1135ac78255694f92248d7311.mp4",
  leadText: "The quick brown fox jumps over the lazy dog",
  features: [
    {
      icon: "⚡",
      title: "Feature 1",
      description: "The quick brown fox jumps over the lazy dog",
    },
    {
      icon: "📦",
      title: "Feature 2",
      description: "The quick brown fox jumps over the lazy dog",
    },
    {
      icon: "🔨",
      title: "Feature 3",
      description: "The quick brown fox jumps over the lazy dog",
    },
    {
      icon: "🗺",
      title: "Feature 4",
      description: "The quick brown fox jumps over the lazy dog",
    },
  ],
  pricingLeadText: "The quick brown fox jumps over the lazy dog",
  pricingPlans: [
    {
      name: "Trial",
      price: "Free",
      features: ["10 public maps", "no private maps"],
      class: "primary",
    },
    {
      name: "Pro",
      price: "$5",
      features: ["1,000 public maps", "20 private maps"],
      class: "normal",
    },
  ],
  waitlistIframeUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe2qxlAwe5LRl5HqkEpXep0i6Y70C2cI9DNqC3e9vW7Rhx8gA/viewform?embedded=true",
};

function App() {
  return (
    <>
      <header>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <img src="vite.svg" alt="Vite Logo" width="30" height="30" />
          <a href="#main">
            <strong style={{ fontSize: "20px" }}>{productInfo.name}</strong>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "16px",
            alignItems: "center",
          }}
        >
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#waitlist">
            <button className="primary">Join the waitlist</button>
          </a>
        </div>
      </header>

      <main id="main">
        <div className="logo">
          <img src="vite.svg" alt="Vite Logo" width="124" height="124" />
        </div>
        <h2 className="title">{productInfo.catchphrase}</h2>
        <h3 className="subtitle">{productInfo.description}</h3>
        <div>
          <a href="#waitlist">
            <button className="primary hero-button">Join the waitlist</button>
          </a>
        </div>
        <div className="hero-video">
          <video
            style={{ borderRadius: "10px" }}
            width="100%"
            height="auto"
            muted={true}
            controls={false}
            autoPlay={true}
            loop={true}
            src={productInfo.demoVideoUrl}
          />
        </div>
        <div id="product" className="main-content-column">
          <h2>Product</h2>
          <h3>{productInfo.leadText}</h3>
          <div className="product-card-container">
            {productInfo.features.map((feature) => {
              return (
                <div className="product-card">
                  <h3 className="icon">{feature.icon}</h3>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/*
        <div id="howtouse" className="main-content-column">
          <h2>How to use</h2>
          <h3>The quick brown fox jumps over the lazy dog</h3>
        </div>
          */}
        <div id="pricing" className="main-content-column">
          <h2>Pricing</h2>
          <h3>{productInfo.pricingLeadText}</h3>
          <div
            style={{
              display: "flex",
              width: "100%",
              margin: "5rem auto 0",
            }}
          >
            {productInfo.pricingPlans.map((plan) => {
              return (
                <div className="pricing-card">
                  <h3>{plan.name}</h3>
                  <h2>{plan.price}</h2>
                  <ul>
                    {plan.features.map((feature) => {
                      return <li>{feature}</li>;
                    })}
                  </ul>
                  <a href="#waitlist">
                    <button className={plan.class}>Join the waitlist</button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div id="waitlist" className="main-content-column">
          <h2>Waitlist</h2>
          <iframe
            src={productInfo.waitlistIframeUrl}
            width="600"
            height="600"
            frameBorder={0}
          >
            Loading...
          </iframe>
        </div>
      </main>

      <footer>
        <div
          style={{
            marginTop: "100px",
            width: "100%",
            display: "flex",
            gap: "25px",
            fontSize: "16px",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <a href="https://twitter.com/yuiseki_">X (Twitter)</a>
          <a href="https://github.com/yuiseki">GitHub</a>
        </div>
        {/*
        <div
          style={{
            marginTop: "25px",
            width: "100%",
            display: "flex",
            gap: "25px",
            fontSize: "16px",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <a href="#terms">Terms of use</a>
          <a href="#privacy">Privacy policy</a>
        </div>
          */}
      </footer>
    </>
  );
}

export default App;
