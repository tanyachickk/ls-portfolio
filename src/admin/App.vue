<template lang="pug">
  .app
    .login-page
      .login-page__form
        login-form
    .inner-page
      .inner-page__panel
        header.header
          .header__avatar
            img.header__image(src="../images/content/author.jpg")
          .header__content
            .header__username Татьяна Курочкина
            .header__title Панель администрирования
            a.header__exit-link Выйти
        .inner-page__navbar
          .tabs
            - var tabs = ['Обо мне', 'Работы', 'Отзывы'];
              each tab, i in tabs
                a.tabs__item(class=`${i === 0 ? 'tabs__item_active' : ''}`) #{tab}
      .inner-page__content
        .about-page
          .about-page__header
            h1.page-title Блок "Обо мне"
            .about-page__add-group
              button.basic-button.basic-button_small.basic-button_flat.basic-button_circle.basic-button_primary
                .basic-button__icon-wrapper
                  icon.basic-button__icon(name="plus")
                .basic-button__text Добавить группу
          .about-page__content
</template>

<script>
import Icon from './components/Icon.vue';
import LoginForm from './components/LoginForm.vue';

export default {
  components: {
    Icon,
    LoginForm
  }
}
</script>


<style lang="postcss">
@import './styles/main.pcss';
</style>