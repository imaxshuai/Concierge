<template>
    <div class="home">
        <Row class="header">
            <h3>Welcome back, Jason Li.</h3>
            <span>Well begun is half done. - Aristotle</span>
        </Row>

        <Row style="margin: 20px">
            <Card>
                <p slot="title">Current Lucky Draw Campaigns</p>
                <Table :columns="table1Header" :data="table1Body"></Table>
            </Card>
            <Card style="margin-top: 20px;">
                <p slot="title">Current GWP Campaigns</p>
                <Table :columns="table2Header" :data="table2Body"></Table>
            </Card>
        </Row>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '../components/HelloWorld'

    export default {
        name: 'dashboard',
        data() {
            return {
                table1Header: [
                    { title: "Status", key: "status" },
                    { title: "Campaign Name", key: "campaign_name" },
                    { title: "Description", key: "description" },
                    { title: "Start Time", key: "start_time" },
                    { title: "End Time", key: "end_time" },
                ],
                table1Body: [
                    { status: "ACTIVE", campaign_name: "Demo Lucky Draw", description: "$50 per chance max. 10 per day", start_time: "01/05/2014 00:00:00", end_time: "29/06/2020 23:59:59" },
                ],
                table2Header: [
                    { title: "Status", key: "status" },
                    { title: "Campaign Name", key: "campaign_name" },
                    { title: "Description", key: "description" },
                    { title: "Start Time", key: "start_time" },
                    { title: "End Time", key: "end_time" },
                ],
                table2Body: [
                    { status: "ACTIVE", campaign_name: "Demo Lucky Draw", description: "$50 per chance max. 10 per day", start_time: "01/05/2014 00:00:00", end_time: "29/06/2020 23:59:59" },
                ],
            }
        },
        components: {
            HelloWorld,
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.15);
        padding: 1rem !important;
        background-color: #f9fafc;
        margin-bottom: 25px;
        h3 {
            font-size: 20px;
            font-weight: 400;
        }
        span {
            opacity: 0.6;
        }
    }
    .table-header{
        ul{

        }
    }
</style>