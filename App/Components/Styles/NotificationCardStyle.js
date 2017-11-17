import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: Metrics.screenWidth * 0.045,
    paddingVertical: Metrics.screenHeight * 0.03
  },
  description: {
    paddingLeft: Metrics.screenWidth * 0.05,
    width: Metrics.screenWidth * 0.8
  },
  time: {
    color: Colors.darkGrey,
    opacity: 0.54,
    fontSize: 12
  },
  content: {
    color: Colors.darkGrey,
    fontSize: 14,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  }
})
