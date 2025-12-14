import React from 'react';
import EventTimeline from './components/Events/EventTimeline/EventTimeline';
import HexGridBackground from './components/Events/HexGridBackground/HexGridBackground';

function App() {
  return (
    <div className="App">
      <HexGridBackground /> 
      
      <EventTimeline />
    </div>
  );
}

export default App;