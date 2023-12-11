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
});