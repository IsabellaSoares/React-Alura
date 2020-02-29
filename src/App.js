import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
	state = {
		autores: [
			{
				nome: 'Paulo',
				livro: 'React',
				preco: '1000'
			},
			{
				nome: 'Daniel',
				livro: 'Java',
				preco: '99'
			},
			{
				nome: 'Marcos',
				livro: 'Design',
				preco: '150'
			},
			{
				nome: 'Bruno',
				livro: 'DevOps',
				preco: '100'
			}
		]
  };
  
  removeAutor = (index) => {
    this.setState({
      autores: this.state.autores.filter((autor, posicaoAtual) => index !== posicaoAtual)
    });
  }

	render() {
		return (
			<div className="App">
				<Table autores={this.state.autores} removeAutor={this.removeAutor}/>
			</div>
		);
	}
}

export default App;
