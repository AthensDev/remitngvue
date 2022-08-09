<template>
    <aside class="menu-bar menu-sticky">
        <div class="menu-items sidebar-bg" id="style-4-scrollbar">

            <router-link   :to="{name: 'monitor'}" class="link" :class=" checkRoute('monitor') ? 'active' : '' " >
                <span class="icon la la-laptop"></span>
                <span class="title">Monitor</span>
            </router-link>
            
            <router-link :to="{name: 'analytics'}" class="link" :class=" checkRoute('analytics') ? 'active' : '' " >
                <span class="icon la la-file-alt"></span>
                <span class="title">Analytics</span>
            </router-link>

            
            <router-link :to="{name: 'devices'}"  class="link" :class=" checkRoute('devices') ? 'active' : '' "  data-target="devices" data-toggle="tooltip-menu" data-tippy-content="Devices">
                <span class="icon la la-book-open"></span>
                <span class="title">Devices</span>
            </router-link>

            <router-link :to="{name: 'stations'}"  class="link" :class=" checkRoute('stations') ? 'active' : '' ">
                <span class="icon la la-book-open"></span>
                <span class="title">Stations</span>
            </router-link>

            
             <router-link :to="{name: 'configuration'}" class="link" :class=" checkRoute('configuration') ? 'active' : '' " data-target="config" data-toggle="tooltip-menu" data-tippy-content="Configuration">
                <span class=" disabled icon la la-file-alt"></span>
                <span class="title">Configuration</span>
            </router-link>


            
            <!-- <router-link  class="link" :to="{name: 'maintain'}" >
                <span class="icon la la-file"></span>
                <span class="title">Maintain</span>
            </router-link> -->

            
        </div>

        <!-- Projects -->
        <div class="menu-detail" ref="menui" data-menu="config" style="width:200px; overflow-y: hidden;">
            <div class="menu-detail-wrapper">
                <p class="uppercase my-6">Configuration</p>
                
                <a @click.prevent="closeMenu" href="#"><span class="la la-list"></span>Users</a>
            </div>
        </div>

        <!-- Devices Submenu -->
        <div class="menu-detail" ref="menui" data-menu="devices" style="width:200px; overflow-y: hidden;">
            <div class="menu-detail-wrapper">
                <p class="uppercase my-6">Devices</p>
                <router-link :to="{name: 'devices'}"  @click.prevent="closeMenu" href="#"><span class="la la-list"></span>Devices</router-link>
                <router-link :to="{name: 'devices-types'}"  @click.prevent="closeMenu" href="#"><span class="la la-list"></span>Device Types</router-link>
            </div>
        </div>


        <!-- Data Sub Menu -->
        <div class="menu-detail" data-menu="data">
            <div class="menu-detail-wrapper">
                <h6 class="uppercase">Data</h6>
                <a href="#" @click.prevent="router.push({name: 'data'})">
                    <span class="la la-user"></span>Chart</a>
                <a href="#"><span class="la la-user-lock"></span>Energy</a>
                <a href="" @click.prevent="router.push({name: 'data'})"><span class="la la-user-plus"></span>History Data</a>
                <a href="#"><span class="la la-list"></span>Local Data</a>
                <a href="#"><span class="la la-list"></span>History Event</a>
                <a href="#"><span class="la la-list"></span>High Priority</a>
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
            return{

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
</style>