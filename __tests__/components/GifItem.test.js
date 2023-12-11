import { render } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe ('GifItem', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    it('Match with snapshot', () => {
        // Need to provide title and url because the propTypes required
        const { container } = render( <GifItem title={title} url={url}/> )
        expect( container ).toMatchSnapshot();
    });

    it ('Show image with URL', () => {
        render( <GifItem title={title} url={url}/> );
        //screen.debug(); // To show content
        
        // Form 1 to evaluate
        /* expect( screen.getByRole('img').src).toBe(url);
        expect( screen.getByRole('img').alt).toBe(title); */

        // Form 1 to evaluate
        const { src, alt }= screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    it ('Show text in the component', () => {
        render( <GifItem title={title} url={url}/> );
        expect( screen.getByText(title)).toBeTruthy();
    });
});