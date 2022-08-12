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
                                    <input readonly disabled required v-model="detail.wallet_address" type="text" name="">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="country_from">Amount</label>
                                    <input disabled required v-model="detail.amount" type="number" name="">
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
                                    <select disabled required v-model="detail.currency" name="country_to" id="country_to">
                                        <option :value="detail.currency">{{detail.currency}}</option>
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
                detail: {

                }
            };
        },
        computed: {
            ...mapGetters("user", ["user"]),
        },
        async mounted() {
            let paymentLink = this.router.currentRoute.value.params.link
            await this.getPayment(paymentLink)
        },
        methods: {
            ...mapActions('payment', ['getPaymentLinkDetails']),

            generateReference() {
                let date = new Date();
                return date.getTime().toString();
            },

            async getPayment(link){
                await this.getPaymentLinkDetails({link})
                .then(res =>{
                    this.detail = res.payment_details
                })
                console.log(this.detail)
            },

            makePayment() {
                FlutterwaveCheckout({
                    public_key: this.$config.FLWPUBK,
                    tx_ref: this.generateReference(),
                    amount: this.detail.amount,
                    currency: this.detail.currency,
                    payment_options: "card, banktransfer, ussd",
                    redirect_url: "https://remitng.netlify.app/dashboard/confirm",
                    meta: {
                        customer_email: this.user.email,
                        beneficiary_wallet: this.detail.wallet_address,
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


