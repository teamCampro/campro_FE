interface SiteInfoListProps {
  title: string;
  infos: string[];
}

function SiteInfoList({ title, infos }: SiteInfoListProps) {
  return (
    <div className='flex flex-col gap-12pxr mobile:border-b mobile:border-gray200 mobile:pb-20pxr'>
      <h6 className='text-black font-body1-bold'>{title}</h6>
      <ul className='flex flex-col gap-8pxr'>
        {infos.map((info, i) => (
          <li key={`${info + i}`} className='text-gray500 font-body2-medium'>
            · {info}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SiteInfoList;
