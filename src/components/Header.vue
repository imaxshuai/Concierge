<template>
    <Row class="header">
        <Col>
            <h3>Demo mall 1</h3>
        </Col>
        <Col>
            <h3>Couter at level 2</h3>
        </Col>
        <Col>
            <Dropdown style="margin-left: 20px">
                <Button type="primary">
                    下拉菜单
                    <Icon type="arrow-down-b"></Icon>
                </Button>
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
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header{
        width: 1000px;
    }
</style>