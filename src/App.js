import "./App.css";
import "../src/assets/styles/styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryHeader from "./components/CategoryHeader";
import CategoryHeadLine from "./components/CategoryHeadLine";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainwrapper">
        <CategoryHeader />
        <CategoryHeadLine/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
