import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Сообщения</Text>
      <View style={styles.messageContainer}>
        <View style={styles.senderMessage}>
          <Text style={styles.senderText}>Привет, как дела?</Text>
        </View>
        <View style={styles.receiverMessage}>
          <Text style={styles.receiverText}>Привет! Всё отлично, спасибо!</Text>
        </View>
        {/* Добавьте здесь другие сообщения */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageContainer: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  senderMessage: {
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  receiverMessage: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  senderText: {
    fontSize: 16,
  },
  receiverText: {
    fontSize: 16,
  },
});

export default MessagesScreen;
