import React from 'react'
import Postulates from '.'

import renderer from 'react-test-renderer';

it ('Postulate render correctly', ()=>{
        const props = {
            cardFlag: "head",
            name: 'Test Name',
            description: 'Description test',
            id: 1
        }
        const component = renderer.create(
            (<Postulates {...props}/>),
        );
        let postulate = component.toJSON();
        const nameNode = component.root.findByType("strong");
        expect(nameNode.children[0]).toBe(props.name);
    
        const srcImage = component.root.findByType("img");
        expect(srcImage.props.className.includes("wiki")).toBe(true);
        // [ 3 ] query for element
        const descriptionNode = component.root.findAllByType("p")[1];
        expect(descriptionNode.props.className.includes("test-head-des")).toBe(true);
        expect(postulate).toMatchSnapshot();

})