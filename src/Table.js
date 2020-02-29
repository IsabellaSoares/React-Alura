import React, { Component } from 'react';

const Thead = () => {
	return (
		<thead>
			<tr>
				<th>Autores</th>
				<th>Livros</th>
				<th>Preços</th>
				<th>Remover</th>
			</tr>
		</thead>
	);
};

const Tbody = ({ autores }) => {
    const linhas = autores.map((linha, index) => {
        return (
            <tr>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button>Remover</button></td>
            </tr>

        )
    });
    
    return (
		<tbody>
			{ linhas }
		</tbody>
	);
};

export default class Table extends Component {
	render() {
		return (
            <table>
                <Thead />
                <Tbody autores={this.props.autores} />
            </table>
        );
	}
}
