'use client';

import 'blazing-layout'
import { PageContainer, Bar, Card } from '@/components/index';

export default function Home(): JSX.Element {
  return (
    <PageContainer>
      <Bar margintop='20px'>
        <p>dsf</p>
      </Bar>

      <div className='rbc'>
        <Card margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
        </Card>
        <Card margintop='20px'>
          <h1>Card</h1>
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
