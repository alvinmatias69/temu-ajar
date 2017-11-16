import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  bidHeader: {
    fontSize: Fonts.size.medium,
    fontWeight: 'bold',
    color: Colors.darkGrey,
    marginLeft: Metrics.screenWidth * 0.045,
    marginTop: Metrics.screenHeight * 0.04,
    marginBottom: Metrics.screenHeight * 0.01,
  }
})
