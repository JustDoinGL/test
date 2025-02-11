import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  console.log('2222')
  const BASE_URL = import.meta.env.BACKEND_URL;

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        {BASE_URL}
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
