/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

import { type Context, Application } from '@curveball/core'
import router from '@curveball/router'

const app = new Application()

console.log('http://localhost:1337 or http://127.0.0.1:1337')
console.log('Check: $ netstat -an')

app.use(
  router('/', (ctx: Context) => {
    ctx.status = 200
    ctx.response.body = ['l', 'e', 'e', 't']
  }),
  router('/data', (ctx: Context) => {
    ctx.status = 200
    ctx.response.body = ['d', 'a', 't', 'a']
  })
)

app.listen(1337)
