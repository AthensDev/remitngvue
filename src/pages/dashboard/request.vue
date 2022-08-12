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
                        <a class="active" href="/?step=1"><i class="ri-exchange-dollar-line"></i>Request Money</a>
                    </li>
                    <!--   <li style="width: 33%" class="nav-item">
                        <a href="/?step=2"><i class="ri-send-plane-line"></i>Confirm</a>
                    </li> -->
                    <!-- <li style="width: 33%" class="nav-item">
                        <a class="" href="chart.html"><i class="ri-line-chart-line"></i>Send</a>
                    </li> -->
                </ul>

                <div class="convert-tabcontent">
                    <form class="convert-form" @submit.prevent="onCreatePaymentLink()">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="country_from">E-Naira Wallet Address</label>
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

                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="country_from">Payment Details</label>
                                <textarea name="" v-model="description" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>

                        <div class="row mt-20 align-items-center">
                            <div class="col-xl-6 col-lg-8">
                               
                                <div class="converter-alert-text" v-if="isLink">
                                    <div class="w-full"><p class="alert alert-success">Payment link generated</p></div>
                                    
                                    <i class="ri-error-warning-line"></i>
                                    
                                    <p class="text-sm">{{ isLink }}
                                        <!-- <a href="#" class="link style1">Copy</a> -->
                                    </p>
                                </div>

                                <div class="converter-alert-text" v-else>
                                    <i class="ri-error-warning-line"></i>
                                    <p class="text-sm">We use mid-market rate for our converter. This is for international purpose only. You won't recieve this rate when send money. 
                                        <a href="chart.html" class="link style1">Check send rates</a>
                                    </p>
                                </div>


                            </div>
                            <div class="col-xl-6 col-lg-4 text-lg-end">
                                <button class="btn style1">Create Link<i class="ri-arrow-right-s-line"></i></button>
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
                currency: "USD",
                description: "",
                isLink: null,
            };
        },
        computed: {
            ...mapGetters("user", ["user"]),
        },
        mounted() {},
        methods: {
            ...mapActions('payment', ['createPaymentLink']),

            generateReference() {
                let date = new Date();
                return date.getTime().toString();
            },

            async onCreatePaymentLink(){
                let details = {}
                details.amount = Number(this.amount)
                details.wallet_address = this.wallet
                details.currency = this.currency
                details.description = this.description
                details.customer_email = this.user.email
               await this.createPaymentLink(details)
               .then(res =>{
                    console.log(res)
                    this.isLink = res.data.link
               })
            }
            
        }
    }



</script>
<style scoped>
        .convert-box .convert-tabcontent .form-group textarea {
            width: 100%;
            border-radius: 10px;
            border: 1px solid rgba(0,0,0,.2);
            background-color: transparent;
            padding: 10px 15px;
        }

        .theme-dark  .convert-box .convert-tabcontent .form-group textarea {
            border: 1px solid rgba(255,255,255,.2);
        }

</style>

