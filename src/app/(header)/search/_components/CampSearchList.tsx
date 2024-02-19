import CampPlaceItem from '../../../(header&footer)/_components/CampPlaceItem';

type CampZone = {
  id: number;
  name: string;
  displayAddress: string;
  campImage: string;
  minimumAmount: number;
  keyword: string;
};

function CampSearchList({
  campPlaces,
  gridColumns,
  currentPage,
}: {
  campPlaces: CampZone[];
  gridColumns: string;
  currentPage: number;
}) {
  return (
    <ul
      className={`${gridColumns} grid w-full auto-rows-auto gap-16pxr gap-y-24pxr mobile:gap-y-16pxr mobile411:grid-cols-1-col-288 mobile725:grid-cols-2-col-184 tablet:gap-x-12pxr tablet:gap-y-24pxr mobile767:grid-cols-2-col-184 tablet1199:grid-cols-2-col-184`}
    >
      {campPlaces
        ?.slice(18 * (currentPage - 1), 18 * currentPage)
        .map(
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
