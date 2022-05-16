import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <a
          class={styles.link}
          href="https://mbp.hatenablog.com/entry/2022/05/16/213132"
          target="_blank"
          rel="noopener noreferrer"
        >
          環境構築 
        </a>
      </header>
    </div>
  );
};

export default App;
