import { formatDate } from './formatDate';
import { SearchParamsType } from '../(header)/search/page';

interface DataType {
  id: number;
  title: string;
  latlng: kakao.maps.LatLng;
  imgUrl: string;
  price: number;
  address: string;
}

function createOverlayElement(
  searchParams: {
    [key: string]: string;
  },
  data: DataType,
) {
  const checkInValue = searchParams.checkIn;
  const checkInDate = checkInValue ? new Date(checkInValue) : new Date();

  const checkOutValue = searchParams.checkOut;
  const checkOutDate = checkOutValue
    ? new Date(checkOutValue)
    : new Date(Date.now() + 1000 * 60 * 60 * 24);

  const newSearchParams = new URLSearchParams({
    checkIn: formatDate(checkInDate),
    checkOut: formatDate(checkOutDate),
    adult: searchParams.adult || '2',
    child: searchParams.child || '0',
    pet: searchParams.pet || '0',
  });

  const createElement = (
    tag: string,
    className: string,
    content = '',
    href = '',
  ): HTMLElement | HTMLAnchorElement => {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = content;
    if (href && tag === 'a') {
      (element as HTMLAnchorElement).href = href;
    }
    return element;
  };

  const createImage = (className: string, src: string): HTMLImageElement => {
    const image = createElement('img', className) as HTMLImageElement;
    image.src = src;
    return image;
  };

  const createOverlayContainer = (className: string): HTMLElement => {
    const container = createElement('div', className);
    return container;
  };

  const createOverlayContent = (data: DataType): HTMLDivElement => {
    const overlayWrapper = createElement(
      'a',
      'overlayWrapper',
      '',
      `/overview/${data.id}?${newSearchParams.toString()}`,
    ) as HTMLDivElement;

    const image = createImage('overlayImage', data.imgUrl);
    overlayWrapper.appendChild(image);

    const overlayContent = createOverlayContainer('overlayContent');
    overlayWrapper.appendChild(overlayContent);

    const overlayInfoContainer = createOverlayContainer('overlayInfoContainer');
    overlayContent.appendChild(overlayInfoContainer);

    const overlayTitle = createElement('h1', 'overlayTitle', data.title);
    overlayInfoContainer.appendChild(overlayTitle);

    const overlayScoreContainer = createOverlayContainer(
      'overlayScoreContainer',
    );
    overlayInfoContainer.appendChild(overlayScoreContainer);

    const overlayScoreImage = createImage(
      'overlayScoreImage',
      '/svgs/score.svg',
    );
    overlayScoreContainer.appendChild(overlayScoreImage);

    const overlayScore = createElement('span', 'overlayScore', '4.8점');
    overlayScoreContainer.appendChild(overlayScore);

    const overlayPriceContainer = createOverlayContainer(
      'overlayPriceContainer',
    );
    overlayContent.appendChild(overlayPriceContainer);

    const formattedPrice = `￦${String(data.price.toLocaleString())}`;
    const overlayPrice = createElement('p', 'overlayPrice', formattedPrice);
    overlayPriceContainer.appendChild(overlayPrice);

    const overlayPriceDescription = createElement(
      'p',
      'overlayPriceDescription',
      '원 부터',
    );
    overlayPriceContainer.appendChild(overlayPriceDescription);

    return overlayWrapper;
  };

  return createOverlayContent(data);
}

export default createOverlayElement;
