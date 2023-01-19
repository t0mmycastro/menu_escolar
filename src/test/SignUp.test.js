import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import Signup from '../pages/Signup'

test('render form', () => {
    const {getByTestId, getByPlaceholderText} = render(<Signup />)

    const nameLabel = getByPlaceholderText(/Ingresa tu usuario/i)
    expect(nameLabel).toBeInTheDocument()

    const input = getByPlaceholderText(/Ingresa tu usuario/i)
    expect(input).toHaveAttribute('type', 'text')
})

test('boton', () => {
    const {getByPlaceholderText, getByRole} = render(<Signup />)

    const nameInput = getByPlaceholderText(/Ingresa tu usuario/i)
    fireEvent.change(nameInput, {'target': {'value': ''}})
    const btn = getByRole('button', {name: 'Submit'})
    expect(btn).toHaveAttribute('disabled')
})