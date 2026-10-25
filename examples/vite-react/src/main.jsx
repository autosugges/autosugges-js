import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AutoSugges } from '@autosugges/client/react';
import { AutosuggesProvider } from '@autosugges/client/react-core';

function App() {
  const [country, setCountry] = useState(null);
  const key = import.meta.env.VITE_AUTOSUGGES_KEY;
  if (!key) return <p>Set VITE_AUTOSUGGES_KEY in .env (free key: https://app.autosugges.com).</p>;
  return (
    <main style={{ maxWidth: 420, margin: '4rem auto', fontFamily: 'system-ui' }}>
      <AutosuggesProvider lists={{ countries: key }}>
        <AutoSugges list="countries" value={country} onChange={setCountry} />
      </AutosuggesProvider>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
