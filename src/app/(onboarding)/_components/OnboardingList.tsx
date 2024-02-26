import Button from '@/components/Button';
import {
  AnswersType,
  ChoiceType,
  OnboardingType,
} from '../onboard/question/page';

interface Props {
  questions: OnboardingType[];
  currentPage: number;
  handleChoice: (
    questionId: number,
    answer: ChoiceType,
    selectionType: 'single' | 'multiple' | 'optional',
  ) => void;
  handlePage: (direction: 'prev' | 'next') => void;
  answers: AnswersType;
}

function OnboardingList({
  questions,
  currentPage,
  handleChoice,
  handlePage,
  answers,
}: Props) {
  return (
    <ul>
      {questions
        .slice(currentPage - 1, currentPage)
        .map(({ id, question, choices, selectionType }) => (
          <li className='flex-center flex-col gap-40pxr' key={id}>
            <h4 className='text-gray900 text-center font-title1-bold mobile:font-title3-semibold'>
              {question}
              <br />
              {selectionType === 'multiple' && '모두 선택해주세요'}
            </h4>
            <div className='flex flex-col gap-16pxr'>
              {choices.map((choice) => (
                <Button.Round
                  key={choice.text}
                  size='lg'
                  custom={`${answers[id].includes(choice) ? 'bg-primary50 ' : ''} hover:font-body1-bold`}
                  onClick={() => {
                    handleChoice(id, choice, selectionType);
                    if (selectionType === 'single') handlePage('next');
                  }}
                >
                  {choice.text}
                </Button.Round>
              ))}
            </div>
          </li>
        ))}
    </ul>
  );
}

export default OnboardingList;
