import { QUEENSTOWNPage } from './app.po';

describe('queenstown App', () => {
  let page: QUEENSTOWNPage;

  beforeEach(() => {
    page = new QUEENSTOWNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
