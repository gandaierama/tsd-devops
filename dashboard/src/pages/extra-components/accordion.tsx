
import { Card, CardBody } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import Link from 'next/link';
import { Actions, ActionType } from '@paljs/ui/Actions';


const Accordions = () => {
  
  const style = { marginBottom: '1.5rem' };

  const items: ActionType[] = [
    {
      content: 'Total de Motoboys disponíveis',
      badge: {
        status: 'Primary',
        title: '4',
        position: 'topStart',
      },
    },
  ];

  const items2: ActionType[] = [
    {
      content: 'Pontos Pedidos do dia',
      badge: {
        status: 'Danger',
        title: '3',
        position: 'topStart',
      },
    },
  ];


  const items3: ActionType[] = [
    {
      content: 'Total de Entregas do dia',
      badge: {
        status: 'Warning',
        title: '3',
        position: 'topStart',
      },
    },
  ];
  return (
    <Layout title="Accordions">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Acompanhamento</header>
            <CardBody>
              <Row>
                <Col style={style} breakPoint={{ xs: 12, lg: 4 }}>
                  Motoboys
                  <Card>
            <CardBody>
              <Actions Link={Link} size="Large" actions={items} />
            </CardBody>
          </Card>
                </Col>
                <Col style={style} breakPoint={{ xs: 12, lg: 4 }}>
                  Pedidos
                  <Card>
            <CardBody>
              <Actions Link={Link} size="Large" actions={items2} />
            </CardBody>
          </Card>
                </Col>
                <Col style={style} breakPoint={{ xs: 12, lg: 4 }}>
                  Clientes
                  <Card>
            <CardBody>
              <Actions Link={Link} size="Large" actions={items3} />
            </CardBody>
          </Card>
                </Col>
           
              </Row>
            </CardBody>
          </Card>
          
        </Col>
      </Row>
    </Layout>
  );
};

export default Accordions;
