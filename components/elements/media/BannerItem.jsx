import React from 'react';
import Link from 'next/link';
import { baseUrl } from '../../../repositories/Repository';

const BannerItem = ({ source }) => {
    if (source) {
        return (
            <Link href="/shop">
                <a
                    className="ps-banner-item--default bg--cover"
                    style={{
                        backgroundImage: `url('${baseUrl}${source.image.url}')`,
                    }}>
                    {/*<img src={`${baseUrl}${source.image.url}`} alt="sellgo" />*/}
                </a>
            </Link>
        );
    } else {
        return (
            <Link href="/shop">
                <a>
                    <a className="ps-collection">
                        <img src="/static/img/not-found.jpg" alt="sellgo" />
                    </a>
                </a>
            </Link>
        );
    }
};

export default BannerItem;
