# @autosugges/client

AutoSugges: edge autocomplete API + free reference datasets (countries, NAICS, airports, currencies…) behind one React / React Native / HTML component.

[![npm](https://img.shields.io/npm/v/@autosugges/client)](https://www.npmjs.com/package/@autosugges/client)
[![license](https://img.shields.io/npm/l/@autosugges/client)](./LICENSE)

Docs: https://docs.autosugges.com · Datasets: https://autosugges.com

```sh
npm i @autosugges/client
```

Replace `YOUR_PUBLISHABLE_KEY` with a free key from https://app.autosugges.com — one key per list,
locked to your site's origins. Publishable keys are safe in a browser.

## React / Next.js

```tsx
'use client';
import { useState } from 'react';
import { AutoSugges } from '@autosugges/client/react';
import { AutosuggesProvider, type AutoSuggesValue } from '@autosugges/client/react-core';

export function CountryField() {
  const [country, setCountry] = useState<AutoSuggesValue>(null);
  return (
    <AutosuggesProvider lists={{ countries: 'YOUR_PUBLISHABLE_KEY' }}>
      <AutoSugges list="countries" value={country} onChange={setCountry} />
    </AutosuggesProvider>
  );
}
```

`value` is the full selected item (an array for multi-select lists). Behaviour — minimum
characters, debounce, creatable items, multi-select — comes from the list's server policy;
`overrides` can only narrow it.

## Expo / React Native

```tsx
import { AutoSugges } from '@autosugges/client/native-ui';
import { AutosuggesProvider } from '@autosugges/client/react-core';
// same props as web: <AutoSugges list="countries" value={value} onChange={setValue} />
```

Optional peers for the bottom-sheet presentation: `@gorhom/bottom-sheet`,
`react-native-gesture-handler`, `react-native-reanimated`.

## Plain HTML

```html
<script src="https://cdn.jsdelivr.net/npm/@autosugges/client/dist/browser/autosugges.js"></script>
<input
  data-autosugges-key="YOUR_PUBLISHABLE_KEY"
  data-autosugges-base-url="https://runtime.autosugges.com"
  data-autosugges-placeholder="Country"
/>
```

Self-hosted copy with an SRI hash: `https://autosugges.com/sdk/v1/autosugges.js`. Other attributes:
`data-autosugges-theme` (`light`|`dark`), `-locale`, `-label`, `-parent`, `-access-token`. Call
`window.AutoSugges.autoInit()` after injecting markup later.

## Entry points

`.` (client, combobox state machine) · `./react` · `./react-core` · `./native` · `./native-ui` ·
`./browser`. Style it with CSS custom properties (`--as-color-text`, `--as-font-sans`, …); see the docs.

MIT © AKHBaig
