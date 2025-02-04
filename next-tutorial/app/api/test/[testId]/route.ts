import { NextResponse } from 'next/server';

// params 는 async 이기 때문에 Promise 로 감싸서 타이핑
type Params = Promise<{ testId: string }>;

export async function POST(request: Request, data: { params: Params }) {
  const userData = request.json();
  // params을 사용할 때 역시 await를 붙여주시면 됩니다.
  const params = await data.params;

  console.log('server user data', userData);
  console.log('server param', params.testId);

  return NextResponse.json({ message: '사용자가 성공적으로 생성되었습니다.' });
}
