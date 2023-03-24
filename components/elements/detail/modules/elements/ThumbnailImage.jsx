import React from 'react';
import { baseUrl } from '../../../../../repositories/Repository';

const ThumbnailImage = ({ url }) => (
    <img src={`${baseUrl}${url}`} alt="sellgo-image" />
);

export default ThumbnailImage;
