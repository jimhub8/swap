<template>
<v-card>
    <div class="container" style="margin-top: 30px">
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="My Account">
                My account
            </el-tab-pane>
            <el-tab-pane label="Orders">
                <myOrders></myOrders>
            </el-tab-pane>
            <el-tab-pane label="Address">
                <myAddress :user="user"></myAddress>
            </el-tab-pane>
        </el-tabs>

        <!-- <v-layout row wrap> -->
        <!-- <div class="row">
            <div class="col-3">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">My Account</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Orders</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Address Book</a>
                </div>
            </div>
            <v-divider vertical></v-divider>

            <div class="col-8 scroll-x" id="scrolling-techniques" style="max-height: 600px;">
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        Account
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <myOrders></myOrders>
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <myAddress :user="user"></myAddress>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- </v-layout> -->
    </div>
</v-card>
</template>

<script>
import myAddress from './content/address'
import myOrders from '../orders/Orders'
export default {
    props: ['user'],
    components: {
        myAddress,
        myOrders
    },
    data() {
        return {
            address: true,
            account: true,
            drawer: true,
            items: [{
                    title: 'Account',
                    icon: 'dashboard'
                },
                {
                    title: 'Address',
                    icon: 'question_answer'
                }
            ],
            right: null,
            tabPosition: 'top'

        }
    }
}
</script>

<style scoped>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    padding: 20px;
    width: 80%;
    margin: auto;
    box-shadow: 7px 7px 8px -4px rgb(210, 225, 246), 0 12px 17px 2px rgb(210, 225, 246), 0 5px 22px 4px rgb(210, 225, 246) !important;
    margin-bottom: 50px
}

@media only screen and (max-width: 991px) {
    .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    padding: 0;
    width: 100%;
}
}

</style>
