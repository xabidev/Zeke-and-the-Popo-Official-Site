
const routes = [
  {
    path: '/',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Index.vue') },
    ]
  },
  {
    path: '/appinfo',
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/AppInfo.vue') },
    ]
  },
  {
    path: '/masuk',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/Masuk.vue'), name: 'masuk' },
    ]
  },
  {
    path: '/menu',
    component: () => import('layouts/Blank.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Index.vue') }
    ]
  },
    {
    path: '/xabi',
    component: () => import('layouts/Blank.vue'),
    children: [
      { path: '', component: () => import('pages/Xabi.vue') },
    ]
  },  
  {
    path: '/involved',
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/About.vue') },
    ]
  },
  {
    path: '/dashboard',
    meta: {kunci: true},    
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Dashboard.vue') },
    ]
  },
  {
    path: '/video',
    meta: {kunci: true},    
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Video.vue') },
    ]
  },
  {
    path: '/lyrics',
    meta: {kunci: true},    
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Lyrics.vue') },
    ]
  },
  {
    path: '/song',
    meta: {kunci: true},    
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Song.vue') },
    ]
  },
  {
    path: '/story',
    meta: {kunci: true},    
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Story.vue') },
    ]
  },
  {
    path: '/story2',
    meta: {kunci: true},    
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Story2.vue') },
    ]
  },
  {
    path: '/story3',
    meta: {kunci: true},    
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Story3.vue') },
    ]
  },
  {
    path: '/story4',
    meta: {kunci: true},    
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Story4.vue') },
    ]
  },
  {
    path: '/story5',
    meta: {kunci: true},    
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '', component: () => import('pages/Menu/Story5.vue') },
    ]
  }                                    
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
