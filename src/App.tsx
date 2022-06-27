import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import CharacterSheet from './components/CharacterSheet';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <main>
        <CharacterSheet />
      </main>
    </div>
  );
};

export default App;
