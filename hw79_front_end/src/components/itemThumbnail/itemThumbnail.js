import React from 'react';
import imageNotAvailable from '../../assets/images/photo5801815967637023005.jpg';
import {apiURL} from "../../constants";

const ItemThumbnail = props => {
    let image;

    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    } else {
        image = imageNotAvailable;
    }

    return <img src={image} className='img_thumbnail' alt='Item'/>
};

export default ItemThumbnail;