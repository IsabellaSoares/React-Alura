import React, { Fragment, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Table from './Table';
import Form from './Formulario';
import Header from './Header';
import './App.css';
import { AUTORES } from './autores';

function App() {
	const [ autores, setAutores ] = useState(AUTORES);

	function removeAutor(index) {
		setAutores(autores.filter((autor, posicaoAtual) => index !== posicaoAtual));
	};

	function escutadorDeSubmit(autor) {
		setAutores([ ...autores, autor ]);
	};

	return (
		<Fragment>
			<Header />
			<div className="container mb-10">
				<Table autores={autores} removeAutor={removeAutor} />
				<Form escutadorDeSubmit={escutadorDeSubmit} />
			</div>
		</Fragment>
	);
}

export default App;
