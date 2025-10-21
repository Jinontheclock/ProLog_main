import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    useFonts
} from '@expo-google-fonts/roboto';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'Roboto': Roboto_400Regular,
    'Roboto-Medium': Roboto_500Medium,
    'Roboto-Bold': Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="resources/study-resources" options={{ headerShown: false }} />
        <Stack.Screen name="resources/financial-resources" options={{ headerShown: false }} />
        <Stack.Screen name="resources/other-resources" options={{ headerShown: false }} />
        <Stack.Screen name="resources/generate-guide" options={{ headerShown: false }} />
        <Stack.Screen name="resources/eligibility-quiz" options={{ headerShown: false }} />
        <Stack.Screen name="resources/eligibility-quiz-saved" options={{ headerShown: false }} />
        <Stack.Screen name="resources/canada-apprentice-loan" options={{ headerShown: false }} />
        <Stack.Screen name="resources/how-to-build-resume" options={{ headerShown: false }} />
        <Stack.Screen name="resources/series-circuits" options={{ headerShown: false }} />
        <Stack.Screen name="skills/circuit-concepts" options={{ headerShown: false }} />
        <Stack.Screen name="skills/quiz" options={{ headerShown: false }} />
        <Stack.Screen name="skills/quiz-result" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
