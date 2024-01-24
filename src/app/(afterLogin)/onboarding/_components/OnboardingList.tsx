import { OnboardingType } from '../page';
import OnboardingItem from './OnboardingItem';

interface Props {
  mockData: OnboardingType[];
  currentPage: number;
  onClickChoices: () => void;
}

function OnboardingList({ mockData, currentPage, onClickChoices }: Props) {
  return (
    <ul className='flex-center flex-col gap-20pxr'>
      {mockData.slice(currentPage - 1, currentPage).map((value) => (
        <li key={value.id}>
          <h1>{value.question}</h1>
          <div className='flex flex-col'>
            <OnboardingItem items={value} onClickChoices={onClickChoices} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OnboardingList;
