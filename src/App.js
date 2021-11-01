import './App.css';
import TopHeader from './components/TopHeader';
import routes from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <TopHeader />
        {routes}
      <header className="App-header">
      </header>
      <Footer />
    </div>
  );
}

export default App;
