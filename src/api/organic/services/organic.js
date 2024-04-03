'use strict';

/**
 * organic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::organic.organic');
