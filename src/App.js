import React from "react";
import {BrowserRouter ,Routes,Route} from 'react-router-dom'


import Sidebar from "./sidebar/Slidebar";
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<Sidebar/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
