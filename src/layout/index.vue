<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside/>
        </el-aside>
        <el-container>
          <el-main>
            <Main/>
          </el-main>
          <el-footer>
            <Footer/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>

import {
  Aside,
  Footer,
  Header,
  Main
} from './components'

export default {
  name: 'LayoutInfo',
  components: {
    Aside,
    Footer,
    Header,
    Main
  }
}

</script>

