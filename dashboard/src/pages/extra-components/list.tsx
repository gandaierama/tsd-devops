
import styled from 'styled-components';
import { Card } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import { Button } from '@paljs/ui/Button';

const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding:10px;
  border-bottom: 1px solid #ccc;
`;

const ListPage = () => {

  return (
    <Layout title="List">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card size="Small">
            <header>Lista Pontos</header>
           
         
                <div>
                  <ListRow>
                    <div>Ponto 1<br/>

                    Último acesso: 2502/2022 - 17:45
            
                    </div>
                    <div>
                    <Button status="Primary" style={{marginRight:'10px'}} >
                      Arquivo
                    </Button>
                    <Button status="Danger" style={{marginRight:'10px'}} >
                      Desativar
                    </Button>
                    <Button status="Info" >
                      Editar
                    </Button>
                    </div>
                  </ListRow>

                  <ListRow>
                    <div>Ponto 2<br/>
                    Último acesso: 2502/2022 - 17:45
                    </div>
                    <div>
                    <Button status="Primary" style={{marginRight:'10px'}} >
                      Arquivo
                    </Button>
                    <Button status="Danger" style={{marginRight:'10px'}} >
                      Desativar
                    </Button>
                    <Button status="Info" >
                      Editar
                    </Button>
                    </div>
                  </ListRow>


                  <ListRow>
                    <div>Ponto 3<br/>
                    Último acesso: 2502/2022 - 17:45
                    </div>
                    <div>
                    <Button status="Primary" style={{marginRight:'10px'}} >
                      Arquivo
                    </Button>
                    <Button status="Danger" style={{marginRight:'10px'}} >
                      Desativar
                    </Button>
                    <Button status="Info" >
                      Editar
                    </Button>
                    </div>
                  </ListRow>


                  
                </div>
        
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
export default ListPage;
