(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _system = require('./system');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: beautify, maybe change the anchor(<a />) element

var Day = function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day(props) {
    _classCallCheck(this, Day);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.displayName = 'DateTime(Day)';
    _this.pick = _this.pick.bind(_this);

    _this.dayHovered = _this.dayHovered.bind(_this);
    _this.dayLeft = _this.dayLeft.bind(_this);

    _this.state = {
      hovered: false
    };
    return _this;
  }

  Day.prototype.pick = function pick() {
    this.props.onPick(this.props.day);
  };

  Day.prototype.dayHovered = function dayHovered() {
    this.setState({ hovered: true });
  };

  Day.prototype.dayLeft = function dayLeft() {
    this.setState({ hovered: false });
  };

  Day.prototype.render = function render() {
    var _props = this.props;
    var day = _props.day;
    var value = _props.value;
    var hovered = this.state.hovered;

    var style = _styles2.default.day;

    if (day.format("YYYY-MM-DD") === value.format("YYYY-MM-DD")) {
      style = _extends({}, style, _styles2.default.selectedDay);
    }

    if (day.format("YYYY-MM-DD") === _system.today.format("YYYY-MM-DD")) {
      style = _extends({}, style, _styles2.default.dayToday);
    }

    return _react2.default.createElement(
      'a',
      { href: 'javascript:;',
        style: (0, _system.plug)(hovered, style, _styles2.default.dayHovered),
        onMouseEnter: this.dayHovered,
        onMouseLeave: this.dayLeft,
        onClick: this.pick },
      day.format("DD")
    );
  };

  return Day;
}(_react2.default.Component);

Day.propTypes = {
  pick: _react.PropTypes.func,
  value: _react.PropTypes.object,
  day: _react.PropTypes.object
};
exports.default = Day;

},{"./styles":7,"./system":8,"react":"react"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.displayName = 'App';
    _this.dateChanged = _this.dateChanged.bind(_this);
    return _this;
  }

  App.prototype.dateChanged = function dateChanged(value) {
    console.log(value);
  };

  App.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: { width: '450px' } },
        _react2.default.createElement(_index2.default, { onChange: this.dateChanged })
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '450px' } },
        _react2.default.createElement(_index2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '450px' } },
        _react2.default.createElement(_index2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '450px' } },
        _react2.default.createElement(_index2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '450px' } },
        _react2.default.createElement(_index2.default, null)
      )
    );
  };

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

},{"./index":5,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _system = require('./system');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDown = function (_React$Component) {
  _inherits(DropDown, _React$Component);

  function DropDown(props) {
    _classCallCheck(this, DropDown);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.displayName = 'DateTime(DropDown)';

    _this.prevMonth = _this.prevMonth.bind(_this);
    _this.nextMonth = _this.nextMonth.bind(_this);
    _this.pickADate = _this.pickADate.bind(_this);
    return _this;
  }

  DropDown.prototype.prevMonth = function prevMonth() {
    var _props$store = this.props.store;
    var dispatch = _props$store.dispatch;
    var actions = _props$store.actions;

    dispatch(actions.prevMonth());
  };

  DropDown.prototype.nextMonth = function nextMonth() {
    var _props$store2 = this.props.store;
    var dispatch = _props$store2.dispatch;
    var actions = _props$store2.actions;

    dispatch(actions.nextMonth());
  };

  DropDown.prototype.pickADate = function pickADate(evt) {
    this.props.onDatePicked(evt);
  };

  // TODO: shrink, split, etc.

  DropDown.prototype.render = function render() {
    var _this2 = this;

    var state = this.props.store.getState();
    var current = state.current;

    var value = state.value || current.clone();

    if (!this.props.visible) {
      return null;
    }

    var calendar = (0, _system.buildCalendar)(current.year(), current.month());

    // TODO: remove?
    var weekDaysTitles = _moment2.default.weekdaysShort().map(function (day) {
      return _react2.default.createElement(
        'td',
        { key: day, style: _styles2.default.weekDayTitle },
        _react2.default.createElement(
          'b',
          null,
          day
        )
      );
    });

    var days = function days(week) {
      return week.map(function (day, weekDay) {
        if (!day) {
          return _react2.default.createElement('td', { key: weekDay, style: _styles2.default.dayCell });
        }

        return _react2.default.createElement(
          'td',
          { key: weekDay, style: _styles2.default.dayCell },
          _react2.default.createElement(_day2.default, { day: day, value: value, onPick: _this2.pickADate })
        );
      });
    };

    var calendarRows = calendar.map(function (week, which) {
      return _react2.default.createElement(
        'tr',
        { key: which },
        days(week)
      );
    });

    return _react2.default.createElement(
      'div',
      { style: _styles2.default.dropdownRoot },
      _react2.default.createElement(
        'div',
        { style: { padding: '5px' } },
        _react2.default.createElement(_header2.default, { current: current,
          prevMonth: this.prevMonth,
          nextMonth: this.nextMonth }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'table',
            { style: _styles2.default.daysTable },
            _react2.default.createElement(
              'thead',
              { style: _styles2.default.daysTableHeader },
              _react2.default.createElement(
                'tr',
                null,
                weekDaysTitles
              )
            ),
            _react2.default.createElement(
              'tbody',
              { style: _styles2.default.daysTableBody },
              calendarRows
            )
          )
        )
      )
    );
  };

  return DropDown;
}(_react2.default.Component);

DropDown.propTypes = {
  onDatePicked: _react.PropTypes.func
};
exports.default = DropDown;

},{"./day":1,"./header":4,"./styles":7,"./system":8,"moment":"moment","react":"react"}],4:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.displayName = "DateTime(Header)";

    _this.prevMonth = _this.prevMonth.bind(_this);
    _this.nextMonth = _this.nextMonth.bind(_this);
    return _this;
  }

  Header.prototype.prevMonth = function prevMonth(evt) {
    this.props.prevMonth(evt);
  };

  Header.prototype.nextMonth = function nextMonth(evt) {
    this.props.nextMonth(evt);
  };

  Header.prototype.render = function render() {
    var current = this.props.current;

    return _react2.default.createElement(
      'div',
      { style: _styles2.default.headerHolder },
      _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'button',
                { type: 'button',
                  onClick: this.prevMonth,
                  style: _extends({}, _styles2.default.button, _styles2.default.headerButtonLeft) },
                '<'
              )
            ),
            _react2.default.createElement(
              'td',
              { style: _styles2.default.headerCurrentDayHolder },
              _react2.default.createElement(
                'div',
                { tabIndex: '0', style: _styles2.default.headerCurrentDay },
                current.format("MMMM - YYYY")
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'button',
                { type: 'button',
                  onClick: this.nextMonth,
                  style: _extends({}, _styles2.default.button, _styles2.default.headerButtonLeft) },
                '>'
              )
            )
          )
        )
      )
    );
  };

  return Header;
}(_react2.default.Component);

exports.default = Header;

},{"./styles":7,"react":"react"}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _storeBuilder = require('./storeBuilder');

var _storeBuilder2 = _interopRequireDefault(_storeBuilder);

var _dropDown = require('./dropDown');

var _dropDown2 = _interopRequireDefault(_dropDown);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTime = function (_React$Component) {
  _inherits(DateTime, _React$Component);

  function DateTime(props) {
    _classCallCheck(this, DateTime);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.displayName = 'DateTime';
    _this.inputFocused = _this.inputFocused.bind(_this);
    _this.inputBlured = _this.inputBlured.bind(_this);
    _this.datePicked = _this.datePicked.bind(_this);

    _this.unsubscribe = null;
    return _this;
  }

  DateTime.prototype.componentWillMount = function componentWillMount() {
    // TODO: THIS. IS. SO. WRONG.
    if (this.props.value) {
      var nextValue = _moment2.default.isMoment(this.props.value) ? this.props.value : (0, _moment2.default)(this.props.value);

      this.store = (0, _storeBuilder2.default)(nextValue);
    } else {
      this.store = (0, _storeBuilder2.default)((0, _moment2.default)());
    }

    this._subscribe();
  };

  DateTime.prototype._subscribe = function _subscribe() {
    var _this2 = this;

    if (this.unsubscribe) {
      this.unsubscribe();
    }

    this.unsubscribe = this.store.subscribe(function () {
      _this2.setState(_this2.store.getState());
    });

    this.setState(this.store.getState());
  };

  DateTime.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  };

  DateTime.prototype.inputFocused = function inputFocused() {
    if (this.state.opened) {
      return;
    }
    this.store.dispatch(this.store.actions.open());
  };

  DateTime.prototype.datePicked = function datePicked(value) {
    var _store = this.store;
    var actions = _store.actions;
    var dispatch = _store.dispatch;

    dispatch(actions.setValue(value));
    dispatch(actions.close());
    // TODO: ???
    this.refs.input.blur();

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  DateTime.prototype.inputBlured = function inputBlured(evt, id, originalEvent) {
    var _this3 = this;

    // TODO: this is wrong too, but out of my control.
    // SORRY, WORLD :(
    // https://github.com/facebook/react/issues/2011
    setTimeout(function () {
      var actions = _this3.store.actions;

      var relatedTarget = evt.relatedTarget || originalEvent.relatedTarget || document.activeElement;

      var holderDom = _this3.refs.holder,
          a = relatedTarget,
          b = a && holderDom.contains(a);

      if (!b) {
        _this3.store.dispatch(actions.close());
      } else {
        // TODO: this might cause chaos and destruction in the future, remove.
        _this3.refs.input.focus();
      }
    }, 1);
  };

  DateTime.prototype.render = function render() {
    var _state = this.state;
    var opened = _state.opened;
    var current = _state.current;
    var value = _state.value;

    var displayer = value && value.format("YYYY-MM-DD");

    return _react2.default.createElement(
      'div',
      { style: _styles2.default.root, ref: 'holder' },
      _react2.default.createElement('input', { style: _styles2.default.input,
        type: 'text',
        ref: 'input',
        value: displayer,
        readOnly: true,
        placeholder: this.props.placeholder || "Pick a Date",
        onFocus: this.inputFocused,
        onBlur: this.inputBlured }),
      _react2.default.createElement(
        'div',
        { style: _styles2.default.iconHolder },
        this.props.icon
      ),
      _react2.default.createElement(_dropDown2.default, { visible: opened, store: this.store, key: current.format("YYYY-MM"), onDatePicked: this.datePicked })
    );
  };

  return DateTime;
}(_react2.default.Component);

exports.default = DateTime;

},{"./dropDown":3,"./storeBuilder":6,"./styles":7,"moment":"moment","react":"react"}],6:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _redux = require('redux');

// TODO: WHY?
// this might be overkill
// i did on redux to avoid event emitter, since redux footprint
// isn't too whopping
var storeBuilder = function storeBuilder(current) {
  var initialState = {
    current: current,
    displayer: null,
    opened: false
  };

  var actions = {
    setValue: function setValue(data) {
      return {
        type: 'SET_VALUE',
        data: data
      };
    },
    open: function open() {
      return {
        type: 'OPEN'
      };
    },
    close: function close() {
      return {
        type: 'CLOSE'
      };
    },
    nextMonth: function nextMonth() {
      return {
        type: 'NEXT_MONTH'
      };
    },
    prevMonth: function prevMonth() {
      return {
        type: 'PREV_MONTH'
      };
    }
  };

  var reducer = function reducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];
    var type = action.type;
    var data = action.data;

    switch (type) {
      case 'OPEN':
        return _extends({}, state, {
          opened: true
        });
      case 'CLOSE':
        return _extends({}, state, {
          opened: false
        });
      case 'PREV_MONTH':
        return _extends({}, state, {
          current: state.current.clone().subtract(1, 'month')
        });
      case 'NEXT_MONTH':
        return _extends({}, state, {
          current: state.current.clone().add(1, 'month')
        });
      case 'SET_VALUE':
        return _extends({}, state, {
          value: data
        });
      default:
        return state;
    }
  };

  var store = (0, _redux.createStore)(reducer);

  return {
    store: store,
    dispatch: store.dispatch.bind(store),
    subscribe: store.subscribe.bind(store),
    getState: store.getState.bind(store),
    actions: actions
  };
};

exports.default = storeBuilder;

},{"redux":"redux"}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var styles = {
  root: {
    fontFamily: 'sans-serif',
    position: 'relative',
    fontSize: '13px'
  },
  input: {
    width: '100%',
    border: '1px solid #ddd',
    padding: '8px',
    borderRadius: '3px'
  },
  button: {},
  dropdownRoot: {
    position: 'absolute',
    zIndex: '2',
    display: 'block',
    marginTop: '5px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    left: '0px',
    width: '292px',
    backgroundColor: 'white' // hardcode yeah
  },
  iconHolder: {
    position: 'absolute',
    right: '7px',
    top: '7px'
  },
  weekDayTitle: {
    textAlign: 'center',
    padding: '3px',
    width: '32px',
    border: '1px solid #ddd',
    borderBottom: '2px solid #ddd'
  },
  dayCell: {
    padding: '0px',
    textAlign: 'center',
    border: '1px solid #ddd'
  },
  day: {
    display: 'block',
    padding: '3px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'rgb(87, 174, 226)'
  },
  dayHovered: {
    textDecoration: 'underline'
  },
  selectedDay: {
    boxShadow: 'inset 0px -2px 0px 0px green'
  },
  dayToday: {
    boxShadow: 'inset 0px -2px 0px 0px blue'
  },
  daysTable: {
    borderCollapse: 'collapse',
    width: '100%'
  },
  headerCurrentDayHolder: {
    width: '100%', textAlign: 'center'
  },
  headerCurrentDay: {},
  headerButtonLeft: {},
  headerHolder: {
    marginBottom: '10px'
  }
};

exports.default = styles;

},{}],8:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;
exports.buildCalendar = exports.plug = exports.newWeek = exports.first = exports.last = exports.today = exports.range = undefined;

var _memoizee = require('memoizee');

var _memoizee2 = _interopRequireDefault(_memoizee);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var range = exports.range = function range(from, to) {
  return Array.apply(null, Array(to)).map(function (_, i) {
    return from + i;
  });
};

var today = exports.today = (0, _moment2.default)();

var last = exports.last = function last(array) {
  return array[array.length - 1];
};
var first = exports.first = function first(array) {
  return array[0];
};

var newWeek = exports.newWeek = function newWeek() {
  return range(0, 7);
};

var plug = exports.plug = function plug(condition, def, overwrite) {
  if (condition) {
    return _extends({}, def, overwrite);
  } else {
    return def;
  }
};

// TODO: beautify
var buildCalendar = exports.buildCalendar = (0, _memoizee2.default)(function (year, month) {
  var anchor = (0, _moment2.default)([year, month, 1]);

  var daysInMonth = anchor.daysInMonth();

  var days = range(1, daysInMonth).map(function (x) {
    return (0, _moment2.default)([year, month, x]);
  });

  var firstDay = first(days),
      lastDay = last(days);

  // TODO: verify
  // added 1 plus week that may be removed after calendar build
  // to avoid weird calculations and quantic formulaes
  var weeksInMonth = Math.ceil((lastDay.date() - firstDay.date()) / 7) + 1;

  // TODO: WHAT I'M DOING???
  // the filter is because of the possible last empty week.
  return range(0, weeksInMonth).map(function (x) {
    return newWeek();
  }).map(function (week) {
    return week.map(function (n) {
      var nextDay = first(days);

      if (!nextDay) {
        return null;
      }

      if (n === nextDay.day()) {
        return days.shift();
      } else {
        return null;
      }
    });
  }).filter(function (w) {
    return w.reduce(function (r, x) {
      return r || !!x;
    }, false);
  });
});

},{"memoizee":"memoizee","moment":"moment"}]},{},[2]);
