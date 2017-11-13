import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeStudent from '../Containers/HomeStudent'
import EmptyStateScreen from '../Containers/EmptyStateScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// header component
import LeftHeader from '../Components/LeftHeader'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeStudent: { screen: HomeStudent },
  EmptyStateScreen: { screen: EmptyStateScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'EmptyStateScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerLeft: <LeftHeader />
  }
})

export default PrimaryNav
