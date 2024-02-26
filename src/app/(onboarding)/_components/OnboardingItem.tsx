import Button from '@/components/Button';
import { Fragment } from 'react';

interface Props {
  choices: string[];
  onClickChoices: (text: string, id: number) => void;
  onSubmitOnboard: () => void;
  questionId: number;
  answers: string[];
}

function OnboardingItem({
  choices,
  onClickChoices,
  onSubmitOnboard,
  questionId,
  answers,
}: Props) {
  const handleClickChoices = (id: number, text: string) => {
    onClickChoices(text, id);
    if (id === 4) onSubmitOnboard();
  };

  return choices.map((choice) => (
    <Fragment key={choice}>
      <Button.Round
        size='lg'
        custom={`${answers.includes(choice) ? 'bg-primary50 ' : ''} hover:font-body1-bold`}
        onClick={() => handleClickChoices(questionId, choice)}
      >
        {choice}
      </Button.Round>
    </Fragment>
  ));
}

export default OnboardingItem;
