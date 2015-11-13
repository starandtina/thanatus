define({
  'type': 'components/layout/default',
  'children': {
    /*
    'header': {
      'type': 'components/layout/header'
    },*/
    'body': [{
      'type': 'components/sideBar',
      'currentNavId': 1
    }, {
      'type': 'components/home'
    }]
    /*,
    'footer': {
      'type': 'components/layout/footer'
    }*/
  }
});