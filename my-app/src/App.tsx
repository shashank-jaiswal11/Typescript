import * as React from 'react';
import './App.css';
import ResultItem from './ResultItem';

interface Iuser{
  name:string;
}
interface Istate{
  title:string;
  users:Iuser[];

}
 const usersList=[
      {
        name:'Rajnikant'
      },
      {
        name:'vijay'
      },
      {
        name:'Ajith'
      }
            
      ];

class App extends React.Component<{},Istate> {
   public state: Readonly<Istate>= {
      title:'initial value',
      users: usersList

   }
   
public onQuery = (e: React.ChangeEvent<HTMLInputElement>) =>{
  
  const inputvalue=e.target.value;
  const filteredUsers =  usersList.filter((u:Iuser) =>{
    return u.name.includes(inputvalue);

  });

this.setState({
  users:filteredUsers
});

}

  public render() {
    const liItems =  this.state.users.map((u,index) => (<ResultItem title={u.name} key={index}/>));
    return (
      
      <div className="App">
      <input type="text" onChange={this.onQuery}/>
        <ul>
        {
          liItems
        }
       </ul>
      </div>
    );
  }
}

export default App;
