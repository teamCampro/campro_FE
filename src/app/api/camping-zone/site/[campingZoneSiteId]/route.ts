import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../../libs/mysql';

export const GET = async (
  req: NextRequest,
  { params }: { params: { campingZoneSiteId: string } },
) => {
  try {
    const db = await pool.getConnection();

    const { campingZoneSiteId } = params;

    const query = `
    SELECT cz.name, cz.address, cz.tel, cz.plan_image planImage, czs.parent_site_name parentSiteName, czs.child_site_name childSiteName, 
        czs.max_people maxPeople, czs.price, czs.site_image siteImage
      FROM camping_zone_site czs
     INNER JOIN camping_zone cz ON cz.id = czs.camping_zone_id
     WHERE czs.id = ?;`;

    const [row] = await db.execute(query, [campingZoneSiteId]);

    const selectAdditionalOptionsQuery = `SELECT option_name optionName, price
                                            FROM camping_zone_site_additional_option
                                           WHERE camping_zone_site_id = ?
                                           ORDER BY option_order;`;

    const [additionalOptions] = await db.execute(selectAdditionalOptionsQuery, [
      campingZoneSiteId,
    ]);

    let campingZoneSiteDetail: any = row;

    const result = {
      name: campingZoneSiteDetail[0].name,
      address: campingZoneSiteDetail[0].address,
      tel: campingZoneSiteDetail[0].tel,
      parentSiteName: campingZoneSiteDetail[0].parentSiteName,
      childSiteName: campingZoneSiteDetail[0].childSiteName,
      maxPeople: campingZoneSiteDetail[0].maxPeople,
      price: campingZoneSiteDetail[0].price,
      planImage: campingZoneSiteDetail[0].planImage,
      siteImage: campingZoneSiteDetail[0].siteImage,
      additionalOptions,
    };

    db.release();
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
};
