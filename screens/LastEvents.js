import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class LastEvents extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>LastEvents Screen</Text>
        { this.props.lastWalks.map(event => (
          <Text key={event.eventId}>
            Finished Date: {event.endTime} Participant: {event.participants}
          </Text>
        ))
      }
        <Button
          title="Earlier walk"
          onPress={() => this.props.navigation.navigate('FinishedEventDetail')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userInfo,
  lastWalks: state.user.lastWalks,
});

LastEvents.propTypes = {
  lastWalks: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.objectOf(PropTypes.any),
  ])).isRequired,
};

export default connect(mapStateToProps)(LastEvents);
