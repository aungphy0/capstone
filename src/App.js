import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Main from './Main.js';

function App() {
  return (
    <html>
      <head>
      </head>
      <body>
        <header>
          <Header/>
          <nav>
            <Nav/>
          </nav>
        </header>
        <main>
          <Main/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}

export default App;
