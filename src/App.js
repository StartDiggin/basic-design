import Header from './components/header';
import Navigation from './components/navigation';
import Content from './components/content';

import './css/style.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
