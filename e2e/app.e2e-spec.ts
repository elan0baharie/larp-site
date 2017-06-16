import { LarpSitePage } from './app.po';

describe('larp-site App', () => {
  let page: LarpSitePage;

  beforeEach(() => {
    page = new LarpSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
