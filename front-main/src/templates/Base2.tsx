import React from "react";
import { Footer } from './Footer';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from '../layout/Meta';
import { Logo } from './Logo';
import Link from 'next/link';
import api from "../service/api";
import Head from 'next/head'
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const originalColors = ['#f7fafc', '#f7fafc', '#f7fafc', '#f7fafc', '#f7fafc', '#f7fafc', '#f7fafc' ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      emailLogin: "sd",
      passLogin: "sdf",
      fullpages: [
        {
          text: "Section 1"
        },
        {
          text: "Section 2"
        },
        {
          text: 'Section 3',
        }
      ]
    };
  }
  

  onLogin(state) {

    const email = state;
    console.log(email);
    // api
    //   .post("/user",{
    //          email: email,
    //          senha: email
    //   })
    //  .then((response) => {console.log(response.data);})
    //  .catch((err) => {
    //    console.error("ops! ocorreu um erro" + err);
    //  });
    
  }  

  render() {
    const { fullpages } = this.state;

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
          width: '100vw',
          padding: '100px 30px'

        }}
      >

      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="">
            <a>Cadastre-se</a>
          </Link>
        </li>
        <li>
          
            <a  href={this.onLogin(this.state.emailLogin)}>Login</a>
     
        </li>
      </NavbarTwoColumns>


      </div>
    );

    return (

      <div className="App">
        <Meta title="Política de Privacidade" description={AppConfig.description} />
        <Menu />
        <div style={{
          width: '100vw',
          padding: '150px 30px',
          textAlign: 'justify'
        }}>

        <h1>Política de privacidade</h1>
        <hr/>
        <p>Na TSD Motoboys Delivery privacidade e segurança são prioridades e por isso nos comprometemos com a transparência do tratamento de dados pessoais dos nossos usuários/clientes.</p>

<p>Desta forma, a presente Política de Privacidade tem por objetivo detalhar a forma de coleta, uso e transferência de informações de clientes ou outras pessoas que acessam ou utilizam nosso site/aplicativo.</p>

<p>Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas informações pessoais nas formas descritas nesta Política, sob as normas da Lei de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições do Código de Defesa do Consumidor (Lei Federal 8.078/1990) e as demais normas do ordenamento jurídico brasileiro aplicáveis.</p>

<p>Assim, TSD Motoboys Delivery, doravante denominada simplesmente como TSD Motoboys, inscrita no CNPJ/MF sob o nº 12.976.796/0001-00, com sede na Av. Onze de Junho, 1074 - Vila Clementino, São Paulo - SP, 04041-004, Brasil, no papel de Controladora de Dados, obriga-se ao disposto na presente Política de Privacidade.</p>

<p></p>

<p>1. Quem deve utilizar nosso site/App?</p>

<p>Nosso site/App só deve ser utilizado por pessoas com mais de 18 (dezoito) anos de idade. Sendo assim, crianças e adolescentes não devem utilizá-lo.</p>

<p></p>

<p>2. Quais dados coletamos sobre o usuário e para qual finalidade?</p>

<p>Nosso site coleta e utiliza alguns dados pessoais de nossos usuários, de forma a viabilizar a prestação de serviços e aprimorar a experiência de uso.</p>

<p></p>

<p>2.1. Dados pessoais fornecidos pelo titular:</p>

<p>Coletamos os seguintes dados pessoais, fornecidos expressa e diretamente pelos usuários, ao utilizar nosso Site/App:</p>

<p></p>

<p>a) Nome completo, se pessoa física;</p>

<p>b) Razão social, se pessoa jurídica;</p>

<p>c) CPF e/ou CNPJ;</p>

<p>d) Número de celular;</p>

<p>e) E-mail;</p>

<p>f) Endereço;</p>

<p>g) Dados de cartão de crédito.</p>

<p></p>

<p>2.2. Em qual momento os dados são coletados:</p>

<p>Os dados pessoais do titular são coletados no momento da realização do cadastrão pelo usuário.</p>

<p></p>

<p>2.3. Qual a finalidade da coleta dos dados pessoais:</p>

<p>A coleta dos dados pessoais do usuário se dá para gerenciamento da conta criada, como também para confirmação da vontade na contratação de nossos serviços.</p>

<p></p>

<p>2.4. Dados pessoais coletados de outras formas:</p>

<p>Informamos que nosso Site/App não coleta outros dados usuários, além daqueles informados expressamente. Todavia, temos a capacidade tecnológica de recolher outras informações técnicas, como o endereço de protocolo de internet do usuário, o sistema operacional do seu telefone ou computador, o tipo de browser e o endereço de websites de referência.</p>

<p></p>

<p>2.5. Dados sensíveis:</p>

<p>Destacamos que nosso Site/App não realiza coleta de dados sensíveis dos usuários, relativos a informações sobre religião, raça, orientação política, orientação sexual, saúde, filiação a sindicato, dados genéticos e dados biométricos.</p>

<p></p>

<p>3. Compartilhamento de dados pessoais com terceiros.</p>

<p>Esclarecemos que não há o compartilhamento de dados pessoais dos usuários com terceiros não autorizados.</p>

<p></p>

<p>Todavia, TSD Motoboys, se resguarda ao direito de compartilhamento com nossos parceiros comerciais, deixando claro que estes recebem seus dados apenas na medida do necessário para a prestação dos serviços contratados e nossos contratos são orientados pelas normas de proteção de dados do ordenamento jurídico brasileiro.</p>

<p></p>

<p>Além disso, os dados pessoais também poderão ser compartilhados por determinação legal ou regulatória, ou, ainda, em cumprimento de determinação judicial ou expedido por outra autoridade pública.</p>

<p></p>

<p>4. Consentimento</p>

<p>É a partir do consentimento do titular que tratamos os seus dados pessoais. O consentimento é a manifestação livre, informada e inequívoca pela qual o titular autoriza a TSD Motoboys a tratar seus dados.</p>

<p></p>

<p>Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados só serão coletados, tratados e armazenados mediante prévio e expresso consentimento.</p>

<p></p>

<p>O consentimento do titular será obtido de forma específica para cada finalidade acima descrita, evidenciando o compromisso de transparência e boa-fé da TSD Motoboys para com seus usuários/clientes, seguindo as regulações legislativas pertinentes.</p>

<p></p>

<p>Ao utilizar os serviços da TSD Motoboys e fornecer seus dados pessoais, o titular está ciente e consentindo com as disposições desta Política de Privacidade, além de conhecer seus direitos e como exercê-los.</p>

<p></p>

<p>A qualquer tempo e sem nenhum custo, o titular poderá revogar seu consentimento.</p>

<p></p>

<p>É importante destacar que a revogação do consentimento para o tratamento dos dados pode implicar a impossibilidade da performance adequada de alguma funcionalidade do site que dependa da operação. Tais consequências serão informadas previamente.</p>

<p></p>

<p>5. Quais são os direitos do titular?</p>

<p>A TSD Motoboys assegura a seus usuários/clientes seus direitos de titular previstos no artigo 18 da Lei Geral de Proteção de Dados. Dessa forma, você pode, de maneira gratuita e a qualquer tempo:</p>

<p></p>

<p>a) Confirmar a existência de tratamento de dados, de maneira simplificada ou em formato claro e completo;</p>

<p>b) Acessar seus dados, podendo solicitá-los em uma cópia legível sob forma impressa ou por meio eletrônico, seguro e idôneo.</p>

<p>c) Corrigir seus dados, ao solicitar a edição, correção ou atualização destes.</p>

<p>d) Limitar seus dados quando desnecessários, excessivos ou tratados em desconformidade com a legislação através da anonimização, bloqueio ou eliminação.</p>

<p>e) Solicitar a portabilidade de seus dados, através de um relatório de dados cadastrais que a TSD Motoboys trata a seu respeito.</p>

<p>f) Eliminar seus dados tratados a partir de seu consentimento, exceto nos casos previstos em lei.</p>

<p>g) Revogar seu consentimento, desautorizando o tratamento de seus dados.</p>

<p>h) Informar-se sobre a possibilidade de não fornecer seu consentimento e sobre as consequências da negativa.</p>

<p></p>

<p>6. Como o titular pode exercer os seus direitos?</p>

<p>Para exercer seus direitos de titular, você deve entrar em contato com a TSD Motoboys através dos seguintes meios disponíveis:</p>

<p></p>

<p>a) E-mail: contato@tsdmotoboys.com.br</p>

<p>b) Telefone:   (11) 5574-0808 </p>

<p>De forma a garantir a sua correta identificação como titular dos dados pessoais objeto da solicitação, é possível que solicitemos documentos ou demais comprovações que possam comprovar sua identidade. Nessa hipótese, você será informado previamente.</p>

<p></p>

<p>7. Como e por quanto tempo os dados do titular serão armazenados?</p>

<p>Os dados pessoais do titular coletados pela TSD Motoboys serão utilizados e armazenados durante o tempo necessário para a prestação do serviço ou para que as finalidades elencadas na presente Política de Privacidade sejam atingidas, considerando os direitos dos titulares dos dados e dos controladores.</p>

<p>De modo geral, os dados serão mantidos enquanto a relação contratual entre o titular e a TSD Motoboys perdurar.</p>

<p></p>

<p>Findado o período de armazenamento dos dados pessoais, estes serão excluídos de nossas bases de dados ou anonimizados, ressalvadas as hipóteses legalmente previstas no artigo 16 Lei Geral de Proteção de Dados, a saber:</p>

<p></p>

<p>a) Cumprimento de obrigação legal ou regulatória pelo controlador;</p>

<p>b) Estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;</p>

<p>c) Transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei; ou</p>

<p>d) Uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.</p>

<p></p>

<p>Isto é, informações pessoais do titular que sejam imprescindíveis para o cumprimento de determinações legais, judiciais e administrativas e/ou para o exercício do direito de defesa em processos judiciais e administrativos serão mantidas, a despeito da exclusão dos demais dados.</p>

<p></p>

<p>O armazenamento de dados coletados pela TSD Motoboys reflete o nosso compromisso com a segurança e privacidade dos seus dados. Empregamos medidas e soluções técnicas de proteção aptas a garantir a confidencialidade, integridade e inviolabilidade dos seus dados. Além disso, também contamos com medidas de segurança apropriadas aos riscos e com controle de acesso às informações armazenadas.</p>

<p></p>

<p>8. O que fazemos para manter os dados do titular seguros?</p>

<p>Para mantermos suas informações pessoais seguras, usamos ferramentas físicas, eletrônicas e gerenciais orientadas para a proteção da sua privacidade.</p>

<p>Aplicamos essas ferramentas levando em consideração a natureza dos dados pessoais coletados, o contexto e a finalidade do tratamento e os riscos que eventuais violações gerariam para os direitos e liberdades do titular dos dados coletados e tratados.</p>

<p></p>

<p>Entre as medidas que adotamos, destacamos as seguintes:</p>

<p></p>

<p>a) Apenas pessoas autorizadas têm acesso a seus dados pessoais;</p>

<p>b) O acesso aos dados pessoais do titular é feito somente após o compromisso de confidencialidade;</p>

<p>c) Os dados pessoais do titular são armazenados em ambiente seguro e idôneo, protegido por senha.</p>

<p></p>

<p>A TSD Motoboys se compromete a adotar as melhores posturas para evitar incidentes de segurança. Contudo, é necessário destacar que nenhuma página virtual é inteiramente segura e livre de riscos. É possível que, apesar de todos os nossos protocolos de segurança, problemas de culpa exclusivamente de terceiros ocorram, como ataques cibernéticos de hackers, ou também em decorrência da negligência ou imprudência do próprio usuário/cliente.</p>

<p></p>

<p>Em caso de incidentes de segurança que possa gerar risco ou dano relevante para o titular ou qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido, em consonância com as disposições da Lei Geral de Proteção de Dados.</p>

<p></p>

<p>9. Cookies ou dados de navegação</p>

<p>A TSD Motoboys faz uso de Cookies, que são arquivos de texto enviados pela plataforma ao seu computador e que nele se armazenam, que contém informações relacionadas à navegação do site. Em suma, os Cookies são utilizados para aprimorar a experiência de uso.</p>

<p></p>

<p>Ao acessar nosso site e consentir com o uso de Cookies, o titular manifesta conhecer e aceitar a utilização de um sistema de coleta de dados de navegação com o uso de Cookies em seu dispositivo.</p>

<p></p>

<p>A TSD Motoboys utiliza os seguintes Cookies: </p>

<p>O titular pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou recusar os Cookies. Todavia, a revogação do consentimento de determinados Cookies pode inviabilizar o funcionamento correto de alguns recursos da plataforma.</p>

<p>Para gerenciar os cookies do navegador, basta fazê-lo diretamente nas configurações do navegador, na área de gestão de Cookies.</p>

<p></p>

<p>10. Alteração desta Política de Privacidade</p>

<p>A atual versão da Política de Privacidade foi formulada e atualizada pela última vez em 19 de Julho de 2021.</p>

<p></p>

<p>Reservamos o direito de modificar essa Política de Privacidade a qualquer tempo, principalmente em função da adequação a eventuais alterações feitas em nosso Site/App ou em âmbito legislativo. Recomendamos que o titular a revise com frequência.</p>

<p></p>

<p>Eventuais alterações entrarão em vigor a partir de sua publicação em nosso Site/App e sempre lhe notificaremos acerca das mudanças ocorridas.</p>

<p></p>

<p>Ao utilizar nossos serviços e fornecer seus dados pessoais após tais modificações, o titular as consente.</p>

<p></p>

<p>11. Responsabilidade</p>

<p>A TSD Motoboys prevê a responsabilidade dos agentes que atuam nos processos de tratamento de dados, em conformidade com os artigos 42 ao 45 da Lei Geral de Proteção de Dados.</p>

<p></p>

<p>Nos comprometemos em manter esta Política de Privacidade atualizada, observando suas disposições e zelando por seu cumprimento. Além disso, também assumimos o compromisso de buscar condições técnicas e organizativas seguramente aptas a proteger todo o processo de tratamento de dados.</p>

<p></p>

<p>Caso a Autoridade Nacional de Proteção de Dados exija a adoção de providências em relação ao tratamento de dados realizado pela Expresso Alves, comprometemo-nos a segui-las.</p>

<p></p>

<p>12. Isenção de responsabilidade</p>

<p>Conforme mencionado no item n° 8, embora adotemos elevados padrões de segurança a fim de evitar incidentes, não há nenhuma página virtual inteiramente livre de riscos. Nesse sentido, TSD Motoboys não se responsabiliza por:</p>

<p></p>

<p>a) Quaisquer consequências decorrentes da negligência, imprudência ou imperícia dos usuários em relação a seus dados individuais. Garantimos e nos responsabilizamos apenas pela segurança dos processos de tratamento de dados e do cumprimento das finalidades descritas no presente instrumento. Destacamos que a responsabilidade em relação à confidencialidade dos dados de acesso é do usuário;</p>

<p>b) Ações maliciosas de terceiros, como ataques de hackers, exceto se comprovada conduta culposa ou deliberada da TSD Motoboys. Destacamos que em caso de incidentes de segurança que possam gerar risco ou dano relevante para o titular ou qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido e cumpriremos as providências necessárias;</p>

<p>c) Inveracidade das informações inseridas pelo usuário/cliente nos registros necessários para a utilização dos serviços da TSD Motoboys. Quaisquer consequências decorrentes de informações falsas ou inseridas de má-fé são de inteiramente responsabilidade do usuário/cliente.</p>

<p></p>

<p>13. Encarregado de Proteção de Dados</p>

<p>Conforme detalhado no item n° 6, a TSD Motoboys disponibiliza os seguintes meios para que você possa entrar em contato conosco para exercer seus direitos de titular.</p>

<p></p>

<p>Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, você pode entrar em contato com o nosso Encarregado de Proteção de Dados Pessoais, através dos seguintes canais:</p>

<p></p>

<p>Roberto</p>

<p>Tel.: (11) 5574-0808</p>

<p>E-mail: contato@tsdmotoboys.com.br</p>
        </div>
      </div>
    );
  }
}

export default App;