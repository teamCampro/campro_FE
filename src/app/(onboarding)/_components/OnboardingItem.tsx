import Button from '@/components/Button';
import { Fragment } from 'react';
import { OnboardingType, QuestionType } from '../onboard/question/page';

interface Props {
  items: OnboardingType;
  onClickChoices: (text: string, id: number) => void;
  onSubmitOnboard: () => void;
  questionId: number;
  tagState: QuestionType;
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
    if (id === 4) onSubmitOnboard();
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
        custom={`${selectTagLog(choice.text, questionId) ? 'bg-primary50 ' : ''} hover:font-body1-bold`}
        onClick={() => handleClickChoices(questionId, choice.text)}
      >
        {choice.text}
      </Button.Round>
    </Fragment>
  ));
}

export default OnboardingItem;
