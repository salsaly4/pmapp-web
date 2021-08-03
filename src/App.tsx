import React from 'react';
import { TaskBoard } from './components/TaskBoard';

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <p>Flexoprom Project Management Suite</p>
      </header>
      <TaskBoard />
    </div>
  );
}

export { App };
