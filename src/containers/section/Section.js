import React, {Component} from 'react';
import List from '../../components/list'
import './Section.css';

class Section extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
  }

  render() { 

    const {listData} = this.props;
    
    return (

        <div className="Section">
          
          <List data={listData} />

        </div>
      );
      
  }

}

export default Section;
