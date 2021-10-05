import { connect } from 'react-redux';
import ImageShow from './image_show';
import { fetchImage, fetchImages} from '../../actions/image_actions';
import { fetchUsers, getUser, updateUser2 } from '../../actions/session_actions';
import React from 'react';
import { createFollow, deleteFollow } from '../../actions/follow_actions';


class ImageShowContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers()
            .then(()=>{
                this.props.fetchImages()
        })
      
      
    }
  
    render() {
      const { image } = this.props;
      
      return (
        <ImageShow
            {...this.props}
          />
      );
    }
  }









const mSTP = (state, ownProps) => {

    return {
        image: state.entities.images[ownProps.match.params.imageId],
        images: Object.values(state.entities.images),
        users: state.entities.users,
        currentUserId: state.session.id,
        ownProps
    }
}

const mDTP = (dispatch) => {
    return {
        fetchImages: () => dispatch(fetchImages()),
        fetchUsers: () => dispatch(fetchUsers()),
        getUser: (userId) =>dispatch(getUser(userId)),
        createFollow : (follow) =>dispatch(createFollow(follow)),
        deleteFollow : (follow) =>dispatch(deleteFollow(follow)),
        updateUser: (user)=>dispatch(updateUser2(user)) 

    }
}

export default connect (mSTP, mDTP)(ImageShowContainer)