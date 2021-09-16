import FooterNavigation from './FooterNavigation';
import HomePage from '../pages/HomePage';
import TopNavigation from './TopNavigation';

import '../styles/App.css';

const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      <HomePage />
      <FooterNavigation />
    </div>
  );
}

export default App;
