// Imports
import { createStackNavigator } from 'react-navigation'

// App Imports
import config from '../setup/config'
import Home from '../modules/screens/Home'
import WhatsNew from '../modules/screens/WhatsNew'
import Crates from '../modules/screens/Crates'
import Account from '../modules/screens/Account'
import Info from '../modules/screens/Info'
import ProductDetail from '../modules/product/Detail'

// API
export const routeApi = config.url.api
//export const routeApi = 'http://192.168.225.94:8000'
//export const routeApi = 'http://172.16.66.147:8000'

export const routeImage = routeApi

// Routes
export const routes = {
  home: {
    name: 'home',
    path: 'home',
    screen: Home
  },
  whatsNew: {
    name: 'whatsNew',
    path: 'whats-new',
    screen: WhatsNew
  },
  crates: {
    name: 'crates',
    path: 'crates',
    screen: Crates
  },
  account: {
    name: 'account',
    path: 'account',
    screen: Account
  },
  info: {
    name: 'info',
    path: 'info',
    screen: Info
  },
  product: {
    name: 'product',
    path: 'product/:slug',
    screen: ProductDetail
  }
}

const routesStack = Object.keys(routes).reduce((result, key) => {
  result[key] = routes[key]
  return result
}, {})

export default createStackNavigator(routesStack, {
  initialRouteName: routes.home.name, // Initial route name
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})
