import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';
import ToggleButton from '@/components/temperature-toggle';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView>
      <ThemedView style={styles.content}>
        <ThemedText
          type="title"
          style={[styles.title,{
            fontFamily: Fonts.rounded, // Ändra till något custom?
          }]}>
          Settings
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ToggleButton />
      </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
  }
});
