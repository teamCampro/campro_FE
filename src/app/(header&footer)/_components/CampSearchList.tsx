import CampPlaceItem from './CampPlaceItem';
import { CampPlaceMockData } from './CampPlaceSection';

function CampSearchList({
  campPlaces,
  isExpanded,
}: {
  campPlaces: CampPlaceMockData[];
  isExpanded: boolean;
}) {
  const gridColumns = isExpanded
    ? ' tablet1002:grid-cols-2-col-340 tablet1002:max-w-777pxr tablet1199:grid-cols-3-col-184 max-w-1132pxr desktop1920:grid-cols-5-col-340 desktop1440:max-w-1132pxr desktop:grid-cols-3-col-340 desktop1440:grid-cols-3-col-340 desktop1920:max-w-1845pxr'
    : 'basis-776pxr max-w-776pxr desktop:grid-cols-2-col-340 mobile:basis-320pxr desktop1440:grid-cols-auto-fill-min-340 desktop1920:grid-cols-3-col-340';

  return (
    <ul
      className={`${gridColumns} pt-16px pb-40px m-auto grid w-full gap-16pxr px-40pxr mobile:p-16pxr mobile411:grid-cols-1-col-288 mobile725:grid-cols-2-col-184 mobile767:grid-cols-2-col-184 tablet1199:grid-cols-2-col-184`}
    >
      {campPlaces.map((campPlace) => (
        <CampPlaceItem key={campPlace.id} campPlace={campPlace} isResponsive />
      ))}
    </ul>
  );
}

export default CampSearchList;
