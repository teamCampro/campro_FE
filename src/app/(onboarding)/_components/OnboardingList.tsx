import { OnboardingType, QuestionType } from '../onboard/question/page';
import OnboardingItem from './OnboardingItem';

interface Props {
  mockData: OnboardingType[];
  currentPage: number;
  onClickChoices: (text: string, id: number) => void;
  onSubmitOnboard: () => void;
  tagState: QuestionType;
}

function OnboardingList({
  mockData,
  currentPage,
  onClickChoices,
  onSubmitOnboard,
  tagState,
}: Props) {
  return (
    <ul>
      {mockData.slice(currentPage - 1, currentPage).map((value) => (
        <li className='flex-center flex-col gap-40pxr' key={value.id}>
          <h4 className='text-gray900 font-title1-bold '>{value.question}</h4>
          <div className='flex flex-col gap-16pxr'>
            <OnboardingItem
              items={value}
              onClickChoices={onClickChoices}
              onSubmitOnboard={onSubmitOnboard}
              questionId={value.id}
              tagState={tagState}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OnboardingList;
