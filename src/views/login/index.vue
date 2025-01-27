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

          // 打印调试信息
          console.log('路由变化 - redirect:', this.redirect);
          console.log('路由变化 - otherQuery:', this.otherQuery);
        }
      },
      immediate: true,
    },
  },
  created() {
    // 生成登录页面的 URL，并添加时间戳避免缓存
    this.LoginSrc = this.LoginUrl + '?webname=Spirit AItools&redirect=' + window.location.origin + '&t=' + Date.now();

    // 添加消息监听器
    window.addEventListener('message', this.handleMessage);

    // 打印调试信息
    console.log('LoginSrc:', this.LoginSrc);
    console.log('LoginUrl:', this.LoginUrl);
  },
  unmounted() {
    // 移除消息监听器
    window.removeEventListener('message', this.handleMessage);
    console.log('组件卸载 - 移除消息监听器');
  },
  methods: {
    handleMessage(event) {
      // 检查消息来源是否可信
      if (event.origin !== this.LoginUrl) {
        console.warn('消息来源不可信:', event.origin);
        return;
      }

      // 检查是否有 AdminToken
      if (event.data['AdminToken'] != null && event.data['AdminToken'] !== '') {
        console.log('设置 token:', event.data['AdminToken']);

        // 设置 token
        setToken(event.data['AdminToken']);

        // 获取跳转路径和参数
        const redirectPath = this.redirect || '/';
        console.log('跳转路径:', redirectPath);
        console.log('跳转参数:', this.otherQuery);

        // 执行跳转
        this.$router.push({ path: redirectPath, query: this.otherQuery })
          .then(() => {
            console.log('跳转成功');
          })
          .catch(err => {
            console.error('跳转失败:', err);
          });
      } else {
        console.warn('未收到有效的 AdminToken');
      }
    },

    getOtherQuery(query) {
      // 过滤掉 redirect 参数，保留其他参数
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