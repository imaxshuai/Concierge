<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-0" class="menu-item">
                        <Icon type="cloud" size="25"></Icon>
                        <span class="title">Shoptima</span>
                    </MenuItem>
                    <MenuItem v-for="item in siderList" :name="item.link" :key="item.link" class="menu-item">
                        <Icon :type="item.icon"></Icon>
                        <span>{{item.name}}</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header class="header">

                </Header>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="height: 600px">Content</div>
                    </Card>
                </Content>
            </Layout>
        </Layout>
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
                ]
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout{
        height: 100%;
        width: 100%;
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
            &.title{
                font-weight: 600;
                font-size: 15px;
            }
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
        box-shadow: 0 2px 3px 2px rgba(0,0,0,.1)
    }
</style>
