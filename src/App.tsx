import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserList } from "./steps/step-10";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <h1>Typescript Principles</h1>
        <h2>切勿滥用 any</h2>
        <h2>尽量使用类型推断</h2>
        <h2>尽量使用类型衍生</h2>
      </main>
      <UserList query={{ username: "" }} />
    </div>
  );
};

export default App;
