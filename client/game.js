
require.config({
  paths: {
    'jquery': 'libs/js/jquery',
    'config': 'js/game/config'
  }
});

require(['js/game/map']);
require(['js/game/game']);