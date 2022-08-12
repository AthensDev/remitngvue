<template>
    <div class="">
        <div class="container" style="margin: 20px">
            <h1>SEND MONEY</h1>
        </div>
    </div>

    <div class="container row ptb-100">
        <Sidebar />
        
        <section class="col-md-9">
            <div class="convert-box">
                <ul class="convert-tablist list-style" role="tablist">
                    <li style="width: 33%" class="nav-item">
                        <a class="active" href="/?step=1"><i class="ri-dashboard-line"></i>Dashboard</a>
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
                                <h2 class="welcome-heading">Welcome {{ user.first_name }},</h2>
                                <Chart />
                                <div class="card-container">
                                    <div class="total-received-card">
                                        <h3>Total Received</h3>
                                        <h1>60,000</h1>
                                    </div>
                                    <div class="total-sent-card">
                                        <h3>Total Sent</h3>
                                        <h1>60,000</h1>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-5">
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
    // data() {
    //     return {
    //         user: {}
    //     }
    // },
    computed: {
        ...mapGetters("user", ["user"]),
    },
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
<style scoped="scoped">
    .theme-dark .welcome-heading {
        color: #fff;
        font-size: 22px;
    }
    .theme-light .welcome-heading {
        color: #333;
        font-size: 22px;
    }
    .card-container {
        margin: 30px 0;
        display: flex;
        justify-content: space-between;
    }
    .card-container div {
        border-radius: 15px;
        padding: 15px;
        width: 48%;
    }
    .theme-light .card-container div{
        border: 1px solid #ccc;
    }
    .theme-dark .card-container div{
        border: 1px solid #fff;
    }
    .theme-light .card-container h3 {
        font-size: 16px;
        color: #333;
    }
    .theme-dark .card-container h3 {
        font-size: 16px;
        color: #fff;
    }
    .card-container h1 {
        font-size: 28px;
    }
    .total-received-card h1 {
        color: green !important;
    }
    .total-sent-card h1 {
        color: red !important;
    }
</style>