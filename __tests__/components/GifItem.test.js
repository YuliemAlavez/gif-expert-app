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
});