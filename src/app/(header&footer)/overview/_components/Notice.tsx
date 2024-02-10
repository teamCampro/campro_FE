import CampSiteBossInfo from './CampSiteBossInfo';
import SectionTitle from './SectionTitle';
import TextInfo from './TextInfo';

interface NoticeProps {
  title: string;
  text: string;
  id?: string;
  isRef?: React.RefObject<HTMLDivElement>;
}

function Notice({ title, text, id, isRef }: NoticeProps) {
  return (
    <div
      className='flex scroll-mt-168pxr flex-col gap-16pxr mobile:px-20pxr'
      id={id}
      ref={isRef}
    >
      <SectionTitle>이용안내</SectionTitle>
      <TextInfo text='campInfo' />
      <SectionTitle>취소/환불 규정</SectionTitle>
      <TextInfo text='cancelRules' />
      <CampSiteBossInfo />
    </div>
  );
}

export default Notice;
