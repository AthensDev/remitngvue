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
                        <a class="active" href="/?step=1"><i class="ri-exchange-dollar-line"></i>History</a>
                    </li>
                    <!--   <li style="width: 33%" class="nav-item">
                        <a href="/?step=2"><i class="ri-send-plane-line"></i>Confirm</a>
                    </li> -->
                    <!-- <li style="width: 33%" class="nav-item">
                        <a class="" href="chart.html"><i class="ri-line-chart-line"></i>Send</a>
                    </li> -->
                </ul>

                <div class="convert-tabcontent">
                    <section class="exchange-table-wrap pb-75">
                        <div class="container">
                            <div class="row gx-5">
                                <div class="col-lg-12">
                                    <div class="section-title style1 text-center mb-25">
                                        <h2>Recent Transactions</h2>
                                    </div>
                                    <div class="exchange-table style2">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Currency</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">E-Naira Wallet</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>USD</td>
                                                    <td>1.06430</td>
                                                    <td><span class="text-green">HHSDYDYSJHHJHDJJHS</span></td>
                                                </tr>
                                                <tr>
                                                    <td>USD</td>
                                                    <td>1.06430</td>
                                                    <td><span class="text-green">HHSDYDYSJHHJHDJJHS</span></td>
                                                </tr>

                                                <tr>
                                                    <td>USD</td>
                                                    <td>1.06430</td>
                                                    <td><span class="text-green">HHSDYDYSJHHJHDJJHS</span></td>
                                                </tr>

                                                <tr>
                                                    <td>USD</td>
                                                    <td>1.06430</td>
                                                    <td><span class="text-green">HHSDYDYSJHHJHDJJHS</span></td>
                                                </tr>
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
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
