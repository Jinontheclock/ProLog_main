import { StyleSheet } from 'react-native';
import dimensions from './dimensions';

export const CommonStyles = StyleSheet.create({
  // Base container styles
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
  
  // Header styles
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
  
  // Title styles
  mainTitle: {
    fontSize: 50,
    fontWeight: 'normal',
    color: '#2C2C2C',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  
  // Card styles
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  
  // Button styles
  primaryButton: {
    backgroundColor: '#2C2C2C',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Filter button styles
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  filterText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C2C2C',
  },
  
  // Section styles
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
