import './App.css';

import Container from '@material-ui/core/Container';
import MedalList from './components/MedalList';

function App() {
  return (
    <Container className="container" maxWidth="sm">
        <MedalList />
    </Container>
  );
}

export default App;
