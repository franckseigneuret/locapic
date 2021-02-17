import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ListItem, Button, Input } from 'react-native-elements';
import { connect } from 'react-redux'
import { EvilIcons } from '@expo/vector-icons';

const ListPOI = (props) => {

  const listPOI = props.poi.map((poi, i) => {
    return (
      <ListItem key={i}>
        <ListItem.Content>
          <ListItem.Title>{poi.title}</ListItem.Title>
          <ListItem.Subtitle>{poi.description}</ListItem.Subtitle>

          <Button
            title="trash"
            icon={
              <EvilIcons name="trash" size={24} color="#fff" />
            }
            iconLeft
            type="solid"
            buttonStyle={{
              backgroundColor: '#da5951'
            }}
            onPress={() => props.onDeletePOI(poi.title)}
          />

        </ListItem.Content>

      </ListItem>
    )
  })
  return (
    <View style={{ flex: 1, padding: 70 }}>
      {listPOI}
    </View>
  )
}

function mapStateToProps(state) {
  // console.log('state == ', state.poi)
  return {
    poi: state.poi,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDeletePOI: function (poi) {
      dispatch({ type: 'deletePOI', poiTitle: poi })
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPOI)