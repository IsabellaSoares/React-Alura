import React, { Component } from 'react';

export default class Formulario extends Component {
	constructor(props) {
		super(props);

		this.stateInicial = {
			nome: '',
			livro: '',
			preco: ''
		};

		this.state = this.stateInicial;
	}

	escutadorDeInput = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	submitForm = () => {
		this.props.escutadorDeSubmit(this.state);
		this.setState(this.stateInicial);
	};

	render() {
		const { nome, livro, preco } = this.state;

		return (
			<form>
				<div className="row">
					<div className="input-field col s4">
						<label htmlFor="nome" className="input-field">Nome</label>
						<input 
							id="nome"
							type="text"
							name="nome"
							value={nome}
							onChange={this.escutadorDeInput}
							className="validate" />
					</div>

					<div className="input-field col s4">
						<label htmlFor="livro" className="input-field">Livro</label>
						<input
							id="livro"
							type="text"
							name="livro"
							value={livro}
							onChange={this.escutadorDeInput}
							className="validate" />
					</div>

					<div className="input-field col s4">
						<label htmlFor="preco" className="input-field">Preço</label>
						<input
							id="preco"
							type="text"
							name="preco"
							value={preco}
							onChange={this.escutadorDeInput}
							className="validate" />
					</div>
				</div>
				<button type="button" className="waves-effect waves-light btn indigo lighten-2" onClick={this.submitForm}>
					Salvar
				</button>
			</form>
		);
	}
}
