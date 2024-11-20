import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.cardImg}
          source={require('../../assets/profile.jpg')}
        />
        <Text style={styles.cardTitle}>Василина Мирян</Text>
        <Text style={styles.cardText}>Александр Дмитриевич, поставьте 5, пожалуйста</Text>
      </View>
    </View>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'hsl(0, 0%, 80%)',
    borderRadius: 10,
    padding: 20,
    maxWidth: 300,
    backgroundColor: '#ffffff',
  },
  cardImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: '500',
    fontSize: 20,
    color: 'hsl(0, 0%, 20%)',
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    color: 'hsl(0, 0%, 30%)',
    textAlign: 'center',
  },
});