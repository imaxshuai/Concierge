<template>
    <div>
        <div class="layout" v-if="fullRoute.indexOf($route.name)<0">
            <Layout :style="{minHeight: '100vh'}">
                <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses"  @on-select="toLink">
                        <MenuItem name="/" class="menu-item title">
                            <Icon type="cloud" size="25"></Icon>
                            <span>Shoptima</span>
                        </MenuItem>

                        <div style="text-align: center; margin: 10px 0;" v-if="!isCollapsed">
                            <Button type="success" icon="android-person-add" @click="shopperModal=true">New Shopper</Button>
                        </div>
                        <div style="text-align: center; margin: 10px 0;" v-if="isCollapsed">
                            <Icon type="android-person-add" color="#19be6b" size="20" style="margin-right: 13px"></Icon>
                        </div>

                        <MenuItem v-for="item in siderList" :name="item.link" :key="item.link" class="menu-item">
                            <Icon :type="item.icon"></Icon>
                            <span>{{item.name}}</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header class="header">
                        <Row type="flex" justify="space-between">
                            <Col>
                                <h2>Dashboard</h2>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <a href="javascript:void(0)" class="dropdown-a">
                                        Administrator
                                        <Icon type="arrow-down-b"></Icon>
                                    </a>
                                    <DropdownMenu slot="list">
                                        <DropdownItem>驴打滚</DropdownItem>
                                        <DropdownItem>炸酱面</DropdownItem>
                                        <DropdownItem disabled>豆汁儿</DropdownItem>
                                        <DropdownItem>冰糖葫芦</DropdownItem>
                                        <DropdownItem divided>北京烤鸭</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Header>
                    <Content>
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
            <Modal
                    v-model="shopperModal"
                    title="Common Modal dialog box title"
                    @on-ok="ok"
                    @on-cancel="cancel"
                    width="800px"
            >
                <Form :model="form" :label-width="150">
                    <Row>
                        <Col span="18">
                            <FormItem label="Email">
                                <Input v-model="form.email" placeholder="Enter something..."></Input>
                            </FormItem>
                            <FormItem label="Mobile">
                                <Input v-model="form.mobile" placeholder="Enter something..."></Input>
                            </FormItem>
                            <FormItem label="Family Name">
                                <Input v-model="form.given_name" placeholder="Enter something..."></Input>
                            </FormItem>
                            <FormItem label="Given Name">
                                <Input v-model="form.family_name" placeholder="Enter something..."></Input>
                            </FormItem>
                            <FormItem label="NRIC">
                                <Input v-model="form.nric" placeholder="Enter something..."></Input>
                            </FormItem>
                            <FormItem label="Radio">
                                <RadioGroup v-model="form.gender">
                                    <Radio label="male">Male</Radio>
                                    <Radio label="female">Female</Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="Birthday">
                                <DatePicker type="date" placeholder="Select date" v-model="form.birthday"></DatePicker>
                            </FormItem>
                            <FormItem label="Text">
                                <Input v-model="form.note" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                            </FormItem>

                            <FormItem label="Checkbox">
                                <CheckboxGroup v-model="form.PDPA">
                                    <Checkbox label="Eat"></Checkbox>
                                    <Checkbox label="Sleep"></Checkbox>
                                    <Checkbox label="Run"></Checkbox>
                                    <Checkbox label="Movie"></Checkbox>
                                </CheckboxGroup>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
        <div v-else>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                isCollapsed: false,
                siderList: [
                    { name: 'Dashboard', link: 'dashboard', icon: 'ios-speedometer'},
                    { name: 'Shopper', link: 'shopper', icon: 'ios-people'},
                    { name: 'Voucher', link: 'voucher', icon: 'card'},
                    { name: 'GWP', link: 'gwp', icon: 'cube'},
                    { name: 'Reward', link: 'reward', icon: 'trophy'},
                ],
                shopperModal: false,
                form: {
                    family_name: '',
                    given_name: '',
                    nric: '',
                    gender: '',
                    birthday: '',
                    note: '',
                    email: '',
                    mobile: '',
                },
                fullRoute: ['login', 'about'],
            };
        },
        mounted(){
            
        },
        methods: {
            ok: function () {
                alert('success')
            },
            cancel: function () {
                alert('fail')
            },
            toLink(link){
                this.$router.push({path: link});
            }
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
        }
    }
</script>

<style lang="scss" scoped>
    .layout{
        height: 100%;
        width: 100%;
    }
    .title{
        font-weight: 600;
        font-size: 15px;
        background: #363e4f;
        height: 64px;
        box-shadow: 0 2px 3px 2px rgba(0,0,0,.1)
    }
    .menu-item{
        span{
            display: inline-block;
            overflow: hidden;
            width: 69px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }

        i{
            transform: translateX(0px);
            transition: font-size .2s ease, transform .2s ease;
            vertical-align: middle;
            font-size: 16px;
        }
    }
    .collapsed-menu{
        span{
            width: 0px;
            transition: width .2s ease;
        }
        i{
            transform: translateX(5px);
            transition: font-size .2s ease .2s, transform .2s ease .2s;
            vertical-align: middle;
            font-size: 22px;
        }
    }

    //header
    .header{
        background: #fff;
        box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
        .dropdown-a{
            color: #666;
            font-size: 14px;
        }
    }
</style>
