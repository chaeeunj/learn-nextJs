'use client';
import { use } from 'react';

// page 역시도 params 부분은 Promise로 감싸줍니다.
type Params = Promise<{ testId: string }>;

export default function Page(props: { params: Params }) {
  // client page 에서는 await를 사용할 수 없으므로 react에서 새로 추가된 use hook으로 받아주시면 됩니다.
  const { testId } = use(props.params);

  const handleSubmit = async (e: React.FormEvent) => {
    const response = await fetch('/api/test/1234', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'test name', email: 'test email' }),
    });

    const data = await response.json();

    console.log('response data', data);
  };

  return (
    <div>
      <div>다이나믹 라우트 페이지: {testId}</div>
      <button type="submit" onClick={handleSubmit}>
        전송
      </button>
    </div>
  );
}
