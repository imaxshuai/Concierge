<template>
    <Row class="container">
        <img src="../../assets/images/logo.png" />

        <Row type="flex" justify="center" >
            <Row type="flex" justify="center" class="login-box">
                <h1 class="title">Concierge Login</h1>
                <Col span="17">
                    <Form :model="form" class="form">
                        <FormItem class="form-item">
                            <Input v-model="form.username" placeholder="Username/Email" />
                        </FormItem>
                        <FormItem class="form-item">
                            <Input type="password" v-model="form.password" placeholder="Password" />
                        </FormItem>
                        <FormItem align="right" class="form-item">
                            <Checkbox v-model="form.remember">Keep me signed in</Checkbox>
                        </FormItem>
                        <FormItem>
                            <Button size="large" @click="login(form)" long type="success">Submit</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </Row>

        <Modal v-model="conciergeModal" @on-cancel="cancel">
            <p slot="header" class="header">
                <Icon type="flag" color="#19be6b" style="margin-right: 10px"></Icon>
                <span>Choose concierge</span>
            </p>
            <div>
                <Form :model="form" :label-width="80" style="width: 350px;" >
                    <FormItem label="Mall">
                        <Select v-model="form.mall_id" clearable>
                            <Option v-for="item in mallList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Counter">
                        <Select v-model="form.counter_id" clearable>
                            <Option v-for="item in counterList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Terminal">
                        <Select v-model="form.terminal_id" clearable>
                            <Option v-for="item in terminalList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                        </Select>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer">
                <Button type="success" size="large" long :loading="conciergeLoading" @click="submit(form)">Submit</Button>
            </div>
        </Modal>

    </Row>
</template>

<script>
    export default {
        name: "Login",
        mounted(){

        },
        data(){
            return {
                form: {username: '', password: '', remember: '', mall_id: '', counter_id: '', terminal_id: ''},
                conciergeLoading: false,
                conciergeModal: false,
                mallList: [
                    { id: 1, name: 'Mall 1' },
                    { id: 2, name: 'Mall 2' }
                ],
                counterList: [
                    { id: 1, name: 'Counter 1' },
                    { id: 2, name: 'Counter 2' },
                    { id: 3, name: 'Counter 3' }
                ],
                terminalList: [
                    { id: 1, name: 'Terminal 1' },
                    { id: 2, name: 'Terminal 2' },
                    { id: 3, name: 'Terminal 3' },
                    { id: 4, name: 'Terminal 4' },
                ],
            }
        },
        methods: {
            login(data){
                console.log(data);
                this.conciergeModal = true
            },
            submit(data){
                console.log(data)
            },
            cancel(){
                this.$Notice.warning({
                    title: 'System Notification.',
                    desc: 'submit fail.'
                });
            }
        }
    }
</script>

<style scoped>
    .container{
        padding: 50px;
        background: url("../../assets/images/signup-bg.png") no-repeat;
        background-size: cover;
        height: 100%;
    }
    .login-box{
        width: 500px;
        background: #fff;
        box-shadow: 0 0 15px #eee;
        padding: 10px 30px;
        border-radius: 5px;
    }
    .title{
        height: 50px;
        width: 100%;
        line-height: 50px;
        border-bottom: 1px solid #eee;
    }
    .form{
        margin: 20px;
    }
    .form-item{
        margin-bottom: 20px;
    }
    .header{
       font-size: 18px;
    }
</style>