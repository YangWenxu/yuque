const Router = require('koa-router')
const axios = require('axios')

// 语雀相关设置
// 请修改这里的配置
const YUQUE_USER_NAME = 'cxd' // 在语雀上的用户名
const YUQUE_KNOWLEDGE_LIB = 'design-system' // 在语雀上用来作为博客的知识库名称
const TOKEN = '5GmaDRJFUXGVn7DniU0kuRkO6XZjIZ4LflwPSvMz' // 在语雀的设置个人资料里面可以查看到 设置token可以使得每小时调用接口次数上限增加到5000

const blogApiRouter = new Router()

blogApiRouter.prefix('/blog/api')

const CACHE_TIME = 30000
const itemSlug = 'bqr5yz' || 'urlgz8';
// 代理获取博客列表信息
blogApiRouter.get('/bloglist', async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/toc`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/bqr5yz`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/bqr5yz`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/urlgz8`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/urlgz8`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/gpkitr`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/gpkitr`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/xp2kti`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/xp2kti`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/qrcod0`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/qrcod0`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/xl6r78`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/xl6r78`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/ku0rgi`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/ku0rgi`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/fafkk7`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/fafkk7`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/ts5a14`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/ts5a14`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/ood3li`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/ood3li`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/ao5ntx`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/ao5ntx`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/vhfk04`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/vhfk04`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/hfergg`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/hfergg`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/tpc271`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/tpc271`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/slpvzg`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/slpvzg`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/mbm69b`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/mbm69b`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/mrbo5k`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/mrbo5k`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/ucltro`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/ucltro`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/uh1igh`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/uh1igh`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/kl1ac8`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/kl1ac8`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/qoaet6`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/qoaet6`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/vgwp5l`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/vgwp5l`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/akf6cu`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/akf6cu`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/ir0gew`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/ir0gew`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/xr9buc`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/xr9buc`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/rck20n`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/rck20n`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/zznls1`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/zznls1`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/srghrc`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/srghrc`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/rhulh5`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/rhulh5`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/bsl0r6`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/bsl0r6`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/vs807l`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/vs807l`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})
blogApiRouter.get(`/docs/oe01es`, async ctx => {
  await axios
    .get(
      `https://yuque.com/api/v2/repos/${YUQUE_USER_NAME}/${YUQUE_KNOWLEDGE_LIB}/docs/oe01es`,
      {
        headers: {
          'User-Agent': 'personalBlog',
          'X-Auth-Token': TOKEN
        }
      }
    )
    .then(response => {
      ctx.body = response.data
    })
    .catch(error => {
      console.log(error.message)
      ctx.response.status = 404
      ctx.response.body = {
        status: 'fail'
      }
    })
})

module.exports = blogApiRouter
