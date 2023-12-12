import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";

describe ('Test in <GifGrid />', () => {
    const category = 'One Punch';
    it('Showing the Loading message', () => {
        render(<GifGrid category={category}/>);
        //screen.debug();
        expect( screen.getByText('Loading...') ).toBeTruthy();
        expect( screen.getByText( category) );
    });
    it ('Show images loaded by useFetchGifs', () => {
        
    });
});