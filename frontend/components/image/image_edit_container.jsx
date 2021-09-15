import React from "react";
import { connect } from "react-redux";
import { fetchImage, deleteImage, updateImage } from "../../actions/image_actions";
import ImageForm from "./image_edit";

class ImageEditForm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchImage(this.props.match.params.imageId);
    }
  
    render() {
      const { currentUserId, formType, image } = this.props;
      if (!image) return null;
      return (
        <ImageForm
            {...this.props}
          />
      );
    }
  }

const mSTP = (state, ownProps) => {
    const image = state.entities.images[ownProps.match.params.imageId];

    
    return {
        formType: "Edit",
        image,
        currentUserId: state.session.id,
    }
}

const mDTP = (dispatch, ownProps) => {
    return{
        fetchImage: () => dispatch(fetchImage(ownProps.match.params.imageId)),
        deleteImage: () => dispatch(deleteImage(ownProps.match.params.imageId)),
        updateImage: (image) => dispatch(updateImage(image))

    }
}

export default connect(mSTP,mDTP)(ImageEditForm)