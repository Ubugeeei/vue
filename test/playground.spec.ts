import { parse } from 'compiler/parser/index'

describe('playground', () => {
  test('', () => {
    {
      const tmp = `<div @click="a++">hello</div>`
      const res = parse(tmp, {})
      console.log(tmp, `\n`, res)
    }
    {
      const tmp = `<div @click="() => a++">hello</div>`
      const res = parse(tmp, {})
      console.log(tmp, `\n`, res)
    }
  })
})
