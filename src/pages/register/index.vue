<template>
    <div class="content-wrapper">

        <div class="breadcrumb-wrap bg-f br-1">
            <div class="container">
                <div class="breadcrumb-title">
                    <h2>Register</h2>
                    <ul class="breadcrumb-menu list-style">
                        <li><a href="/">Home </a></li>
                        <li>Register</li>
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
                                <h3>Create New Account</h3>
                                <p>Welcome!! Create Your Account</p>
                            </div>
                            <div class="login-form ptb-50" >
                                <div class="login-body">
                                    <form class="form-wrap" @submit.prevent="postRegister()">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email">Title</label>
                                                    <select v-model="user.title" name="country_from" id="country_from">
                                                        <option selected value="None">None</option>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email">First Name</label>
                                                    <input id="fname" v-model="user.first_name" name="fname" type="text" required>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email">Last Name</label>
                                                    <input id="fname" v-model="user.last_name" name="fname" type="text" required>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email">DOB</label>
                                                    <input id="fname" v-model="user.dob" name="dob" type="text" required>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email">Address</label>
                                                    <input id="fname" v-model="user.address" name="address" type="text" required>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email">Phone</label>
                                                    <input id="fname" v-model="user.phone" name="address" type="text" required>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="email">Email Address</label>
                                                    <input id="email" v-model="user.email" name="email" type="email" required>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="pwd">Password</label>
                                                    <input id="pwd"  v-model="user.password" name="pwd" type="password" required>
                                                </div>
                                            </div>
                                           
                                            <div class="col-12">
                                                <p>The password should be at least 8 characters long. To make it stronger use uppercase & lowercase letters &ampl symbols like !#&%)</p>
                                            </div>
                                            <div class="col-sm-12 col-12 mb-20">
                                                <div class="checkbox style3">
                                                    <input type="checkbox" id="test_1">
                                                    <label for="test_1">
                                                        I Agree with the <a class="link style1" href="terms-of-service/">Terms &amp; conditions</a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <button class="btn style1">
                                                        CREATE ACCOUNT<i class="ri-arrow-right-s-line"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <p class="mb-0">Have an Account? <a class="link style1" href="login/">Sign In</a></p>
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
        return {}
    },
    data() {
        return {
            user: {
                title: 'None'
            }
        }
    },
    computed: {},
    mounted() {},
    methods: {
        ...mapActions('auth', ['login', 'logout', 'register']),
        async postRegister(){

            this.logout();
            await this.register(this.user)
            .then((res) =>{
                // this.router.push('dashboard')
                window.location = '/dashboard'
            })

        }
    }
}

</script>
<style>

    select {
        width: 100%;
        height: 48px;
        border-radius: 10px;
        border: 1px solid rgba(0,0,0,.2);
        background-color: transparent;
        padding: 10px 15px;
    }

    .theme-dark select {
        background-color: #000;
        border: 1px solid rgba(255,255,255,.2);
        color: #fff;
    }

</style>
