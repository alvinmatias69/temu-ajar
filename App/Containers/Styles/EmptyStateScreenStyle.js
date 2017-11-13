import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.snow,
    height: Metrics.screenHeight,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  heading: {
    fontSize: Fonts.size.h5,
    color: Colors.darkGrey,
    fontWeight: 'bold',
    paddingBottom: Metrics.screenHeight * 0.025,
    paddingTop: Metrics.screenHeight * 0.267
  },
  description: {
    fontSize: Fonts.size.medium,
    color: Colors.darkGrey,
    textAlign: 'center',
    paddingBottom: Metrics.screenHeight * 0.05,
    marginHorizontal: Metrics.screenWidth * 0.16
  },
  button: {
    width: Metrics.screenWidth * 0.5
  }
})
