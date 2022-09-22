import React, { useState } from "react";
import "./App.css";
import { Main } from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import { Context } from "./utilities/api/context";
import NotFound from "./pages/NotFound";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [releaseYearValue, setReleaseYearValue] = useState<string>("");
  const [isSearchSelected, setIsSearchSelected] = useState<boolean>(false);
  const [isFilterSelected, setIsFilterSelected] = useState<boolean>(false);
  const [isUserIn, setIsUserIn] = useState<boolean>(false);

  return (
    <div className="App">
      <Context.Provider
        value={{
          searchValue,
          setSearchValue,
          categoryValue,
          setCategoryValue,
          releaseYearValue,
          setReleaseYearValue,
          isSearchSelected,
          setIsSearchSelected,
          isFilterSelected,
          setIsFilterSelected,
          isUserIn,
          setIsUserIn,
        }}
      >
        <Navbar />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
