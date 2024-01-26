import Button from '@/components/Button';
import { OnboardingType, QustionType } from '../onboard/question/page';
import { Fragment } from 'react';

interface Props {
  items: OnboardingType;
  onClickChoices: (text: string, id: number) => void;
  onSubmitOnboard: () => void;
  questionId: number;
  tagState: QustionType;
}

function OnboardingItem({
  items,
  onClickChoices,
  onSubmitOnboard,
  questionId,
  tagState,
}: Props) {
  const handleClickChoices = (id: number, text: string) => {
    onClickChoices(text, id);
    if (id === 5) onSubmitOnboard();
  };

  const selectTagLog = (selectTag: string, questionId: number) => {
    if (tagState[questionId] == selectTag) {
      return true;
    }
    return false;
  };

  return items.choices.map((choice) => (
    <Fragment key={choice.id}>
      <Button.Round
        size='lg'
        custom={`${selectTagLog(choice.text, questionId) ? 'bg-primary50' : ''}`}
        onClick={() => handleClickChoices(questionId, choice.text)}
      >
        {choice.text}
      </Button.Round>
    </Fragment>
  ));
}

export default OnboardingItem;
