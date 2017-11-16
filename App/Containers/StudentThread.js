import React, { Component } from 'react'
import { ScrollView, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StudentThreadStyle'

// Component
import ThreadDescription from '../Components/ThreadDescription'
import RatingCard from '../Components/RatingCard'

class StudentThread extends Component {
  keyExtractor = (item, index) => item.id

  renderItem = ({item}) => (
    <RatingCard
      name={item.name}
      star={item.star}
      price={item.price}
    />
  )

  constructor (props) {
    super(props)
    this.state = { 
      bidder: [
        {
          id: '1341344',
          name: 'Arif Sumanggara',
          star: 4,
          price: 40
        },
        {
          id: '1204958',
          name: 'Afini Nur',
          star: 3,
          price: 50
        },
        {
          id: '485763874',
          name: 'Helmi Satria',
          star: 5,
          price: 50
        },
        {
          id: '348593',
          name: 'Kartini Nurfa',
          star: 5,
          price: 50
        },
      ]
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <ThreadDescription 
          subject="KALKULUS"
          title="Ajarin Kalkulus Tentang Integral"
          description="Saya ngga ngerti bagian integral yang lipat dua, sama turunan juga sedikit bingung"
          date="Kamis, 26 Oktober 2017"
          location="Kost Rajawali Jalan Cikupa No. 52 Komplek Mawar, Sukabirus"
          budget="20k - 50k"
        />
        
        <Text style={styles.bidHeader}>4 Calon Pengajar</Text>

        <FlatList
          data={this.state.bidder}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem} 
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentThread)
