import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Header />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;
