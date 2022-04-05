/* eslint-disable @typescript-eslint/no-unsafe-call, no-console */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// eslint-disable-next-line import/no-unresolved, import/extensions
import { serve } from 'https://deno.land/std@0.106.0/http/server.ts'

const server = serve({ port: 1337 })

console.log('http://localhost:1337')

// TODO: Enable VSCode Deno plugin only for this file, not codebase

// eslint-disable-next-line no-restricted-syntax
for await (const req of server) {
  req.respond({ body: 'leet' })
}
