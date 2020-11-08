const { log, error, info } = console

const promise1 = () => new Promise(async (resolve, reject) => {
  await setTimeout(() => {
    const time = Date.now()
    if (!(time % 2)) resolve(true) // resolve(`even ${time}`)
    else reject(false)// reject(`odd ${time}`)
  }, 1000)
})
const promise2 = () => new Promise(async (resolve, reject) => {
  await setTimeout(() => {
    const time = Date.now()
    if (!(time % 2)) resolve(true) // resolve(`even ${time}`)
    else reject(false)// reject(`odd ${time}`)
  }, 1000)
})
const promise3 = () => new Promise(async (resolve, reject) => {
  await setTimeout(() => {
    const time = Date.now()
    if (!(time % 2)) resolve(true) // resolve(`even ${time}`)
    else reject(false)// reject(`odd ${time}`)
  }, 1000)
});
// const promise2 = () => Promise.reject('promise2')
// const promise3 = () => Promise.resolve('promise3')

// (async () => {
//   try {
//     const p1 = await promise1()
//     log('p1', p1)
//     const p2 = await promise2()
//     log('p2', p2)
//     const p3 = await promise3()
//     log('p3', p3)
//   } catch (err) {
//     error(err)
//   }
// })()

//@ts-ignore
Promise.allSettled([
  promise1(),
  promise2(),
  promise3()
])
  //@ts-ignore
  .then((response) => {
    log('response', response)
    const every = response.every((v, i) => {
      log('v, i', v, i)
      return v.status === 'fulfilled'
    })
    log('every', every)
  })
  //@ts-ignore
  .catch((err) => error('error', err))
  .finally(() => info('finally'))

