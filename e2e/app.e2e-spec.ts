import { IgprPage } from './app.po';

describe('igpr App', function() {
  let page: IgprPage;

  beforeEach(() => {
    page = new IgprPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
