import { createSender } from '@mallpopstar/partyline'

const sender = createSender()
sender.connect(self)
sender.postRequest('echo', 'hello from web worker!').then(res => {
  console.log('response from receiver', JSON.stringify(res, null, 2))
})
