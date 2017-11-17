import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Notification from '../Containers/Notification'
import TutorThread from '../Containers/TutorThread'
import HomeTutor from '../Containers/HomeTutor'
import Profile from '../Containers/Profile'
import CreateThread from '../Containers/CreateThread'
import BidDetail from '../Containers/BidDetail'
import StudentThread from '../Containers/StudentThread'
import HomeStudent from '../Containers/HomeStudent'
import EmptyStateScreen from '../Containers/EmptyStateScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// header component
import LeftHeader from '../Components/LeftHeader'
import RightHeader from '../Components/RightHeader'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Drawer from '../Components/Drawer'

const TutorNav = StackNavigator({
  HomeTutor: { screen: HomeTutor },
  NotificationTutor: { 
    screen: Notification,
    navigationOptions: ({navigation}) => ({
      //headerStyle: styles.headerBackOnly,
      headerLeft: (
        <LeftHeader
          background='dark'
          icon='arrow-back'
          title='Notifications'
          onPress={() => navigation.goBack(null)}
        />
      ),
      headerRight: null
    })
  },
  TutorThread: { 
    screen: TutorThread,
    navigationOptions: ({navigation}) => ({
      headerStyle: styles.headerBackOnly,
      headerLeft: (
        <LeftHeader
          background='light'
          icon='arrow-back'
          onPress={() => navigation.goBack(null)}
        />
      )
    })
  },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'HomeTutor',
  navigationOptions: ({navigation}) => ({
    headerStyle: styles.header,
    headerLeft: (
      <LeftHeader 
        background='dark'
        title='Tutor home'
        icon='dehaze'
        onPress={() => navigation.navigate('DrawerOpen')}
      />
    ),
    headerRight: (
      <RightHeader 
        onPress={() => navigation.navigate('NotificationTutor')}
      />
    )

  })
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Notification: { 
    screen: Notification,
    navigationOptions: ({navigation}) => ({
      //headerStyle: styles.headerBackOnly,
      headerLeft: (
        <LeftHeader
          background='dark'
          icon='arrow-back'
          title='Notifications'
          onPress={() => navigation.goBack(null)}
        />
      ),
      headerRight: null
    })
  },
  CreateThread: { 
    screen: CreateThread,
    navigationOptions: ({navigation}) => ({
      headerStyle: styles.headerBackOnly,
      headerLeft: (
        <LeftHeader
          background='light'
          icon='close'
          onPress={() => navigation.goBack(null)}
        />
      )
    })
  },
  BidDetail: { 
    screen: BidDetail,
    navigationOptions: ({navigation}) => ({
      headerStyle: styles.headerBackOnly,
      headerLeft: (
        <LeftHeader
          background='light'
          icon='arrow-back'
          onPress={() => navigation.goBack(null)}
        />
      )
    })
  },
  StudentThread: { 
    screen: StudentThread,
    navigationOptions: ({navigation}) => ({
      headerStyle: styles.headerBackOnly,
      headerLeft: (
        <LeftHeader
          background='light'
          icon='arrow-back'
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
  navigationOptions: ({navigation}) => ({
    gesturesEnabled: false,
    headerStyle: styles.header,
    headerLeft: (
      <LeftHeader 
        background='dark'
        title='Student home'
        icon='dehaze'
        onPress={() => navigation.navigate('DrawerOpen')}
      />
    ),
    headerRight: (
      <RightHeader 
        onPress={() => navigation.navigate('Notification')}
      />
    )
  })
})

const DrawerNav = DrawerNavigator({
  Student: { 
    screen: PrimaryNav,
    navigationOptions: () => ({
      drawerIcon: () => (
        <Icon name="person" color="#4e4e4e" size={24} />
      ),
    })
  },
  Tutor: { 
    screen: TutorNav,
    navigationOptions: () => ({
      drawerIcon: () => (
        <Icon name="school" color="#4e4e4e" size={24} />
      ),
    })
  },
}, {
  navigationOptions: {
    drawerLockMode: 'locked-closed'
  }
})

export default DrawerNav
