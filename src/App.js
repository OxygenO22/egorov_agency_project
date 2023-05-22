import styles from './App.module.scss';
import { Router } from './components/ui/Router';

function App() {
  return (
    <div className={styles.app}>
      <Router />
    </div>
  );
}

export default App;
