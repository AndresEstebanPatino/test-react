import { render, screen, fireEvent } from '@testing-library/react';
import SearchComponent from '../components/SearchComponent';

beforeEach( () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<SearchComponent/>) 
})

test('Renderizar el título de la tabla', () => {

    const title = screen.getByText(/user table/i);
    expect(title).toBeInTheDocument()
})

test('renderizar el input', () => {
    const inputElement = screen.getByRole('textbox', {name: /search/i} );
    expect(inputElement).toBeInTheDocument()
})

test('renderizar un botón', () => {
    const botonCualquiera = screen.getByRole('button', {name: /boton cualquiera/i});
    expect(botonCualquiera).toBeInTheDocument()
})

test('renderizar tabla', async () => {
    const tableElemtn = screen.getByRole('table', {name: /table-users/i});
    const tableCellElement = await screen.findAllByRole('cell', {name: /cell-name-user/i});

    expect(tableElemtn).toBeInTheDocument()
    expect(tableCellElement).toBeTruthy()
})

test('buscar por palabra clave', async () => {

    const inputElement = screen.getByRole('textbox', {name: /search/i} );

    fireEvent.change(inputElement, {target: {value: "patricia"}})
    const persona = await screen.findByText(/patricia lebsack/i)

    expect(persona).toBeInTheDocument()

})