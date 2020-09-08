import React from 'react';
import Card from '.';
import renderer from 'react-test-renderer';
describe('Card rendering', () => {
    it('Card correctly rendering', () => {
        const props = { 
            cardFlag: false, 
            id: '1',
            name: 'Test Name',
            description: 'Description test', 
            position:1,
        };
        const component = renderer.create(
            (<Card {...props}/>),
        );
        const card = component.toJSON();

        expect(card).toMatchSnapshot();
    })
})