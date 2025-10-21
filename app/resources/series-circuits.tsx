import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SeriesCircuitsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol 
              name="chevron.left"
              size={24}
              color="#2C2C2C"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Describe the operating principles of series circuits</Text>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Top Section */}
          <View style={styles.topCard}>
            <Text style={styles.levelText}>Industrial Electrician Level 1</Text>
            <Text style={styles.lineText}>Line A: Apply Circuit Concepts</Text>
            <View style={styles.tagsContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Theory</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>AI Generated</Text>
              </View>
            </View>
            <Text style={styles.mainTitle}>Describe the operating principles of series circuits</Text>
            <View style={styles.actionIcons}>
              <TouchableOpacity style={styles.actionIcon}>
                <IconSymbol name="trash" size={20} color="#2C2C2C" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionIcon}>
                <IconSymbol name="arrow.down.circle" size={20} color="#2C2C2C" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionIcon}>
                <IconSymbol name="paperplane" size={20} color="#2C2C2C" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Summary Section */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.sectionText}>
              A series circuit is a type of electrical circuit where components are connected end-to-end, forming a single path for current flow. In series circuits, the current is the same through all components, while the voltage is divided among them. Key principles include: current conservation (same current flows through all elements), voltage division (total voltage equals sum of individual voltage drops), and resistance addition (total resistance equals sum of individual resistances). Series circuits are fundamental in understanding electrical behavior and are commonly used in applications like Christmas lights, fuses, and certain types of switches.
            </Text>
          </View>

          {/* Definition Section */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>1. Definition of Series Circuits</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Series Circuit:</Text> An electrical circuit where components are connected in a single path, so current flows through each component sequentially.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Current Path:</Text> Only one path exists for current to flow from the power source through all components and back to the source.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Component Connection:</Text> Components are connected end-to-end, with the output of one component connected to the input of the next.
                </Text>
              </View>
            </View>
          </View>

          {/* Current Characteristics Section */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>2. Current Characteristics in Series Circuits</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Same Current:</Text> The current is identical through all components in a series circuit (I₁ = I₂ = I₃ = ... = Iₜₒₜₐₗ).
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Current Conservation:</Text> Current cannot be created or destroyed; it flows continuously through the circuit.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Current Flow:</Text> Current flows from the positive terminal of the power source, through each component, and returns to the negative terminal.
                </Text>
              </View>
            </View>
          </View>

          {/* Voltage Characteristics Section */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>3. Voltage Characteristics in Series Circuits</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Voltage Division:</Text> The total voltage is divided among all components (Vₜₒₜₐₗ = V₁ + V₂ + V₃ + ...).
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Voltage Drop:</Text> Each component experiences a voltage drop proportional to its resistance (V = I × R).
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Kirchhoff's Voltage Law:</Text> The sum of all voltage drops equals the total applied voltage.
                </Text>
              </View>
            </View>
          </View>

          {/* Resistance Characteristics Section */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>4. Resistance Characteristics in Series Circuits</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Total Resistance:</Text> The total resistance equals the sum of all individual resistances (Rₜₒₜₐₗ = R₁ + R₂ + R₃ + ...).
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Resistance Addition:</Text> Adding more resistors in series increases the total resistance.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Current Limitation:</Text> Higher total resistance results in lower current flow (I = V/R).
                </Text>
              </View>
            </View>
          </View>

          {/* Applications Section */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>5. Applications and Examples</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Christmas Lights:</Text> Traditional incandescent Christmas lights are connected in series, so if one bulb burns out, the entire string goes dark.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Fuses:</Text> Fuses are connected in series with the circuit they protect, so all current flows through them.
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={styles.boldText}>Voltage Dividers:</Text> Series circuits are used to create voltage dividers for electronic circuits.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    width: dimensions.constrainedWidth,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: dimensions.constrainedWidth,
    backgroundColor: '#F2F2F2',
  },
  backButton: {
    marginRight: 15,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    flex: 1,
    fontFamily: 'Roboto-Bold',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  topCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  levelText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontFamily: 'Roboto',
  },
  lineText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 12,
    fontFamily: 'Roboto-Bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 16,
    fontFamily: 'Roboto-Medium',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  actionIcon: {
    padding: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 12,
    fontFamily: 'Roboto-Bold',
  },
  sectionText: {
    fontSize: 16,
    color: '#2C2C2C',
    lineHeight: 24,
    fontFamily: 'Roboto',
  },
  bulletList: {
    gap: 12,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: '#2C2C2C',
    marginRight: 8,
    marginTop: 2,
    fontFamily: 'Roboto',
  },
  bulletText: {
    fontSize: 16,
    color: '#2C2C2C',
    lineHeight: 24,
    flex: 1,
    fontFamily: 'Roboto',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
