import React from 'react';
import { render } from ' @testing-library/react-native';
import CardItem from '../../../components/Carditem/';

describe('components/CardItem', () => {
    it('Renderiza o componente com a Imagem, ID e Nome do Pokemon', () => {
        const { toJSON } = render(
            <CardItem/>
        )

        console.log(toJSON())
    });
});