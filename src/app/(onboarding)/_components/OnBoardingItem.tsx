import { Button } from '@/components/Button';
import { OnboardingType } from '../onboard/question/page';
import { Fragment } from 'react';

interface Props {
  items: OnboardingType;
  onClickChoices: (text: string) => void;
  onSubmitOnboard: () => void;
  questionId: number;
}

function OnboardingItem({
  items,
  onClickChoices,
  onSubmitOnboard,
  questionId,
}: Props) {
  const handleClickChoices = (id: number, text: string) => {
    onClickChoices(text);
    if (id === 5) onSubmitOnboard();
  };

  return items.choices.map((choice) => (
    <Fragment key={choice.id}>
      <Button.Round
        size='lg'
        onClick={() => handleClickChoices(questionId, choice.text)}
      >
        {choice.text}
      </Button.Round>
    </Fragment>
  ));
}

export default OnboardingItem;
