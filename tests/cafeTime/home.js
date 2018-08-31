import { Selector } from 'testcafe'

fixture `Getting Started`
  .page `http://test.vuestorefront.io`

test('My first test', async t => {
  const menuButton = Selector('.bg-cl-transparent.brdr-none.inline-flex.p15.icon.bg-cl-secondary.pointer')
  const sidebarMenu = Selector('.sidebar-menu')

  await t
    .click(menuButton)
    .expect(sidebarMenu.withAttribute('class', 'active'))
})
