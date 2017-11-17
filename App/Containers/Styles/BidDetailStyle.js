import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.snow
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  centerised: {
    flexDirection: 'column',
    alignItems: 'center',
    width: Metrics.screenWidth,
    marginBottom: 32
  },
  name: {
    fontSize: 24,
    //fontWeight: 'bold',
    marginVertical: 14
  },
  description: {
    marginHorizontal: Metrics.screenWidth * 0.045,
    marginBottom: Metrics.screenHeight * 0.05
  },
  baseFont: {
    fontSize: Fonts.size.medium,
    marginVertical: 5
  },
  title: {
    opacity: 0.54
  },
  class: {
    fontWeight: 'bold'
  },
  button: {
    width: Metrics.screenWidth * 0.45
  },
  back: {
    opacity: 0.54,
    fontSize: Fonts.size.medium
  },
  rate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
