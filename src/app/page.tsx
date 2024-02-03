'use client';

import 'blazing-layout'
import { PageContainer, Bar, Card } from '@/components/index';

export default function Home(): JSX.Element {
  return (
    <PageContainer paddingtop="100px">
      <Bar margintop='20px' sticky={true}>
        <div className='rbc'>
          <p>aaaaa</p>
          <p>ccccc</p>
          <p>ddddd</p>
        </div>
      </Bar>

      <div className='rbc'>
        <Card margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
        </Card>
        <Card margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
        </Card>
        <Card margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
        </Card>
      </div>
      <div className='rbc'>
        <Card margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
        </Card>
        <Card margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
        </Card>
      </div>


    </PageContainer >
  );
}
