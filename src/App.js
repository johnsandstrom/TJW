import './App.css';
import TopHeader from './components/TopHeader';
import CustNavbar from './components/Navbar';
import Footer from './components/Footer';

import CustomNavbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <TopHeader />
      <CustNavbar />
      {/* <CustomNavbar /> */}
      <header className="App-header">
      </header>
      <Footer />
    </div>
  );
}

export default App;
