'use client';

import 'blazing-layout'
import { PageContainer, Bar, Card } from '@/components/index';

export default function Home(): JSX.Element {
  return (
    <PageContainer paddingtop="100px">
      <Bar margintop='20px' sticky={true}>
        <div className='h80px rbc'>
          <div className="w200px cas">

            <h1>Borg UI</h1>
            <p>Resistance Is Futile</p>
          </div>
          <p>ddddd</p>
        </div>
      </Bar>

      <div className='rbc'>
        <Card delay={0.4} margintop='20px'>
          <h1>Card</h1>
          <p>Your offspring shall be like the dust of the earth, and you shall spread abroad to the west and to the east and to the north and to the south, and in you and your offspring shall all the families of the earth be blessed.</p>
        </Card>
        <Card delay={0.5} margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
          <p>This is paragraph.</p>
        </Card>
        <Card delay={0.7} margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
        </Card>
      </div>
      <div className='rbc'>
        <Card delay={0.8} margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
        </Card>
        <Card delay={0.9} margintop='20px'>
          <h1>Card</h1>
          <p>This is paragraph.</p>
        </Card>
      </div>


    </PageContainer >
  );
}
