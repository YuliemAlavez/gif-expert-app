import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe ('Test <AddCategory />', () => {
    it('Should be change text in the box', () => {
        render( <AddCategory onNewCategory={ ()=>{} }/>)
        const input = screen.getByRole('textbox'); // Input and we have only one

        fireEvent.input( input, { target: { value: 'Saitama'}} )
        expect( input.value).toBe('Saitama');
        //screen.debug();

    });

    it ('Call onNewCategory if input have text', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue}} );
        fireEvent.submit( form );
        //screen.debug();

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

    });

    it ('Submint form without text', () => {
        const inputValue='';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue}} );
        fireEvent.submit( form );

        //expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        
    });
});