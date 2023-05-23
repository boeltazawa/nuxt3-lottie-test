<script setup lang="ts">
const prop = defineProps({
  error: Object,
})

onMounted(() => {
})
const error = useError()
const statusCode =  error.value && 'statusCode' in error.value ? error.value.statusCode : '200'
const errorText = ref({
  heading: '',
  text: '',
  paragraph: ''
})
if(statusCode == 400) {
    errorText.value.heading = 'Bad Request'
    errorText.value.text = 'リクエストにエラーがありました。'
    errorText.value.paragraph = 'いつもBOEL Inc.オフィシャルサイトをご覧頂き、<br class="br--show-sp569" />誠にありがとうございます。<br />大変恐れ入りますが、お客様がアクセスされたページ<br class="br--show-sp569" />またはファイルは見つかりませんでした。<br />入力しているURLが正しいか確認お願いします。'
  } else if(statusCode == 401) {
    errorText.value.heading = 'Unauthorixed'
    errorText.value.text = '認証に失敗しました。'
    errorText.value.paragraph = 'いつもBOEL Inc.オフィシャルサイトをご覧頂き、<br class="br--show-sp569" />誠にありがとうございます。<br />大変恐れ入りますが、お客様がアクセスされたページ<br class="br--show-sp569" />またはファイルの認証に失敗しました。<br />入力いただいたID・パスワードが正しいか確認お願いします。'
  } else if(statusCode == 403) {
    errorText.value.heading = 'Forbidden'
    errorText.value.text = 'アクセス権がありません。'
    errorText.value.paragraph = 'いつもBOEL Inc.オフィシャルサイトをご覧頂き、<br class="br--show-sp569" />誠にありがとうございます。<br />大変恐れ入りますが、お客様がアクセスされたページ<br class="br--show-sp569" />またはファイルにアクセスする権限がありません。<br />入力しているURLが正しいか確認お願いします。'
  } else if(statusCode == 404) {
    errorText.value.heading = 'PAGE NOT FOUND'
    errorText.value.text = 'お探しのページが見つかりませんでした'
    errorText.value.paragraph = 'いつもBOEL Inc.オフィシャルサイトをご覧頂き、<br class="br--show-sp569" />誠にありがとうございます。<br />大変恐れ入りますが、お客様がアクセスされたページ<br class="br--show-sp569" />またはファイルは見つかりませんでした。<br />お探しのページは、一時的に使用できなくなっているか、<br class="br--show-sp569" />削除または名前が変更された可能性がございます。'
  } else if(statusCode == 500) {
    errorText.value.heading = 'INTERNAL SERVER ERROR'
    errorText.value.text = 'サーバーエラーが発生しました。'
    errorText.value.paragraph = 'いつもBOEL Inc.オフィシャルサイトをご覧頂き、<br class="br--show-sp569" />誠にありがとうございます。<br />大変恐れ入りますが、時間をあけて再度アクセスをお願いします。'
  } else if(statusCode == 503) {
    errorText.value.heading = 'Service Unavailable'
    errorText.value.text = 'サーバーが一時的に利用できなくなっています。'
    errorText.value.paragraph = 'いつもBOEL Inc.オフィシャルサイトをご覧頂き、<br class="br--show-sp569" />誠にありがとうございます。<br />お客様がお探しのページは一時的に使用できなくなっております。<br class="br--show-sp569" />大変恐れ入りますが、時間をあけて再度アクセスをお願いします。'
  } else if(statusCode == 504) {
    errorText.value.heading = 'Gateway Timeout'
    errorText.value.text = '接続がタイムアウトしました。'
    errorText.value.paragraph = 'いつもBOEL Inc.オフィシャルサイトをご覧頂き、<br class="br--show-sp569" />誠にありがとうございます。<br />サーバーとの接続がタイムアウトしました。<br class="br--show-sp569" />大変恐れ入りますが、時間をあけて再度アクセスをお願いします。'
}
</script>

<template>
  <NuxtLayout name="page">
    <div>
      <h2>
        <span>{{statusCode}}</span>
        <span>{{errorText.heading}}</span>
      </h2>
      <p >{{errorText.text}}</p>
      <p v-html="errorText.paragraph"></p>
    </div>
  </NuxtLayout>
</template>

