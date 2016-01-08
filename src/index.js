import React from 'react';

import moment from 'moment';

import storeBuilder from './storeBuilder';

import DropDown from './dropDown';

import styles from './styles';

class DateTime extends React.Component {
  constructor(props) {
    super(props);

    this.displayName = 'DateTime';
    this.inputFocused = this.inputFocused.bind(this);
    this.inputBlured = this.inputBlured.bind(this);
    this.datePicked = this.datePicked.bind(this);

    this.unsubscribe = null;
  }
  
  componentWillMount() {
    // TODO: THIS. IS. SO. WRONG.
    if(this.props.value) {
      const nextValue =
        moment.isMoment(this.props.value)
        ? this.props.value
        : moment(this.props.value)

      this.store = storeBuilder(nextValue.clone(), nextValue);
    } else {
      this.store = storeBuilder(moment());
    }

    

    this._subscribe();
  }
  
  _subscribe() {
    if(this.unsubscribe) {
      this.unsubscribe();
    }

    this.unsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState());
    });

    this.setState(this.store.getState());
  }

  componentWillUnmount() {
    if(this.unsubscribe) {
      this.unsubscribe();
    }
  }
  
  inputFocused() {
    if(this.state.opened) {
      return;
    }
    this.store.dispatch(this.store.actions.open());
  }
  
  datePicked(value) {
    const { actions, dispatch } = this.store;
    dispatch(actions.setValue(value));
    dispatch(actions.close());
    // TODO: ???
    this.refs.input.blur();

    if(this.props.onChange) {
      this.props.onChange(value);
    }
  }

  inputBlured(evt, id, originalEvent) {
    // TODO: this is wrong too, but out of my control.
    // SORRY, WORLD :(
    // https://github.com/facebook/react/issues/2011
    setTimeout(() => {
      const {actions} = this.store;

      const relatedTarget = evt.relatedTarget ||
        originalEvent.relatedTarget ||
        document.activeElement;

      const holderDom = this.refs.holder,
        a = relatedTarget,
        b = a && holderDom.contains(a);

      if (!b) {
        this.store.dispatch(actions.close());
      } else {
        // TODO: this might cause chaos and destruction in the future, remove.
        this.refs.input.focus();
      }
    }, 1);
  }

  render() {
    const { opened, current, value } = this.state;


    console.log(this.state);

    const displayer = value && value.format("YYYY-MM-DD");

    return (
      <div style={styles.root} ref="holder">
        <input style={styles.input}
               type="text"
               ref="input"
               value={displayer}
               readOnly={true}
               placeholder={this.props.placeholder || "Pick a Date"}
               onFocus={this.inputFocused}
               onBlur={this.inputBlured} />

        <div style={styles.iconHolder}>
          {this.props.icon}          
        </div>
        <DropDown visible={opened} store={this.store} key={current.format("YYYY-MM")} onDatePicked={this.datePicked} />
      </div>
    );
  }
}

export default DateTime;
