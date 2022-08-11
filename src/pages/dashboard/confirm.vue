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
import Sidebar from '../../components/Sidebar.vue';
    export default {
    setup() {
        useMeta({
            title: "Home",
        });
        const router = useRouter();
        return {
            router
        };
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
        if (this.$route.query.status) {
            // if( this.$route.query.status == 'successful'){
            let status = this.$route.query.status;
            let tx_ref = this.$route.query.tx_ref;
            let transaction_id = this.$route.query.transaction_id;
            let data = {
                event: "transfer.completed",
                event_type: "Transfer",
                data: {
                    id: Number(this.$route.query.transaction_id),
                    tx_ref: this.$route.query.tx_ref,
                    status: this.$route.query.status,
                }
            };
            this.verifyFlutterwave(data);
            // }
        }
        console.log(this.$route.query);
    },
    methods: {
        ...mapActions("auth", ["login", "logout", "verifyFlutterwave"]),
    },
    components: { Sidebar }
}

</script>