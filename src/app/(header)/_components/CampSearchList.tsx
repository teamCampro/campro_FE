import CampPlaceItem from '../../(header&footer)/_components/CampPlaceItem';
import { CampPlaceType } from '../../_utils/kakaoMarkerGenerator';

function CampSearchList({
  campPlaces,
  gridColumns,
}: {
  campPlaces: CampPlaceType[];
  gridColumns: string;
}) {
  return (
    <ul
      className={`${gridColumns} grid w-full gap-16pxr gap-y-24pxr mobile:gap-y-16pxr mobile411:grid-cols-1-col-288 mobile725:grid-cols-2-col-184 tablet:gap-y-24pxr mobile767:grid-cols-2-col-184 tablet1199:grid-cols-2-col-184`}
    >
      {campPlaces?.map(
        (campPlace, i) =>
          i < 18 && (
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
