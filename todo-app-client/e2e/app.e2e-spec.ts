import { TodoAppClientPage } from './app.po';

describe('todo-app-client App', function() {
  let page: TodoAppClientPage;

  beforeEach(() => {
    page = new TodoAppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
