<template>
    <div class="container">
        <Row class="header">
            <Icon type="search" class="search-icon" size="20" />
            <input class="search-input" :model="search" placeholder="Search shooper via nric, email..." />
        </Row>

        <Row style="padding: 20px">
            <Col span="6" style="padding: 20px">
                <Card class="profile">
                    <Row slot="title" type="flex" justify="space-between">
                        <Col>
                            <Icon type="person" color="#53a6fa" size="18"></Icon>
                            <span style="margin-left: 10px; vertical-align: top">Homenick Jocelyn</span>
                        </Col>
                        <Col>
                            <span>Edit</span>
                        </Col>
                    </Row>

                    <Row>
                        <ul>
                            <li>
                                <h4>NRIC</h4>
                                <span>{{profile.nric}}</span>
                            </li>
                            <li>
                                <h4>Mobile</h4>
                                <span>{{profile.mobile}}</span>
                            </li>
                            <li>
                                <h4>Email</h4>
                                <span>{{profile.email}}</span>
                            </li>
                            <li>
                                <h4>Birth date</h4>
                                <span>{{profile.birth_time}}</span>
                            </li>
                            <li>
                                <h4>Remarks</h4>
                                <span>{{profile.remarks}}</span>
                            </li>
                        </ul>
                    </Row>
                </Card>
            </Col>
            <Col span="18" style="padding: 20px">
                <Row>
                    <div class="tab">
                        <Button :type="activeBtn===1?'success':'default'" :class="activeBtn===1?'activeBtn':'btn'" @click="activeBtn=1">Purchase</Button>
                        <Button :type="activeBtn===2?'success':'default'" :class="activeBtn===2?'activeBtn':'btn'" @click="activeBtn=2">Game demo</Button>
                    </div>

                    <Card v-if="activeBtn===1">
                        <Table :columns="purchase" :data="purchaseInput"></Table>
                        <Row type="flex" justify="space-around" align="middle" style="margin-top: 20px">
                            <Upload
                                    ref="upload"
                                    :show-upload-list="false"
                                    :format="['jpg','jpeg','png']"
                                    :max-size="2048"
                                    multiple
                                    type="drag"
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    style="display: inline-block;width:58px;">
                                <div style="width: 58px;height:58px;line-height: 58px;">
                                    <Icon type="camera" size="20"></Icon>
                                </div>
                            </Upload>
                            <Button type="primary">Submit</Button>
                        </Row>
                    </Card>

                    <div v-else>
                        <Card>
                            <Button type="primary">Game demo</Button>
                        </Card>
                    </div>
                </Row>

                <Row style="margin-top: 20px">
                    <div class="tab">
                        <Button
                                v-for="item in logTitleList"
                                :key="item.key"
                                :type="logActive===item.key?'success':'default'"
                                :class="logActive===item.key?'activeBtn':'btn'"
                                @click="logActive=item.key">
                            {{item.title}}
                        </Button>
                    </div>

                    <Card v-if="logActive === 'purchase'">
                        <Table :columns="purchaseLogsTitle" :data="purchaseLogs"></Table>
                    </Card>

                </Row>
            </Col>
        </Row>

    </div>
</template>

<script>
    export default {
        name: 'shopper',
        data() {
            return {
                search: '',
                profile: {
                    nric: '8368697', mobile: '+ 81 97039070', email: 'test@demo.com', birth_time: '1983-12-21', remarks: 'Illo illum culpa minus atque ea inventore.'
                },
                activeBtn: 1,
                purchase: [
                    {
                        key: 'store',
                        title: 'Store',
                        render: (h, params) => {
                            return h('Select', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View');
                        }
                    },
                    {
                        key: 'payment',
                        title: 'Payment',
                        render: (h, params) => {
                            return h('Select', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View');
                        }
                    },
                    {
                        key: 'amount',
                        title: 'Amount',
                        render: (h, params) => {
                            return h('Select', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View');
                        }
                    },
                    {
                        key: 'receipt',
                        title: 'Receipt No.',
                        render: (h, params) => {
                            return h('Select', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View');
                        }
                    },
                    {
                        key: 'date',
                        title: 'Purchase Date',
                        render: (h, params) => {
                            return h('Select', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View');
                        }
                    },
                    {
                        key: 'action',
                        title: 'Action',
                        render: (h) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small',
                                        icon: 'plus'
                                    },
                                    on: {
                                        click: () => {
                                            this.addPurchaseCol();
                                        }
                                    }
                                }),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                        icon: 'android-delete'
                                    },
                                    style: {
                                        marginLeft: '10px',
                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                })
                            ]);
                        }
                    },
                ],
                purchaseInput: [
                    {
                        store: '',
                    },
                ],
                logActive: 'purchase',
                logTitleList: [
                    {key: 'purchase', title: 'Purchase'},
                    {key: 'gwp', title: 'GWP'},
                    {key: 'lucky_draw', title: 'Lucky Draw'},
                    {key: 'sms', title: 'SMS'},
                    {key: 'email', title: 'Email'},
                    {key: 'consent', title: 'Consent'},
                    {key: 'membership', title: 'Membership'},
                ],
                purchaseLogs: [

                ],
                purchaseLogsTitle: [
                    {key: 'time', title: 'Transact Time'},
                    {key: 'amount', title: 'Amount'},
                    {key: 'concierge', title: 'Concierge'},
                    {key: 'remark', title: 'Remark'},
                    {
                        key: 'action',
                        title: 'Action',
                        render: (h) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small',
                                        icon: 'plus'
                                    },
                                    on: {
                                        click: () => {
                                            this.addPurchaseCol();
                                        }
                                    }
                                }),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                        icon: 'android-delete'
                                    },
                                    style: {
                                        marginLeft: '10px',
                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                })
                            ]);
                        }
                    },
                ],
            }
        },
        components: {
        },
        methods: {
            addPurchaseCol(){
                this.purchaseInput.push({store: '', });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.15);
        padding: 1rem !important;
        background-color: #f9fafc;
        .search-icon{
            float: left;
            margin-top: 5px;
            margin-left: 10px;
        }
        .search-input{
            width: 90%;
            height: 30px;
            line-height: 30px;
            border: 0;
            outline: none!important;
            float: left;
            text-indent: 10px;
            background-color: transparent;
            font-size: 16px;
            color: rgba(0,0,0,.5);
            opacity: 0.5;
        }
    }

    .profile{
        ul{
            list-style: none;
            li{
                padding: 5px 0;
            }
            span{
                color: rgba(0,0,0,0.3);
            }
        }
    }

    .tab{
        border-bottom: 1px solid #19be6b;
        height: 32px;
        padding-left: 10px;
        .btn{
            border: 0;
            color: rgba(0,0,0,.5);
            &:hover{
                background-color: transparent;
                color: rgba(0,0,0,.5);
            }
        }
        .activeBtn{
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

</style>