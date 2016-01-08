import React, { PropTypes } from 'react';
import moment from 'moment';

import { buildCalendar } from './system';

import Header from './header';
import Day from './day';

import styles from './styles';

export default class DropDown extends React.Component {
  static propTypes = {
    onDatePicked: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.displayName = 'DateTime(DropDown)';

    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.pickADate = this.pickADate.bind(this);
  }

  prevMonth() {
    const { dispatch, actions } = this.props.store;

    dispatch(actions.prevMonth());
  }

  nextMonth() {
    const { dispatch, actions } = this.props.store;

    dispatch(actions.nextMonth());
  }

  pickADate(evt) {
    this.props.onDatePicked(evt);
  }

  // TODO: shrink, split, etc.
  render() {
    const state = this.props.store.getState();
    const { current } = state;

    const value = state.value || current.clone();
    
    if(!this.props.visible) {
      return null;
    }

    const calendar = buildCalendar(current.year(), current.month());

    // TODO: remove?
    const weekDaysTitles = moment.weekdaysShort().map(day =>
      <td key={day} style={styles.weekDayTitle}>
        <b>{day}</b>
      </td>
    );


    const days = (week) => {
      return week.map((day, weekDay) => {
        if(!day) {
          return <td key={weekDay} style={styles.dayCell}></td>;
        }

        return (
          <td key={weekDay} style={styles.dayCell}>
            <Day day={day} value={value} onPick={this.pickADate} />
          </td>
        )
      });
    }

    const calendarRows = calendar.map((week, which) => {
      return (
        <tr key={which}>
          { days(week) }
        </tr>
      )
    })
    
    return (
      <div style={styles.dropdownRoot}>
        <div style={{padding: '5px'}}>
          <Header current={current}
                  prevMonth={this.prevMonth}
                  nextMonth={this.nextMonth} />
          <div>
            <table style={styles.daysTable}>
              <thead style={styles.daysTableHeader}>
                <tr>
                  { weekDaysTitles }
                </tr>
              </thead>
              <tbody style={styles.daysTableBody}>
                { calendarRows }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}