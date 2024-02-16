import ReserveInfo from '../../_components/ReserveInfo';

async function getData() {
  const res = await fetch(
    `http://localhost:3000/data/reserveListMockData.json`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Page({ params }: { params: { id: number } }) {
  console.log(params.id);
  const data = await getData();

  return (
    <>
      <ReserveInfo campList={data[params.id - 1]} />
    </>
  );
}

export default Page;
