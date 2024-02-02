'use client';
import CircleButton from './CircleButton';
import RoundArrowButton from './RoundArrowButton';
import RoundButton from './RoundButton';

const Button = Object.assign({
  Circle: CircleButton,
  Round: RoundButton,
  RoundArrow: RoundArrowButton,
});

export default Button;
