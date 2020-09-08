import React from 'react';
import Votes from './';
import renderer from 'react-test-renderer';

describe('Votes rendering', () => {
    it('Votes correctly rendering', () => {
        const props = { id: 1 };
        const component = renderer.create(
            (<Votes {...props}/>),
        );

        const VotesGrid = component.toJSON();
        expect(VotesGrid).toMatchSnapshot();
 
    })
})