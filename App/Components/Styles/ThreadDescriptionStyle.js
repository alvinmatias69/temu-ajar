import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: Metrics.screenHeight * 0.4,
    backgroundColor: '#FFF',
    paddingHorizontal: Metrics.screenWidth * 0.045,
    paddingVertical: Metrics.screenHeight * 0.025
  },
  badge: {
    backgroundColor: 'rgba(62, 130, 237, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12.5
  },
  badgeText: {
    color: Colors.lightBlue,
    fontSize: Fonts.size.medium,
  },
  title: {
    color: '#000',
    fontSize: Fonts.size.input,
    fontWeight: 'bold'
  },
  description: {
    color: '#000',
    fontSize: Fonts.size.medium,
    opacity: 0.5
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: Metrics.screenWidth * 0.8
  },
  vertical: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginRight: Metrics.screenWidth * 0.1
  },
  icon: {
    opacity: 0.54,
    marginRight: Metrics.screenWidth * 0.02,
    width: 23,
    height: 23,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionText: {
    color: Colors.darkGrey,
  },
  subtitle: {
    color: Colors.darkGrey,
    fontSize: Fonts.size.small,
    opacity: 0.6
  }
})
