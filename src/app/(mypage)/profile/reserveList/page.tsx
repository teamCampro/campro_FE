import ReserveList from '../_components/ReserveList';
//api연결시 차후에 쓸 함수
/* async function getData() { 
  const res = await fetch(
    'http://localhost:3000/data/reserveListMockData.json',
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
} */

export default async function Page() {
  /*  const data = await getData(); */

  return (
    <>
      <ReserveList /* reserveList={data} */ />
    </>
  );
}
