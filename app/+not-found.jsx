import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Не найдено' }} />
      <View style={styles.container}>
            <Text style={styles.text}>Страница не найдена</Text>
            <Text>К сожалению, такой страницы не существует.</Text>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'red',
      marginBottom: 10,
  },
});