import {
  IconCampInfoTent,
  IconHammer,
  IconPhoneCheck,
  IconSofa,
} from '@/public/svgs';

const OWNER_LINK_BUTTONS = [
  {
    icon: <IconSofa />,
    href: '/owner/room-registration',
    name: '객실 등록',
  },
  {
    icon: <IconHammer />,
    href: '/owner/room-info-edit',
    name: '객실 정보 수정',
  },
  {
    icon: <IconPhoneCheck />,
    href: '/owner/reservation-check',
    name: '예약 확인',
  },
  {
    icon: <IconCampInfoTent />,
    href: '/owner/camping-placeInfo-edit',
    name: '캠핑장 정보 수정',
  },
];

export default OWNER_LINK_BUTTONS;
