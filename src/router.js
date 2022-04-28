import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/pages/Home.vue";
import Main from "@/layouts/Main.vue";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import storage from "@/commons/constant/storage";
import Detail from "@/pages/product/Detail";
import Products from "@/pages/product/List";
import List from "@/pages/cart/List";
import Wishlist from "@/pages/wishlist/Wishlist";
import Checkout from "@/components/checkouts/Checkout";
import Payment from "@/pages/payment/Payment";
import Order from "@/pages/order/Order";
import OrderDetail from "@/pages/order/Detail" ;
import ContactUs from "@/pages/contacts/ContactUs";
import About from "@/pages/about/About";
import AddressList from "@/pages/address/List";

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
    if(localStorage.getItem(storage.token)) {
        next();
    } else {
        router.push({
            name: 'login',
            params: {
                returnTo: to.path,
                query: to.query
            }
        })
    }
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            name: 'main',
            component: Main,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home,
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About,
                },
                {
                    path: '/contacts',
                    name: 'contacts',
                    component: ContactUs,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: route.name,
                                    to: route.path
                                }
                            ]
                        }
                    },
                },
                {
                    path: '/abouts',
                    name: 'abouts',
                    component: About,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: route.name,
                                    to: route.path
                                }
                            ]
                        }
                    },
                },
                {
                    path: '/products/:search?',
                    name: 'products',
                    component: Products,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: route.name,
                                    to: route.path
                                }
                            ]
                        }
                    },
                },
                {
                    path: '/product/:id/:name',
                    name: 'product',
                    component: Detail,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: 'Product',
                                },
                                {
                                    text: route.params.name,
                                    to: route.path
                                }
                            ]
                        }
                    }
                },
                {
                    path: '/carts',
                    name: 'carts',
                    beforeEnter: ifAuthenticated,
                    component: List,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: route.name,
                                    to: route.path
                                }
                            ]
                        }
                    },
                },
                {
                    path: '/wishlists',
                    name: 'wishlists',
                    component: Wishlist,
                    beforeEnter: ifAuthenticated,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: route.name,
                                    to: route.path
                                }
                            ]
                        }
                    },
                },
                {
                    path: '/checkout',
                    name: 'checkout',
                    component: Checkout,
                    beforeEnter: ifAuthenticated,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: route.name,
                                    to: route.path
                                }
                            ]
                        }
                    }
                },
                {
                    path: '/orders',
                    name: 'orders',
                    component: Order,
                    beforeEnter: ifAuthenticated,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: route.name,
                                    to: route.path
                                }
                            ]
                        }
                    }
                },
                {
                    path: '/order/:id',
                    name: 'order',
                    component: OrderDetail,
                    beforeEnter: ifAuthenticated,
                    props: true,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: 'Orders',
                                    to: '/orders'
                                },
                                {
                                    text: route.name,
                                    to: route.path
                                }
                            ]
                        }
                    }
                },
                {
                    path: '/addresses',
                    name: 'addresses',
                    component: AddressList,
                    beforeEnter: ifAuthenticated,
                    meta: {
                        breadCrumb(route) {
                            return [
                                {
                                    text: 'Home',
                                },
                                {
                                    text: route.name,
                                    to: route.path
                                }
                            ]
                        }
                    }
                },
            ],
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/payment',
            name: 'payment',
            beforeEnter: ifAuthenticated,
            component: Payment,
        }
    ]
});

export default router;
