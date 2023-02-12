import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: 30, backgroundColor: "red", }}>
          <Text>Hello my Mobile App!!</Text>
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
