import React from 'react';
import { render } from '@testing-library/react'
import Header from '.';

describe("Header rendering", () => {
    const comp = render(<Header/>)
    it('Header Correct rendering', () => {
        expect(comp.asFragment()).toMatchSnapshot();
    })
});