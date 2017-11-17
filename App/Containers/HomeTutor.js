import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

import Card from '../Components/Card'
// Styles
import styles from './Styles/HomeTutorStyle'

class HomeTutor extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  state = {
    dataObjects: [
      {
        subject: 'KALKULUS',
        title: 'Ajarin Kalkulus tentang Integral',
        date: 'Kamis, 26 Oktober 2017',
        budget: '20K - 50K',
        bidder: 7
      },
      {
        subject: 'JAVA',
        title: 'Ajarin JAVA tentang RXJava',
        date: 'Kamis, 26 Oktober 2017',
        budget: '50K - 100K',
        bidder: 2
      },
      {
        subject: 'KALKULUS',
        title: 'Mau belajar Kalkulus tentang Dua Lipa',
        date: 'Kamis, 26 Oktober 2017',
        budget: '150K - 200K',
        bidder: 27
      },      
      {
        subject: 'KALKULUS',
        title: 'Mau belajar Kalkulus tentang Dua Lipa',
        date: 'Kamis, 26 Oktober 2017',
        budget: '150K - 200K',
        bidder: 27
      },      
      {
        subject: 'KALKULUS',
        title: 'Mau belajar Kalkulus tentang Dua Lipa',
        date: 'Kamis, 26 Oktober 2017',
        budget: '150K - 200K',
        bidder: 27
      }
    ]
  }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow ({item}) {
    return (
      <View style={styles.wrapper}>
        <Card
          subject={item.subject}
          title={item.title}
          date={item.date}
          budget={item.budget}
          bidder={item.bidder}
          onPress={() => this.props.navigation.navigate('TutorThread')}
        />
      </View>
    )
  }

  constructor (props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTutor)
