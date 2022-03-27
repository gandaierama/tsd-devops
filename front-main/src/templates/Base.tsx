import React from "react";
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Text1 } from './Text1';
import { Text2 } from './Text2';
import { Text3 } from './Text3';
import { Text4 } from './Text4';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from '../layout/Meta';
import { Logo } from './Logo';
import Link from 'next/link';
import api from "../service/api";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from 'next/head'

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
  * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
  */
};
 
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

  handleEmail(){

  }
  handleSenha(){

  }
  

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  handleChangeColors() {
    const newColors =
      this.state.sectionsColor[0] === "yellow"
        ? [...originalColors]
        : ["yellow", "blue", "white"];
    this.setState({
      sectionsColor: newColors
    });
  }

  handleAddSection() {
    this.setState(state => {
      const { fullpages } = state;
      const { length } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random()
      });

      return {
        fullpages: [...fullpages]
      };
    });
  }

  handleRemoveSection() {
    this.setState(state => {
      const { fullpages } = state;
      const newPages = [...fullpages];
      newPages.pop();

      return { fullpages: newPages };
    });
  }

  moveSectionDown(){
    fullpage_api.moveSectionDown();
  }

  render() {
    const { fullpages } = this.state;




    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
          width: '100vw',
          padding: '0 30px'

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
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Menu />
        <ReactFullpage
          navigation
          pluginWrapper={pluginWrapper}
          onLeave={this.onLeave.bind(this)}
          // scrollHorizontally = {true}
          sectionsColor={this.state.sectionsColor}
          render={comp =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
<div key={1} className="section 2"><Hero /></div>
                    <div key={3} className="section 3"><Text1 /></div>
                    <div key={4} className="section 4"><Text2 /></div>
                    <div key={5} className="section 5"><Text3 /></div>
                    <div key={6} className="section 6"><Text4 /></div>
                    <div key={7} className="section 7"><Footer  /></div> 

              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }
}

export default App;