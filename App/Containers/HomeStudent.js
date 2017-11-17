import React, { Component } from 'react'
import { 
  ScrollView, 
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Components
import Card from '../Components/Card'

// Styles
import styles from './Styles/HomeStudentStyle'

import Icon from 'react-native-vector-icons/MaterialIcons'

class HomeStudent extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 20}}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('CreateThread')}>
          <View style={styles.card}>
            <View style={styles.head}>
              <Text style={styles.user}>Hello Mat</Text>
              <Text style={styles.tagline}>Want to learn something?</Text>
            </View>

            <View style={styles.arrow}>
              <Icon name='arrow-forward' size={20} color='#3e8aed' />
            </View>
          </View>
        </TouchableHighlight>

        <View style={styles.heading}>
          <Text style={styles.sectionName}>
            Active Class
          </Text>
          <Text style={styles.seeMore}>
            LIHAT LEBIH BANYAK
          </Text>
        </View>

        <Card
          subject="KALKULUS"
          title="Ajarin Kalkulus tentang Integral"
          date="Kamis, 26 Oktober 2017"
          budget="20K - 50K"
          bidder={7}
          onPress={() => this.props.navigation.navigate('StudentThread')}
        />

        <Card
          subject="JAVA"
          title="Bantu Tubes PBO, tentang agregasi, komposisi sama inheritence"
          date="Kamis, 26 Oktober 2017"
          budget="20K - 50K"
          bidder={21}
          onPress={() => this.props.navigation.navigate('StudentThread')}
        />

        <View style={styles.heading}>
          <Text style={styles.sectionName}>
            Late Class
          </Text>
          <Text style={styles.seeMore}>
            LIHAT LEBIH BANYAK
          </Text>
        </View>

        <Card
          subject="PYTHON"
          title="Bantu TA Tentang MatplotLib"
          date="Rabu, 25 Oktober 2017"
          budget="20K - 50K"
          bidder={21}
          onPress={() => this.props.navigation.navigate('StudentThread')}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeStudent)
