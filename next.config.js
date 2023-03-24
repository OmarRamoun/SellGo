const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'SellGo',
        titleDescription: 'an open-source ecommerce platform designed to provide a flexible and customizable solution for online retailers. Built on modern web technologies, it offers a range of features including product catalog management, shopping cart functionality, order processing, and payment gateway integration',
    },
};

module.exports = withPlugins([withImages(), nextSettings]);
