import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TemperatureToggle = () => {
  const [unit, setUnit] = useState('celsius');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose your temperature unit:</Text>
      
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            styles.leftButton,
            unit === 'fahrenheit' && styles.activeButton
          ]}
          onPress={() => setUnit('fahrenheit')}
          activeOpacity={0.8}
        >
          <Text style={[
            styles.toggleText,
            unit === 'fahrenheit' && styles.activeText
          ]}>
            Fahrenheit
          </Text>
          <Text style={[
            styles.unitSymbol,
            unit === 'fahrenheit' && styles.activeText
          ]}>
            °F
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            styles.rightButton,
            unit === 'celsius' && styles.activeButton
          ]}
          onPress={() => setUnit('celsius')}
          activeOpacity={0.8}
        >
          <Text style={[
            styles.toggleText,
            unit === 'celsius' && styles.activeText
          ]}>
            Celsius
          </Text>
          <Text style={[
            styles.unitSymbol,
            unit === 'celsius' && styles.activeText
          ]}>
            °C
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultText}>
        Temperature will be displayed in {unit === 'celsius' ? 'Celsius (°C)' : 'Fahrenheit (°F)'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '600',
    color: '#333',
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#666',
    overflow: 'hidden',
    marginBottom: 10,
  },
  toggleButton: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 140,
    backgroundColor: '#f0f0f0',
  },
  leftButton: {
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },
  rightButton: {
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    borderLeftWidth: 2,
    borderLeftColor: '#666',
  },
  activeButton: {
    backgroundColor: '#90EE90',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 4,
  },
  activeText: {
    color: '#000',
  },
  unitSymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
  },
  resultText: {
    fontSize: 14,
    color: '#7f7f7fff',
    fontStyle: 'italic',
    marginTop: 5,
  },
});

export default TemperatureToggle;