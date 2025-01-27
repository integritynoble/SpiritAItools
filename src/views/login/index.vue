<template>
  <div class="login-container">
    <iframe
      id="loginPage"
      class="card-panel"
      :src="LoginSrc"
      style="width: 100%; height: 99vh;"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth';

export default {
  name: 'LoginPage',
  data() {
    return {
      redirect: undefined,
      otherQuery: {},
      LoginUrl: process.env.VUE_APP_BASE_LOGIN,
      LoginSrc: '',
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  created() {
    this.LoginSrc = this.LoginUrl + '?webname=Spirit AItools&redirect=' + window.location.origin;
    window.addEventListener('message', this.handleMessage); // 添加事件监听器
  },
  unmounted() {
    console.log('Component unmounted');
    window.removeEventListener('message', this.handleMessage); // 移除事件监听器
  },
  methods: {
    handleMessage(event) {
      if (event.origin !== this.LoginUrl) return; // 确保消息来源可信
      if (event.data['AdminToken'] != null && event.data['AdminToken'] != '') {
        setToken(event.data['AdminToken']);
        this.$router.push({ path: this.redirect || '/', query: this.otherQuery });
      }
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
  },
};
</script>

<style scoped>
.login-container iframe {
  resize: both; /* 允许调整大小 */
  overflow: auto; /* 显示滚动条 */
}
</style>