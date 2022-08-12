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
                        <a class="active" href="/?step=1"><i class="ri-exchange-dollar-line"></i>Pay Money</a>
                    </li>
                    <!--   <li style="width: 33%" class="nav-item">
                        <a href="/?step=2"><i class="ri-send-plane-line"></i>Confirm</a>
                    </li> -->
                    <!-- <li style="width: 33%" class="nav-item">
                        <a class="" href="chart.html"><i class="ri-line-chart-line"></i>Send</a>
                    </li> -->
                </ul>

                <div class="convert-tabcontent">
                    <form class="convert-form" @submit.prevent="makePayment()">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="country_from">E-naira Wallet Address</label>
                                    <input required v-model="wallet" type="text" name="">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="country_from">Amount</label>
                                    <input required v-model="amount" type="number" name="">
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
                                    <select required v-model="currency" name="country_to" id="country_to">
                                        <option value="EUR">EUR - Euro</option>
                                        <option value="USD">USD - US Dollar</option>
                                        <option value="CAD">CAD - Canadian Dollar</option>
                                        <option value="GHS">GHS - Ghana Cedis</option>
                                        <option value="NGN">NGN - Nigeria Naira</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-20 align-items-center">
                            <div class="col-xl-6 col-lg-8">
                                <div class="converter-alert-text">
                                    <i class="ri-error-warning-line"></i>
                                    <p class="text-sm">We use mid-market rate for our converter. This is for international purpose only. You won't recieve this rate when send money. <a href="chart.html" class="link style1">Check send rates</a></p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-4 text-lg-end">
                                <button class="btn style1">Send<i class="ri-arrow-right-s-line"></i></button>
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
    import { mapActions, useStore, mapGetters, mapState, mapMutations } from "vuex"
    

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
                amount: "",
                wallet: "",
                currency: "USD"
            };
        },
        computed: {
            ...mapGetters("user", ["user"]),
        },
        mounted() {
            let path = this.$route.path
            console.log(path)
        },
        methods: {
            ...mapActions('payment', ['verifyPaymentLink']),

            generateReference() {
                let date = new Date();
                return date.getTime().toString();
            },

            getPayment(){

                this.$route.path
                // this.verifyPaymentLink
            },

            makePayment() {
                FlutterwaveCheckout({
                    public_key: this.$config.FLWPUBK,
                    tx_ref: this.generateReference(),
                    amount: this.amount,
                    currency: this.currency,
                    payment_options: "card, banktransfer, ussd",
                    redirect_url: "https://remitng.netlify.app/dashboard/confirm",
                    meta: {
                        customer_email: this.user.email,
                        beneficiary_wallet: this.wallet,
                    },
                    customer: {
                        email: this.user.email ?? "rose@unsinkableship.com",
                        phone_number: "08102909304",
                        name: this.user.first_name + this.user.last_name ?? "Rose DeWitt Bukater",
                    },
                    customizations: {
                        title: "RemitNG",
                        description: "Payment for seamless transfer",
                        logo: "https://remitngapp.netlify.app/assets/img/logo.png",
                    },
                });
            },
            
        }
    }



</script>


