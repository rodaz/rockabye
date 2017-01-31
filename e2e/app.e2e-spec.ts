import { RockabyePage } from './app.po';

describe('rockabye App', function() {
  let page: RockabyePage;

  beforeEach(() => {
    page = new RockabyePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
