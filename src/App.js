import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Table from './Table';
import Form from './Formulario';

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

  escutadorDeSubmit = autor => {
	  this.setState({ autores: [...this.state.autores, autor] });
  }

	render() {
		return (
			<Fragment>
				<Table autores={this.state.autores} removeAutor={this.removeAutor}/>
				<Form escutadorDeSubmit={this.escutadorDeSubmit} />
			</Fragment>
		);
	}
}

export default App;
