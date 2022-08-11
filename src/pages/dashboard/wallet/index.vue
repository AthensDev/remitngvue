<template>
    <div class="">
        <div class="container" style="margin: 20px">
            <h1>SEND MONEY</h1>
        </div>
    </div>

    <div class="container row ptb-100">

        <aside class="col-md-3  md-none">
            <div class="contact-us-wrap">
                <div class="">
                    <router-link class="contact-item" :to="{name: 'dashboard'}" style="border: thin solid gray;">
                        <span class="contact-icon">
                            <i class="ri-mail-send-line"></i>
                        </span>
                        <div class="contact-info" style="margin: auto">
                            <h3>Dashboard</h3>
                        </div>
                    </router-link>

                </div>
                <div class="">
                    <router-link class="contact-item" :to="{name: 'dashboard-send'}">
                        <span class="contact-icon">
                            <i class="ri-mail-send-line"></i>
                        </span>
                        <div class="contact-info" style="margin: auto">
                            <h3>Send Money</h3>
                        </div>
                    </router-link>
                </div>
                <div class="">
                    <router-link class="contact-item" :to="{name: 'dashboard'}">
                        <span class="contact-icon">
                            <i class="ri-mail-send-line"></i>
                        </span>
                        <div class="contact-info" style="margin: auto">
                            <h3>History</h3>
                        </div>
                    </router-link>
                </div>
            </div>
        </aside>

        <section class="col-md-9">
            <div class="convert-box">
                <ul class="convert-tablist list-style" role="tablist">
                    <li style="width: 33%" class="nav-item">
                        <a class="active" href="/?step=1"><i class="ri-exchange-dollar-line"></i>My Wallet</a>
                    </li>
                    <li style="width: 33%" class="nav-item">
                        <a class="" href="/?step=1"><i class="ri-exchange-dollar-line"></i>Transfer</a>
                    </li>

                    <li style="width: 33%" class="nav-item">
                        <a class="" href="/?step=1"><i class="ri-exchange-dollar-line"></i>History</a>
                    </li>
                </ul>

                <div class="convert-tabcontent">
                    <div class="contact-us-wrap flex justify-between">
                        
                        <div class="w-1/2 mx-2">
                           <div class="contact-item" :to="{name: 'dashboard'}">
                                <span class="contact-icon">
                                    <!-- <i class="ri-mail-send-line"></i> -->
                                </span>
                                <div class="contact-info">
                                    <h3>NGN450</h3>
                                    <span>Balance</span>
                                </div>
                            </div>

                        </div>
                       
                        <div class="w-1/2 mx-2">
                            <div class="contact-item" :to="{name: 'dashboard'}">
                                <span class="contact-icon">
                                    <i class="ri-mail-send-line"></i>
                                </span>
                                <div class="contact-info" style="margin: auto">
                                    <h3>430</h3>
                                    <span>Transactions</span>
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
        layout: user
        middleware: []
        requiresAuth: true
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
            user: {}
        }
    },
    computed: {},
    mounted() {},
    methods: {
        ...mapActions('auth', ['login', 'logout']),
        async postLogin() {
            this.logout();
            await this.login(this.user)
                .then((res) => {
                    // this.router.push('dashboard')
                    window.location = '/dashboard'
                })
        }
    }
}

</script>
