import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerTextArea from '../../../_components/OwnerTextArea';
import OWNER_TERMS from '../../../_constants/ownerTerms';

function TermsPage() {
  const { informationUse, cancellationRefundPolicy } = OWNER_TERMS;
  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>
        마지막으로 이용 안내문과 취소/환불 규정을 입력 해 주세요 !
      </OwnerTitle>
      <OwnerTextArea
        title='이용 안내'
        placeholder='이용 안내문을 입력 해 주세요'
        defaultValue={informationUse}
      />
      <hr className='w-full' />
      <OwnerTextArea
        title='취소/환불 규정'
        placeholder='취소/환불 규정을 입력 해 주세요'
        defaultValue={cancellationRefundPolicy}
      />
    </div>
  );
}

export default TermsPage;
