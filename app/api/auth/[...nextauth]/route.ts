import NextAuth from 'next-auth'

const handler = NextAuth(options)

export {handler as get , handler as post}