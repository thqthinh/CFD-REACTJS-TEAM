import "./App.css";
import "./App.scss";
import "../src/assets/styles/styles.scss";

import Homepage from "./pages/Home";
import Checkout from "./pages/Checkout";
import BillingInfo from "./components/BillingInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      {/* <Checkout/> */}
      <Header />
      <ProductDetail
        title="Product title"
        image={<img src="../images/product.jpg" />}
      />
      <Footer />
    </div>
  );
}

export default App;
