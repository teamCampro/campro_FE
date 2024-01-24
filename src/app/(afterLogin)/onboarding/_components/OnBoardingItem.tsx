import React from 'react';
import { OnboardingType } from '../page';

interface Props {
  items: OnboardingType;
  onClickChoices: () => void;
}

function OnboardingItem({ items, onClickChoices }: Props) {
  return items.choices.map((choice) => (
    <button onClick={onClickChoices} key={choice.id}>
      {choice.text}
    </button>
  ));
}

export default OnboardingItem;
