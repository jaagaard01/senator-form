import React, { Component } from 'react';
import Search from './Search'
import Party from './Party'
import State from './State'


class Home extends Component {

state = {
  senators: []
}

getSenators = async () => {
  await fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json') 
  .then(function(response){
    return response.json(); } 
  )
  .then(data => {
    this.setState({senators: data})
  });
}
async componentWillMount(){
  await this.getSenators()
}
  render() {
    return (
      <div>
      <header>
        <h1>Senator Filter</h1>
     </header>
     <main>
     <Party />
     <Search/>
     <State/> 
       <h3>
         Senators! 
       </h3>
     </main>
     <div>
       {this.state.senators.map(senator => {
         return (
           <div key ={senator.name}>
           <li>{senator.name}</li>
           <li>{senator.state_name}</li>
           <li>{senator.party}</li>
           <li>{senator.biography}</li>
           </div>
         )}
       )}
     </div>

        
      </div>
    );
  }
}

export default Home;
