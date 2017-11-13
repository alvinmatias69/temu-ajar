import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: Metrics.screenWidth * 0.05,
    alignItems: 'center'
  },
  description: {
    fontSize: Fonts.size.h5,
    color: Colors.snow,
    marginLeft: Metrics.screenWidth * 0.09,
  }
})
