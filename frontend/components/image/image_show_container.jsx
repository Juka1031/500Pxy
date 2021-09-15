import { connect } from 'react-redux';
import ImageShow from './image_show';
import { fetchImage } from '../../actions/image_actions';
import { fetchUsers, getUser } from '../../actions/session_actions';
import React from 'react';


class ImageShowContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers()
            .then(()=>{
                this.props.fetchImage(this.props.match.params.imageId)
        })
      
      
    }
  
    render() {
      const { image } = this.props;
      if (!image){
        return null;
      } 

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
        uploader: state.entities.users,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchImage: imageId => dispatch(fetchImage(imageId)),
        fetchUsers: () => dispatch(fetchUsers()),
        getUser: (userId) =>dispatch(getUser(userId))
    }
}

export default connect (mSTP, mDTP)(ImageShowContainer)