import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  card: {
    marginTop: Metrics.screenHeight * 0.025,
    backgroundColor: Colors.snow,
    shadowColor: '#a8a8a8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2 
    },
    shadowRadius: 2,
    shadowOpacity: 0.5
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: Metrics.screenWidth * 0.045,
  },
  head: {
    marginVertical: Metrics.screenWidth * 0.045,
    marginLeft: Metrics.screenWidth * 0.045
  },
  user: {
    fontSize: Fonts.size.regular,
    color: Colors.darkGrey,
    fontWeight: 'bold'
  },
  tagline: {
    fontSize: Fonts.size.medium,
    color: Colors.darkGrey,
    opacity: 0.6
  },
  arrow: {
    backgroundColor: 'rgba(62, 130, 237, 0.2)',
    width: Metrics.screenWidth * 0.09,
    height: Metrics.screenWidth * 0.09,
    borderRadius: Metrics.screenWidth * 0.045,
    marginRight: Metrics.screenWidth * 0.045,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.screenHeight * 0.05
  },
  sectionName: {
    fontSize: Fonts.size.regular,
    color: Colors.darkGrey,
    fontWeight: 'bold'
  },
  seeMore: {
    fontSize: Fonts.size.small,
    color: Colors.darkGrey,
  }
})
