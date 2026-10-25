'use client';
import { useState } from 'react';
import { AutoSugges } from '@autosugges/client/react';
import { AutosuggesProvider, type AutoSuggesValue } from '@autosugges/client/react-core';

export default function Page() {
  const [country, setCountry] = useState<AutoSuggesValue>(null);
  const key = process.env.NEXT_PUBLIC_AUTOSUGGES_KEY;
  if (!key)
    return (
      <p>Set NEXT_PUBLIC_AUTOSUGGES_KEY in .env.local (free key: https://app.autosugges.com).</p>
    );
  return (
    <main style={{ maxWidth: 420, margin: '4rem auto', fontFamily: 'system-ui' }}>
      <AutosuggesProvider lists={{ countries: key }}>
        <AutoSugges list="countries" value={country} onChange={setCountry} />
      </AutosuggesProvider>
    </main>
  );
}
