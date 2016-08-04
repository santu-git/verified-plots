import { VerifiedplotsUiPage } from './app.po';

describe('verifiedplots-ui App', function() {
  let page: VerifiedplotsUiPage;

  beforeEach(() => {
    page = new VerifiedplotsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
