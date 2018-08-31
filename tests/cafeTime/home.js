import { Selector } from 'testcafe'

fixture `Getting Started`
  .page `http://127.0.0.1:3000`

test('My first test', async t => {
  const menuButton = Selector('[data-testid=menuButton]')
  const sidebarMenu = Selector('.sidebar-menu')

  await t
    .click(menuButton)
    .expect(sidebarMenu.withAttribute('class', 'active'))
})
