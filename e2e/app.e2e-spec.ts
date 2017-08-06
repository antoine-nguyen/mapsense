import { MapsensePage } from './app.po';

describe('mapsense App', () => {
  let page: MapsensePage;

  beforeEach(() => {
    page = new MapsensePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
