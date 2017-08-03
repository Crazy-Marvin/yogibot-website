import { YogibotWebsitePage } from './app.po';

describe('yogibot-website App', () => {
  let page: YogibotWebsitePage;

  beforeEach(() => {
    page = new YogibotWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
