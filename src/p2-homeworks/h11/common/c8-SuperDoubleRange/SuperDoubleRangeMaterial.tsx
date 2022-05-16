import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type RangeSliderProps = {
  value1: number
  values: number[]
  setValues: (values: number[]) => void
  setValue1: (values: number ) => void
}

export const DoubleRangeSlider = (props: RangeSliderProps) => {

  const onChangeHandler = (e: Event, newValue: number | number[]) => {
    const values = newValue as number[]
    props.setValues && props.setValues(values);
    props.setValue1 && props.setValue1(values[0]);
  };

  return (
    <Box sx={{ width: 260 }}>
      <Slider
        getAriaLabel={() => 'range'}
        onChange={onChangeHandler}
        valueLabelDisplay='off'
        value={props.values}
      />
    </Box>
  );
}
