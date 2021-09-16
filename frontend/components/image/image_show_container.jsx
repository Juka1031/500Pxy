import { connect } from 'react-redux';
import ImageShow from './image_show';
import { fetchImage, fetchImages} from '../../actions/image_actions';
import { fetchUsers, getUser } from '../../actions/session_actions';
import React from 'react';


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
        images: Object.values(state.entities.images),
        uploader: state.entities.users,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchImages: () => dispatch(fetchImages()),
        fetchUsers: () => dispatch(fetchUsers()),
        getUser: (userId) =>dispatch(getUser(userId))
    }
}

export default connect (mSTP, mDTP)(ImageShowContainer)