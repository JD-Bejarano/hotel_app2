import vueRouter from 'vue-router' 

import UserHacer from './components/UeserHacer'
import UserReserva from './components/UserReserva' 
import UserCancelar from './components/UserCancelar'
import App from './App'

const router = new vueRouter({ 
        mode: 'history', 
        base: __dirname, 
        routes: [
            {
                path: '/',
                name: "root", 
                component: App
            },
            {
                path: '/user/reserva/:username', 
                name: "user", 
                component: UserReserva
            },
            {
                path: '/user/reserva/make/:username', 
                name: "user_reserva", 
                component: UserHacer
            },
            {
                path: '/user/reserva/cancel/:username', 
                name: "user_cancel", 
                component: UserCancelar
            },
        ]
    })
export default router     
