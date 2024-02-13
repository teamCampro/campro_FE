import OwnerImageHoverButton from './OwnerImageHoverButton';
import OwnerLinkButton from './OwnerLinkButton';
import OwnerNavigateButton from './OwnerNavigateButton';
import OwnerReservationButton from './OwnerReservationButton';
import OwnerSelectButton from './OwnerSelectButton';

const OwnerButton = Object.assign({
  ImageHover: OwnerImageHoverButton,
  Link: OwnerLinkButton,
  Navigate: OwnerNavigateButton,
  Select: OwnerSelectButton,
  Reservation: OwnerReservationButton,
});

export default OwnerButton;
