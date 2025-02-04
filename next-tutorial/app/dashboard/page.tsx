import Card from '@/components/Card';
import { Suspense } from 'react';
export default async function DashBoardPage() {
  const response = await fetch('http://localhost:3000/api/test');
  const data = await response.json();
  console.log('data', data);

  return (
    <div>
      <Suspense fallback={<div>card1 loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>card2 loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>card3 loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>card4 loading...</div>}>
        <Card />
      </Suspense>
    </div>
  );
}
