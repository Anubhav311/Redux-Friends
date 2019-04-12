import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getData, deleteFriend } from '../actions/index';


class FriendList extends React.Component {
    componentDidMount() {
        this.props.getData()
    }

    deleteFriend = (e) => {
        e.preventDefault()
        this.props.deleteFriend(e.target.id)
    }

    render() {
        return(
            <div>
                {this.props.friends.map(friend => (
                    <div id={friend.id}>
                        <h2>{friend.name}</h2>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        <button id={friend.id} onClick={this.deleteFriend}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        friends: state.friends
    })
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getData, deleteFriend }
    )(FriendList)
  );