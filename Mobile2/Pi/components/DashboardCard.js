import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardCard({ titulo, valor, cor }) {
  return (
    <View style={[styles.card, { borderLeftColor: cor }]}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 6,
    elevation: 2,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '600',
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 6,
  },
});
