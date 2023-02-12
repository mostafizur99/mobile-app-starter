import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Font is loading</Text>;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: 30, backgroundColor: "red", }}>
          <Text>Hello my Mobile App!!</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: spacing[6] }}>
          <Text style={{ fontFamily: typography.bold }}>Welcome to my Mobile app!!</Text>
          <Text style={{ fontFamily: typography.primaryBold }}>This is s sample text</Text>
          <Text style={{ fontFamily: typography.primary }}>This is s sample text</Text>
        </View>
        <TouchableOpacity style={styles.button}
          onPress={() => {
            alert("pressed");
          }}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.green,
    padding: spacing[4],
    marginTop: spacing[5],
    borderRadius: 16,
    marginLeft: 10,
    marginRight: 10,
  },
});
