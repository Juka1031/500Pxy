import React from "react";
import { connect } from "react-redux";
import { deleteGallery, fetchGallery, updateGallery } from "../../actions/gallery_action";

import GalleryForm from "./gallery_edit";

class GalleryEditForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchGallery(this.props.match.params.galleryId);
    }
  
    render() {
      const { gallery } = this.props;
      if (!gallery) return null;
      return (
        <GalleryForm
            {...this.props}
          />
      );
    }
  }

const mSTP = (state, ownProps) => {
    const gallery = state.entities.galleries[ownProps.match.params.galleryId];

    
    return {

        gallery,
        currentUserId: state.session.id,
    }
}

const mDTP = (dispatch, ownProps) => {
    return{
        fetchGallery: ()=>dispatch(fetchGallery(ownProps.match.params.galleryId)),
        deleteGallery: ()=>dispatch(deleteGallery(ownProps.match.params.galleryId)),
        updateGallery: (gallery)=>dispatch(updateGallery(gallery))
    }
}

export default connect(mSTP,mDTP)(GalleryEditForm)