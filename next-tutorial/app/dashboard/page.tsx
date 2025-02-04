export default async function DashBoardPage() {
  const response = await fetch('http://localhost:3000/api/test');
  const data = await response.json();
  console.log('data', data);

  return <div>대시보드 페이지</div>;
}
