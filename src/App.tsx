import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./pages/Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <BrowserRouter  >
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
