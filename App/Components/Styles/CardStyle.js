import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  card: {
    marginTop: Metrics.screenHeight * 0.025,
    backgroundColor: Colors.snow,
    shadowColor: '#a8a8a8',
    shadowOffset: {
      width: 0,
      height: 2 
    },
    shadowRadius: 2,
    shadowOpacity: 0.5
  },
  container: {
    margin: Metrics.screenWidth * 0.045,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  subject: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.screenHeight * 0.01675
  },
  nameView: {
    backgroundColor: 'rgba(62, 130, 237, 0.2)',
    paddingHorizontal: Metrics.screenWidth * 0.045,
    paddingVertical : Metrics.screenHeight * 0.0078125,
    borderTopRightRadius: Metrics.screenHeight * 0.034375,
    borderBottomRightRadius: Metrics.screenHeight * 0.034375,
  },
  nameText: {
    fontSize: 10,
    color: Colors.lightBlue
  },
  more: {
    paddingRight: Metrics.screenWidth * 0.045,
    opacity: 0.3
  },
  title: {
    fontSize: Fonts.size.medium,
    color: Colors.darkGrey,
    fontWeight: 'bold'
  },
  date: {
    fontSize: Fonts.size.small,
    color: Colors.darkGrey,
  },
  description: {
    marginTop: Metrics.screenHeight * 0.025,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  descView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: Metrics.screenWidth * 0.065
  },
  descTitle: {
    fontSize: 10,
    color: Colors.darkGrey,
    opacity: 0.6
  },
  budget: {
    color: Colors.darkGrey,
    fontSize: Fonts.size.small,
    fontWeight: 'bold'
  },
  bidder: {
    color: Colors.darkGrey,
    fontSize: Fonts.size.small
  }
})
