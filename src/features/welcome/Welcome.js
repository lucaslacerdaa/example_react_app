import React, {Component} from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Footer from '../../containers/footer';
import './Welcome.css';

class Welcome extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
  }

  render() { 
    
    const {title, footer_desc, sectionData} = this.props;

    return (
        <div className="Welcome">
          <Header title={title}></Header>
          <Section listData={sectionData}></Section>
          <Footer description={footer_desc}></Footer>
        </div>
      );
      
  }

}

export default Welcome;