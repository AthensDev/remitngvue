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
                        <a class="active" href="/?step=1"><i class="ri-exchange-dollar-line"></i>Send Money</a>
                    </li>
                  <!--   <li style="width: 33%" class="nav-item">
                        <a href="/?step=2"><i class="ri-send-plane-line"></i>Confirm</a>
                    </li> -->
                    <!-- <li style="width: 33%" class="nav-item">
                        <a class="" href="chart.html"><i class="ri-line-chart-line"></i>Send</a>
                    </li> -->
                </ul>

                <div class="convert-tabcontent">
                    <form action="#" class="convert-form">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="country_from">E-naira Wallet Address</label>
                                    <input type="text" name="">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="country_from">Amount</label>
                                    <input type="text" name="">
                                </div>
                            </div>
                            <div class="col-lg-1 text-center">
                                <span class="convert-icon">
                                    <i class="ri-arrow-left-right-line"></i>
                                </span>
                            </div>
                            <div class="col-lg-5">
                                <div class="form-group">
                                    <label for="currency_to">Currency</label>
                                    <select name="country_to" id="country_to">
                                        <option value="1">EUR - Euro</option>
                                        <option value="2">USD - US Dollar</option>
                                        <option value="3">CAD - Canadian Dollar</option>
                                        <option value="3">GHS - Ghana Cedis</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-20 align-items-center">
                            <div class="col-xl-6 col-lg-8">
                                <div class="converter-alert-text">
                                    <i class="ri-error-warning-line"></i>
                                    <p>We use mid-market rate for our converter. This is for international purpose only. You won't recieve this rate when send money. <a href="chart.html" class="link style1">Check send rates</a></p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-4 text-lg-end">
                                <a class="btn style1">Send<i class="ri-arrow-right-s-line"></i></a>
                            </div>
                        </div>
                    </form>
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
