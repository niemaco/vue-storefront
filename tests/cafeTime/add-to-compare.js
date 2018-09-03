import { Selector } from 'testcafe'

fixture `Add to compare`
  .page `http://127.0.0.1:3000`

const firstProductLink = Selector('[data-testid=productLink]').nth(0)
const secondProductLink = Selector('[data-testid=productLink]').nth(1)
const addToCompareBtn = Selector('[data-testid=addToCompare]')
const returnBtn = Selector('[data-testid=returnButton]')
const compareIcon = Selector('.compare-icon')
const comparedProduct = Selector('[data-testid="comparedProduct"]')

test('Two products should be added to comparison table', async t => {
  await t
    .navigateTo('/c/jackets-23')
    .click(firstProductLink)
    .click(addToCompareBtn)
    .click(returnBtn)
    .click(secondProductLink)
    .click(addToCompareBtn)
    .click(compareIcon)
    .expect(comparedProduct.count).eql(2)
})
