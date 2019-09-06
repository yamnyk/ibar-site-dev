let accordion = (function (element) {

    let _getItem = function (elements, className) {
        let element = undefined;
        elements.forEach(function (item) {
            if (item.classList.contains(className)) {
                element = item;
            }
        });
        return element;
    };

    return function () {
        let _mainElement = {},
          _items = {},
          _contents = {};


        let _actionClick = function (e) {
              if (!e.target.classList.contains('accordion-item-header')) {
                  return;
              }
              e.preventDefault();
              let header = e.target,
                item = header.parentElement,
                itemActive = _getItem(_items, 'show');

              if (itemActive === undefined) {
                  item.classList.add('show');
              } else {

                  itemActive.classList.remove('show');

                  if (itemActive !== item) {
                      item.classList.add('show');
                  }
              }
          },
          _setupListeners = function () {

              _mainElement.addEventListener('click', _actionClick);
          };

        return {
            init: function (element = {}) {
                try {
                    _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
                    _items = _mainElement.querySelectorAll('.accordion-item');
                    _setupListeners();
                } catch (e) {

                }
            }
        }

    }
})();

let accordion1 = accordion();
accordion1.init('#accordion');