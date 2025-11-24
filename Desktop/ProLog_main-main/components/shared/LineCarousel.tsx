import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface LineCarouselProps {
  lines?: string[];
  selectedLine?: string;
  onLineSelect?: (line: string) => void;
}

export const LineCarousel: React.FC<LineCarouselProps> = ({
  lines = ['Q', 'R', 'V', 'AA', 'A', 'B', 'C', 'D', 'G', 'H'],
  selectedLine = 'V',
  onLineSelect,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemsPerPage = 5;
  const visibleLines = lines.slice(currentIndex, currentIndex + itemsPerPage);
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (currentIndex + itemsPerPage < lines.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.lineRow}>
        {visibleLines.map((line, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.lineCircle,
              index === 2 ? styles.selectedCircle : styles.normalCircle,
            ]}
            onPress={() => onLineSelect?.(line)}
          >
            <Text
              style={[
                index === 2 ? styles.selectedText : styles.lineText,
              ]}
            >
              {line}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.arrowRow}>
        <TouchableOpacity 
          style={styles.arrowButton}
          onPress={handlePrev} 
          disabled={currentIndex === 0}
        >
          <MaterialCommunityIcons 
            name="chevron-left" 
            size={20} 
            color={currentIndex === 0 ? Colors.grey[300] : Colors.grey[500]} 
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.arrowButton}
          onPress={handleNext} 
          disabled={currentIndex + itemsPerPage >= lines.length}
        >
          <MaterialCommunityIcons 
            name="chevron-right" 
            size={20} 
            color={currentIndex + itemsPerPage >= lines.length ? Colors.grey[300] : Colors.grey[500]} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 353,
    gap: 16,
  },
  lineRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  lineCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Colors.grey[400],
  },
  selectedCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.orange[400],
  },
  lineText: {
    ...Typography.contentRegular,
    color: Colors.white,
  },
  selectedText: {
    ...Typography.title,
    color: Colors.white,
  },
  arrowRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 100,
  },
  arrowButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LineCarousel;
