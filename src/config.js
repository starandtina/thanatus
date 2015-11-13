/**
 *
 * == Configuration
 * config.js is where you will find the core configuration. This file contains parameter that
 * must be set before running for the first time.
 */
define([
  'settings',
], function (Settings) {
  'use strict';

  /** @scratch /configuration/config.js/2
   *
   * === Parameters
   */
  return new Settings({

    /** @scratch /configuration/config.js/5
     *
     * ==== default_route
     *
     * This is the default landing page when you don't specify a dashboard to load.
     *
     * default_route: 'descriptors/home',
     */
    default_route: '/descriptors/home',
  });
});
