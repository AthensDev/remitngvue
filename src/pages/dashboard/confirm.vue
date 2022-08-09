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
                    <router-link class="contact-item" :to="{name: 'dashboard'}">
                        <span class="contact-icon">
                            <i class="ri-mail-send-line"></i>
                        </span>
                        <div class="contact-info" style="margin: auto">
                            <h3>Dashboard</h3>
                        </div>
                    </router-link>
                </div>
                <div class="">
                    <router-link class="contact-item" :to="{name: 'dashboard-send'}" >
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
                        <a class="active" href="/?step=1"><i class="ri-exchange-dollar-line"></i>Transfer Successfull</a>
                    </li>

                </ul>

                <div class="convert-tabcontent">
                    
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
                amount: '',
                wallet: '',
                currency: 'NGN'
            }
        },
        computed: {
            ...mapGetters("user", ["user"]),
        },
        mounted() {
            if(this.$route.query.status ){

               // if( this.$route.query.status == 'successful'){
                    let status = this.$route.query.status
                    let tx_ref = this.$route.query.tx_ref
                    let transaction_id = this.$route.query.transaction_id

                     let data =   {
                          event: "transfer.completed",
                          event_type: "Transfer",
                          data: {
                                id: Number(this.$route.query.transaction_id),
                                tx_ref: this.$route.query.tx_ref,
                                status: this.$route.query.status,
                            }
                        }
                    this.verifyFlutterwave(data)
               // }
            }

            console.log(this.$route.query)

        },
        methods: {
            ...mapActions('auth', ['login', 'logout', 'verifyFlutterwave']),
            async postLogin(){

                this.logout();
                await this.login(this.user)
                .then((res) =>{
                    // this.router.push('dashboard')
                    window.location = '/dashboard'
                })
            },

           makePayment() {
                FlutterwaveCheckout({
                  public_key: this.$config.FLWPUBK,
                  tx_ref: "titanic-48981487343MDI0NzMx",
                  amount: this.amount,
                  currency: this.currency,
                  payment_options: "card, banktransfer, ussd",
                  redirect_url: "https://remitngapp.netlify.app/dashboard",
                  meta: {
                    consumer_id: 23,
                    consumer_mac: "92a3-912ba-1192a",
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
            }

        }
    }

</script>