import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CommentItem extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <Image style={styles.userImage}
        source={{uri:"http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg"}}/>
        <View style={styles.textContainer}>
          <Text style={styles.userName}>this.props.comment.title</Text>    
          <Text style={styles.comment}>this.props.comment.author por qwrqw sadgasg asgasg asgasg asfasf
          asfasf asfaasf asgfasga gsdfgdth ryfjtfyktrytje srvesrber egsrege
          egrsgersge srgerhrhjr6h rth</Text>    
        </View>
      </View>
    );
  }
}

// BookItem.propTypes = {
//   uri: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired
// };

export default CommentItem;
