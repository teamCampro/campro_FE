import useMediaQueries from '@/hooks/useMediaQueries';
import CampPlaceItem from '../../../(header&footer)/_components/CampPlaceItem';
import { MapSizeType } from '../page';

type CampZone = {
  id: number;
  name: string;
  displayAddress: string;
  campImage: string;
  minimumAmount: number;
  keyword: string;
};

function CampSearchList({
  mapSize,
  campPlaces,
  gridColumns,
  currentPage,
}: {
  campPlaces: CampZone[];
  gridColumns: string;
  currentPage: number;
  mapSize: MapSizeType;
}) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 1919 })?.mediaQuery
    .matches;
  const isDesktop = typeof window !== 'undefined' ? mobileMediaQuery : true;

  return (
    <ul
      className={`${gridColumns} grid w-full auto-rows-auto gap-16pxr gap-y-24pxr mobile:gap-y-16pxr mobile411:grid-cols-1-col-288 mobile725:grid-cols-2-col-184 tablet:gap-x-12pxr tablet:gap-y-24pxr mobile767:grid-cols-2-col-184 tablet1199:grid-cols-2-col-184`}
    >
      {campPlaces
        ?.slice(
          (mapSize === 'list' && !isDesktop ? 20 : 18) * (currentPage - 1),
          (mapSize === 'list' && !isDesktop ? 20 : 18) * currentPage,
        )
        .map(
          (campPlace, i) =>
            i < (mapSize === 'list' && !isDesktop ? 20 : 18) && (
              <CampPlaceItem
                key={campPlace.id}
                campPlace={campPlace}
                isResponsive
              />
            ),
        )}
    </ul>
  );
}

export default CampSearchList;
