import Navbar from './Navbar';
import Body from './Body';
import ThemeProvider from './ContextTheme';

function App() {

  return (
    <div>
      <ThemeProvider>
        <Navbar> </Navbar>
        <Body></Body>
      </ThemeProvider>
    </div>
  )
}

export default App
