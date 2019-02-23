/*
** See it live at: http://startae.com
*/

particlesJS(
    'js-particles', {
      'particles': {
        'number': {
          'value': 38
        },
        'color': {
          'value': ['#ff223e', '#5d1eb2', '#ff7300']
        },
        'shape': {
          'type': 'circle'
        },
        'opacity': {
          'value': 1,
          'random': false,
          'anim': {
            'enable': false
          }
        },
        'size': {
          'value': 3,
          'random': true,
          'anim': {
            'enable': false,
          }
        },
        'line_linked': {
          'enable': false
        },
        'move': {
          'enable': true,
          'speed': 2,
          'direction': 'none',
          'random': true,
          'straight': false,
          'out_mode': 'out'
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': false
          },
          'onclick': {
            'enable': false
          },
          'resize': true
        }
      },
      'retina_detect': true
  });