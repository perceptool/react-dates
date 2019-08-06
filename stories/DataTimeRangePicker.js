import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';

import DateTimeRangePickerWrapper from '../examples/DateTimeRangePickerWrapper';

const TestInput = props => (
  <div style={{ marginTop: 16 }}>
    <input
      {...props}
      type="text"
      style={{
        height: 48,
        width: 284,
        fontSize: 18,
        fontWeight: 200,
        padding: '12px 16px',
      }}
    />
  </div>
);

class TestWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
    };
  }

  render() {
    const { showDatePicker } = this.state;
    const display = showDatePicker ? 'block' : 'none';
    return (
      <div>
        <button
          type="button"
          onClick={() => this.setState({ showDatePicker: !showDatePicker })}
        >
          Show me!
        </button>

        <div style={{ display }}>
          <DateTimeRangePickerWrapper keepOpenOnDateSelect />
        </div>
      </div>
    );
  }
}

storiesOf('DateTimeRangePicker (DTRP)', module)
  .add('default', () => (
    <DateTimeRangePickerWrapper />
  ))
  .add('3 months', () => (
    <DateTimeRangePickerWrapper numberOfMonths={3} keepOpenOnDateSelect />
  ))
  .add('hidden with display: none', () => (
    <TestWrapper />
  ))
  .add('as part of a form', () => (
    <div>
      <DateTimeRangePickerWrapper keepOpenOnDateSelect />
      <TestInput placeholder="Input 1" />
      <TestInput placeholder="Input 2" />
      <TestInput placeholder="Input 3" />
    </div>
  ))
  .add('3 months in fullscreen', () => {
    const styles = {
      width: '300px',
      height: '600px',
      backgroundColor: '#fff',
      overflowY: 'auto',
      overflowX: 'hidden',
    };

    return (
      <div style={styles}>
        <DateTimeRangePickerWrapper
          keepOpenOnDateSelect
          numberOfMonths={3}
          withPortal
          minimumNights={0}
          initialVisibleMonth={() => moment().subtract(2, 'months')}
          isOutsideRange={() => false}
        />
      </div>
    );
  });
