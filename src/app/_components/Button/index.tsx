'use client';
import CircleButton from './CircleButton';
import MapFloatingButton from './MapFloatingButton';
import RoundArrowButton from './RoundArrowButton';
import RoundButton from './RoundButton';

const Button = Object.assign({
  Circle: CircleButton,
  Round: RoundButton,
  RoundArrow: RoundArrowButton,
  MapFloating: MapFloatingButton,
});

export default Button;
