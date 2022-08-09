<template>
    <div class="full-width-header">
        <header class="header-wrap style2">
            <div class="header-bottom">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="/">
                            <img class="logo-light" src="//assets/img/logo.png" style="height: 50px" alt="logo">
                            <img class="logo-dark" src="//assets/img/logo-white.png" style="height: 50px" alt="logo">
                        </a>
                        <div class="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                            <div class="menu-close d-lg-none">
                                <a href="javascript:void(0)"> <i class="ri-close-line"></i></a>
                            </div>
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <router-link :to="{name: 'index'}"  class="nav-link">
                                        Home
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{name: 'about'}"  class="nav-link">
                                        About
                                    </router-link>
                                    
                                </li>
                               
                                <li class="nav-item">
                                    <router-link :to="{name: 'contact'}"  class="nav-link">
                                        Contact
                                    </router-link>
                                </li>
                                <li class="nav-item d-lg-none">
                                    <!-- <a href="app/" class="nav-link btn style1">GET STARTED<i class="ri-arrow-right-s-line"></i></a> -->
                                    <router-link :to="{name: 'login'}"  class="nav-link btn style1">
                                        GET STARTED<i class="ri-arrow-right-s-line"></i>
                                    </router-link>
                                </li>
                            </ul>
                            <div class="other-options md-none">
                                <div class="option-item">
                                    <div class="user-login">
                                        <span><i class="ri-user-add-line"></i></span>
                                        <ul class="list-style">
                                            <li><router-link :to="{name: 'login'}" >Sign In</router-link></li>
                                            <li><router-link :to="{name: 'register'}" >Sign Up</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="option-item">
                                    <router-link :to="{name: 'login'}"  class="nav-link btn style1">
                                        GET STARTED<i class="ri-arrow-right-s-line"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div class="mobile-bar-wrap">
                        <div class="user-login d-lg-none">
                            <span><i class="ri-user-add-line"></i></span>
                            <ul class="list-style">
                                <li><a href="login/">Sign In</a></li>
                                <li><a href="register/">Sign Up</a></li>
                            </ul>
                        </div>
                        <div class="mobile-menu d-lg-none">
                            <a href="javascript:void(0)"><i class="ri-menu-line"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
import { useStore, mapGetters, mapActions } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    name: 'Header',
    data() {
        return {}
    },

    created() {},
    mounted() {},
};

</script>

<style>

</style>
