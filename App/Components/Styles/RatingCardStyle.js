import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.snow,
    shadowColor: '#a8a8a8',
    shadowOffset: {
      width: 0,
      height: 2 
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    marginHorizontal: Metrics.screenWidth * 0.045,
    marginTop: Metrics.screenHeight * 0.015,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  avatar: {
    marginRight: Metrics.screenWidth * 0.045
  },
  bidder: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: Metrics.screenWidth * 0.4,
    marginRight: Metrics.screenWidth * 0.045
  },
  name: {
    color: Colors.darkGrey,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold'
  },
  price: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  priceTitle: {
    color: Colors.darkGrey,
    opacity: 0.6,
    fontSize: 10
  },
  priceValue: {
    color: Colors.darkGrey,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold'
  },
  rate: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
