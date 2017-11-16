import React from 'react'
import { StackNavigator } from 'react-navigation'
import StudentThread from '../Containers/StudentThread'
import HomeStudent from '../Containers/HomeStudent'
import EmptyStateScreen from '../Containers/EmptyStateScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// header component
import LeftHeader from '../Components/LeftHeader'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  StudentThread: { 
    screen: StudentThread,
    navigationOptions: ({navigation}) => ({
      headerStyle: styles.headerBackOnly,
      headerLeft: (
        <LeftHeader
          background='light'
          icon='chevron-left'
          onPress={() => navigation.goBack(null)}
        />
      )
    })
  },
  HomeStudent: { screen: HomeStudent },
  EmptyStateScreen: { screen: EmptyStateScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'HomeStudent',
  navigationOptions: {
    headerStyle: styles.header,
    headerLeft: (
      <LeftHeader 
        background='dark'
        title='home'
        icon='bars'
      />
    )
  }
})

export default PrimaryNav
