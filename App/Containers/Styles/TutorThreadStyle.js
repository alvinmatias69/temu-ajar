import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.snow,
  },
  containerContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: Metrics.screenHeight
  },
  content: {
    paddingHorizontal: Metrics.screenWidth * 0.045,
    width: Metrics.screenWidth
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  formField: {
    marginVertical: 10
  },
  placeholder: {
    fontSize: 12,
    opacity: 0.54
  }
})
