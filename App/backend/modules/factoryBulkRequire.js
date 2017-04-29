const appInit = require('../../common/actionFactories/appInit');
const artistAdd = require('../../common/actionFactories/artistAdd');
const artistRemove = require('../../common/actionFactories/artistRemove');
const artistRequest = require('../../common/actionFactories/artistRequest');
const tagAdd = require('../../common/actionFactories/tagAdd');
const tagRemove = require('../../common/actionFactories/tagRemove');
const userAuth = require('../../common/actionFactories/userAuth');

module.exports = {
  appInit,
  artistAdd,
  artistRemove,
  artistRequest,
  tagAdd,
  tagRemove,
  userAuth
};
