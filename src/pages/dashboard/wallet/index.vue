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
                        <a class="active" href="?step=1"><i class="ri-exchange-dollar-line"></i>My Wallet</a>
                    </li>
                    <li style="width: 33%" class="nav-item">
                        <a class="" href="?step=1"><i class="ri-exchange-dollar-line"></i>Transfer</a>
                    </li>

                    <li style="width: 33%" class="nav-item">
                        <a class="" href="?step=1"><i class="ri-exchange-dollar-line"></i>History</a>
                    </li>
                </ul>

                <div class="convert-tabcontent">
                    <div class="contact-us-wrap flex justify-between">
                        
                        <div class="w-1/2 mx-2">
                           <div class="contact-item" :to="{name: 'dashboard'}">
                                <span class="contact-icon">
                                    <svg viewBox="0 0 70 57" class="css-bv8bbq"><g><path d="M70.8535 27.3565V21.4463H62.9724C59.8562 9.11712 48.7568 0 35.5416 0C22.3264 0 11.2245 9.11712 8.10826 21.4463H0V27.3565H23.3856V30.3604H0V36.2706H8.29712C11.6558 48.2349 22.5817 57.0026 35.5391 57.0026C39.9441 57.0026 44.1144 55.9901 47.8303 54.1811L44.755 49.1035C41.9425 50.3806 38.8237 51.0924 35.5391 51.0924C25.8586 51.0924 17.61 44.9201 14.4632 36.2706H23.383V42.7076H29.253V36.2706H36.981L40.8808 42.7076H47.6951V36.2706H70.8535V30.3604H47.6951V27.3565H70.8535ZM29.253 30.3604V27.3565H31.5806L33.4003 30.3604H29.253ZM41.8276 30.3604H40.2759L38.4562 27.3565H41.8276V30.3604ZM41.8276 13.8144V21.4437H34.878L30.256 13.8144H23.3856V21.4437H14.2182C17.1608 12.4243 25.5958 5.9102 35.5416 5.9102C45.4874 5.9102 53.9198 12.4243 56.865 21.4463H47.6976V13.8144H41.8276Z" fill="currentColor"></path></g></svg>
                                </span>
                                <div class="contact-info">
                                    <h3>8450</h3>
                                    <span>Balance</span>
                                </div>
                            </div>

                        </div>
                       
                        <div class="w-1/2 mx-2">
                            <div class="contact-item" :to="{name: 'dashboard'}">
                                <span class="contact-icon">
                                    <i class="ri-exchange-line"></i>
                                </span>
                                <div class="contact-info" >
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

<style scoped>
    
    .css-bv8bbq {
        height: 40px;
        /*fill: #3f4951;*/
        color: #00a79d;
    }
</style>
