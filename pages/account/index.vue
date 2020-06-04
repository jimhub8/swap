<template>
<v-card style="margin-top: 200px">
    <div class="container" style="margin-top: 30px">
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="My Account">
                My account
            </el-tab-pane>
            <el-tab-pane label="Orders">
                <myOrders />
            </el-tab-pane>
            <el-tab-pane label="Address">
                <myAddress />
            </el-tab-pane>
        </el-tabs>

    </div>
</v-card>
</template>

<script>
import myAddress from '../../components/account/content/address'
import myOrders from '../../components/orders/Orders'

export default {
  name: 'account',
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
