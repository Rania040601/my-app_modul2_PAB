import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  // State
  const [count, setCount] = useState(0);

  // Event handler
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    // JSX dimulai di sini
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Props: Mengirim sumber gambar ke komponen Image
        style={styles.logo}
      />
      <Text style={styles.title}>Selamat Datang di Aplikasi React Native</Text>
      <Text style={styles.description}>
        Ini adalah contoh aplikasi sederhana menggunakan React Native.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={incrementCount} // Event: Saat tombol ditekan, panggil fungsi incrementCount
      >
        <Text style={styles.buttonText}>Tekan Saya</Text>
      </TouchableOpacity>
      {/* State: Menampilkan nilai state count */}
      <Text style={styles.counterText}>Jumlah tekanan: {count}</Text>
    </View>
    // JSX berakhir di sini
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  counterText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
