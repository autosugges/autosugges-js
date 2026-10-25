import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import {
  AccessibilityInfo,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { AutoSugges } from '@autosugges/client/native-ui';
import { AutosuggesProvider } from '@autosugges/client/react-core';

const primitives = { View, Text, TextInput, Pressable, Modal, ScrollView };
const key = process.env.EXPO_PUBLIC_AUTOSUGGES_KEY;

export default function App() {
  const [country, setCountry] = useState(null);
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1, padding: 24, paddingTop: 64 }}>
      {key ? (
        <AutosuggesProvider lists={{ countries: key }}>
          <AutoSugges
            primitives={primitives}
            label="Country"
            list="countries"
            value={country}
            onChange={setCountry}
            storage={AsyncStorage}
            windowWidth={width}
            announce={AccessibilityInfo.announceForAccessibility}
          />
        </AutosuggesProvider>
      ) : (
        <Text>Set EXPO_PUBLIC_AUTOSUGGES_KEY in .env (free key: https://app.autosugges.com).</Text>
      )}
    </SafeAreaView>
  );
}
