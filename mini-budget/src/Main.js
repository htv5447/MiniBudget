import React, { Component } from 'react';
import {Table} from 'reactstrap';
import './Main.css';
import Add from './Add';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={data: []}
    }

    updateData = (apiResponse) => {
        this.setState({data: apiResponse})
    }

    fetchData = () => {
        //In package.json add "proxy": "http://localhost:5000" 
        //This will allow redirect to REST api in Flask w/o CORS errors
         fetch('/items')
         .then(
             response => response.json() 
             )//The promise response is returned, then we extract the json data
         .then (jsonOutput => //jsonOutput now has result of the data extraction
                  {
                      this.updateData(jsonOutput)
                    }
              )
      }
    componentDidMount(){
        this.fetchData();
    }

    refreshPage = () =>{
        window.location.reload();
      }

    renderBudget = (data) =>{
        return(
        <tr key={data.id}>
          <td></td>
          <td>{data.items}</td>
          <td>{data.price}</td>
        </tr>)
        
      };
    render(){
        return (
            <div className='m-4'>
                <header className="Budget-header" >MINI BUDGET</header>
                <Table striped condensed hover>
          <thead>
          <tr>
            <th></th>
            <th>Items</th>
            <th>Price</th> 
           
          </tr>
          </thead>
          <tbody>{this.state.data.map(this.renderBudget)}</tbody>
          </Table>
          <Add onClick = {this.refreshPage}/>
            </div>
        )
    }
}


export default Main;