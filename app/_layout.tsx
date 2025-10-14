import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

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
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
