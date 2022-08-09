<template>
    <div class="content-wrapper">

        <div class="breadcrumb-wrap bg-f br-1">
            <div class="container">
                <div class="breadcrumb-title">
                    <h2>Login</h2>
                    <ul class="breadcrumb-menu list-style">
                        <li><a href="index/">Home </a></li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>

        <section class="Login-wrap ptb-100">
            <div class="container">
                <div class="row ">
                    <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div class="login-form-wrap">
                            <div class="login-header">
                                <h3>Login Here</h3>
                                <p>Welcome Back!! Login To Your Account</p>
                            </div>
                            <div class="login-form">
                                <div class="login-body">
                                    <form @submit.prevent="postLogin()" class="form-wrap">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email">Username/Email Address</label>
                                                    <input id="email" name="email" v-model="user.email" type="email" required>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="pwd">Password</label>
                                                    <input v-model="user.password" id="pwd" name="pwd" type="password" required>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                                <div class="checkbox style3">
                                                    <input v-model="user.is_remember" type="checkbox" id="test_1">
                                                    <label for="test_1">
                                                        <a href="">Remember Me</a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-end mb-20">
                                                <a href="recover-password/" class="link style1">Forgot Password?</a>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <button class="btn style1">
                                                        LOGIN NOW<i class="ri-arrow-right-s-line"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <p class="mb-0">Don’t Have an Account? <a class="link style1" href="register/">Create One</a></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<route lang="yaml">
    meta:
        layout: default
        middleware: []
</route>

<script>
import { useMeta } from 'vue-meta'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mapActions, useStore, mapGetters, mapState, mapMutations } from "vuex";
export default {
    setup() {
        useMeta({
            title: 'Home',
        })
        const router = useRouter()
        return {
            router
        }
    },
    data() {
        return {
            user:{

            }
        }
    },
    computed: {},
    mounted() {},
    methods: {
        ...mapActions('auth', ['login', 'logout']),
        async postLogin(){

            this.logout();
            await this.login(this.user)
            .then((res) =>{
                // this.router.push('dashboard')
                window.location = '/dashboard'
            })

        }
    }
}

</script>
<style>
</style>
