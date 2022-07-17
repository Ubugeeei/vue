import { parse } from 'compiler/parser/index'

describe('playground', () => {
  test('', () => {
    const res = parse(
      `<div>hello</div>`,
      {}
    )

    console.log(res)
  })
})
