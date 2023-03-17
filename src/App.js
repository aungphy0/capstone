import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <html>
      <head></head>
      <body>
        <header>
          <Header/>
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/order">Online Order</a></li>
            </ul>
          </nav>
        </header>
        <main>

        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}

export default App;
