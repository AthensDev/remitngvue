<template>
    <aside class="col-md-3  md-none">
            <div class="contact-us-wrap">
                <div class="">
                    <router-link class="contact-item dashboard-tabs" 
                        :class="currentPath == '/dashboard'&&'active-tab'" 
                        :to="{name: 'dashboard'}" style=""
                    >
                        <span class="contact-icon">
                            <i class="ri-dashboard-line"></i>
                        </span>
                        <div class="contact-info" style="margin: auto">
                            <h3>Dashboard</h3>
                        </div>
                    </router-link>

                </div>
                <div class="">
                    <router-link class="contact-item dashboard-tabs" :class="currentPath == '/dashboard/send'&&'active-tab'"  :to="{name: 'dashboard-send'}">
                        <span class="contact-icon">
                            <i class="ri-exchange-line"></i>
                        </span>
                        <div class="contact-info" style="margin: auto">
                            <h3>Send Money</h3>
                        </div>
                    </router-link>
                </div>
                <div class="">
                    <router-link class="contact-item dashboard-tabs" :class="currentPath == '/dashboard/send'&&'active-tab'"  :to="{name: 'dashboard-send'}">
                        <span class="contact-icon">
                            <i class="ri-exchange-line"></i>
                        </span>
                        <div class="contact-info" style="margin: auto">
                            <h3>Request Money</h3>
                        </div>
                    </router-link>
                </div>
              <!--   <div class="">
                    <router-link class="contact-item dashboard-tabs" :class="currentPath == '/dashboard/history'&&'active-tab'" :to="{name: 'dashboard'}">
                        <span class="contact-icon">
                            <i class="ri-history-fill"></i>
                        </span>
                        <div class="contact-info" style="margin: auto">
                            <h3>History</h3>
                        </div>
                    </router-link>
                </div> -->
                <div class="">
                    <router-link class="contact-item dashboard-tabs" :class="currentPath == '/dashboard/wallet'&&'active-tab'" :to="{name: 'dashboard-wallet'}">
                        <span class="contact-icon">
                            <i class="ri-wallet-line"></i>
                        </span>
                        <div class="contact-info" style="margin: auto">
                            <h3>My E-Naira Wallet</h3>
                        </div>
                    </router-link>
                </div>

            </div>
        </aside>
</template>
<script>
    import { useRouter } from 'vue-router'
    const router = useRouter();
    
    export default {
        setup(){
            const router = useRouter();
            const currentPath = router.currentRoute.value.fullPath
            console.log(currentPath)
            return{
                router,
                currentPath
            }
        },
        methods: {
            closeMenu (){
                this.$refs.menui.classList.remove("open")
                let myBody = document.getElementsByTagName('body')[0]
                myBody.classList.remove("overlay-show")

                let overlayToRemove = document.querySelector(".overlay")
                overlayToRemove.classList.remove("active"), document.body.removeChild(overlayToRemove)
                
            },

            checkRoute(name){
                let parentRoute = this.$route.name.split('-')[0]
                if(parentRoute === name){
                    return true
                }               
            }
        }
    }

</script>


<style scoped="scoped">
    .sidebar-bg {
        background: #303030;
    }

    .menu-bar .menu-items .link{
        color: white;
    }

    .menu-bar .menu-items .link.active{
        color: #ff7e00;
    }

    .menu-bar .menu-items .link.active:before {
        background-color: #ff7e00;
    }
    .dashboard-tabs {
        display: flex;
        align-items: center;
        border-radius: 15px;
         border: 2px solid transparent;
    }
    .dashboard-tabs h3 {
        margin: 0 !important;
    }
    .dashboard-tabs span {
        top: 0 !important;
    }
    .theme-light .active-tab {
        border: 2px solid #ccc;
    }
    .theme-dark .active-tab {
        border: 2px solid white;
    }

</style>