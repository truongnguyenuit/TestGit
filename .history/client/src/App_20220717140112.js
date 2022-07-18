import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configRouter } from './router/configRouter';
import NavbarComponent from './components/NavbarComponent';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="fixed top-0 left-0 right-0 z-1">
          <NavbarComponent />
        </div>
        <Routes>
          {configRouter.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={item.page}
              />
            );
          })}

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
