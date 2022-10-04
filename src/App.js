import { useSelector } from 'react-redux';
import { Detail, Register } from './components/pages';
import { AppContainer } from './styled-components'

function App() {
  const form = useSelector((state) => state.form);

  return (
    <AppContainer>
      {Object.keys(form).length === 0 ? (
        <Register />
      ) : (
        <Detail form={form} />
      )}
    </AppContainer>
  );
}

export default App;
