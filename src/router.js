import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from './views/login/Login.vue'
import Register from './views/login/Register.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/dashboard',
      name: 'home',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('./views/MoviesPage.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/movies/add',
      name: 'addmovies',
      component: () => import('./views/AddMovie.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/movies/:id',
      name: 'movie',
      component: () => import('./views/Movie.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/genres',
      name: 'genre',
      component: () => import('./views/Genres.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/artists',
      name: 'artist',
      component: () => import('./views/Artists.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('./views/MoviesPage.vue')
    },
    {
      path: '/books/:id',
      name: 'book',
      component: () => import('./views/MoviesPage.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('./views/MoviesPage.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/videos/:id',
      name: 'video',
      component: () => import('./views/MoviesPage.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/Users.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/Users.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuth = !! localStorage.getItem('user')
  
  // !user and route requires auth 
  if(!isAuth && to.meta.requiresAuth) {
    return next({ name: 'login' })
  }

  // user and route does not require auth (login and register)
  if(isAuth && !to.meta.requiresAuth) {
    return next({ name: 'home' })
  }

  return next()
})


export default router