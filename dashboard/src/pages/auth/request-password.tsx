import React from 'react';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import Link from 'next/link';

import Layout from 'Layouts';
import Auth, { Group } from 'components/Auth';

export default function RequestPassword() {
  return (
    <Layout title="Esqueceu a senha">
      <Auth title="Esqueceu a senha?" subTitle="Entre com seu e-mail para recuperar sua senha">
        <form>
          <InputGroup fullWidth>
            <input type="email" placeholder="Email Address" />
          </InputGroup>
          <Button status="Success" type="button" shape="SemiRound" fullWidth>
            Recuperar a senha
          </Button>
        </form>
        <Group>
          <Link href="/auth/login">
            <a>Voltar para o Login</a>
          </Link>
          <Link href="/auth/register">
            <a>Cadastro</a>
          </Link>
        </Group>
      </Auth>
    </Layout>
  );
}
