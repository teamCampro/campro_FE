import ReserveList from '../_components/ReserveList';

async function getData() {
  const res = await fetch(
    'http://localhost:3000/data/reserveListMockData.json',
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <ReserveList reserveList={data} />
    </>
  );
}
