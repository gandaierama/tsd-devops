import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import Link from 'next/link';

import Auth, { Group } from 'components/Auth';
import Layout from 'Layouts';

export default function Login() {
  const onCheckbox = () => {
    // v will be true or false
  };
  return (
    <Layout title="TvBox">
      <Auth title="TvBox" subTitle="Bem vindo! entre com seu e-mail">
        <form>
          <InputGroup fullWidth>
            <input type="email" placeholder="E-mail" />
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" placeholder="Senha" />
          </InputGroup>
          <Group>
            <Checkbox checked onChange={onCheckbox}>
              Lembrar
            </Checkbox>
            <Link href="/auth/request-password">
              <a>Esqueci a senha</a>
            </Link>
          </Group>
          <Button status="Success" type="button" shape="SemiRound" fullWidth>
            Login
          </Button>
        </form>
   
        <p>
          Não tem conta?{' '}
          <Link href="/auth/register">
            <a>Cadastro</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
}
