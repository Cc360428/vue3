<template>
  <div>
    <el-table
        :data="tableData"
        stripe style="width: 50%"
        :default-sort="{ prop: 'id', order: 'descending' }"
        row-key="id"
    >
      <el-table-column prop="id" label="Id" width="50" />
      <el-table-column prop="name" label="Name" v-show="true" width="180" />
      <el-table-column prop="sex" label="Sex" width="50" />
      <el-table-column prop="email" label="Email" width="180" />
      <el-table-column prop="images_url" label="Images" />
    </el-table>
    <!--    <el-pagination background :small="false" :total="1000"/>-->
  </div>
</template>

<script>
import { userList } from "@/api/user"

export default {
  name: "UserIndex",
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initUserList()
  },
  methods: {
    initUserList () {
      userList(1, 10).then(response => {
        console.log("用户", response)
        if (response.data.code === -1) {
          this.$message.error("参数错误 无法现实列表")
          return
        }

        let listUsers = response.data.ListUsers
        console.log("list ", listUsers)
        for (let i = 0; i < listUsers.length; i++) {
          this.tableData[i] = {
            id: listUsers[i].id,
            name: listUsers[i].name,
            email: listUsers[i].email,
            images_url: listUsers[i].images_url,
            sex: listUsers[i].sex,
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>