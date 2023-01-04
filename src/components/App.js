import React, { useState } from 'react';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleToggle = () => {
    setShowWelcome(!showWelcome);
  }

  return (
    <div>
      {showWelcome ? (
        <div id="welcome-div">Welcome</div>
      ) : (
        <div id="about-div">About</div>
      )}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default App;
