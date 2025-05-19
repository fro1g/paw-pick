<template>
  <div>
    <header class="header">
      <div class="container header__inner" style="position: relative; z-index: 99; margin-top: 8px;">
        <div style="display: flex; align-items: center;">
          <a href="/" class="header__logo"><img src="../assets/logo.svg" alt=""></a>
          <nav class="header__nav">
            <ul class="nav__list">
              <li class="nav__item"><a href="/" class="nav__link">Главная</a></li>
              <li class="nav__item"><a href="/categories" class="nav__link">Категории</a></li>
            </ul>
          </nav>
        </div>
        <form class="header__search" action="/search" method="get">
          <input
            type="text"
            name="q"
            class="search__input"
            placeholder="Ищите питомца"
          />
          <button type="submit" class="search__button">Поиск</button>
        </form>
      </div>
    </header>

    <!-- Детально -->
    <section class="dog-detail">
        <div class="container dog-detail__inner">
        <!-- Gallery -->
        <div class="dog-detail__gallery">
            <!-- Главная фотография -->
            <img
            src="/dogs/dog1.png"
            alt="Сиба-ину"
            class="dog-detail__main-img"
            />
            <!-- Миниатюры -->
            <div class="dog-detail__thumbs">
            <img src="/dogs/dog2.png" class="dog-detail__thumb" />
            <img src="/dogs/dog3.png" class="dog-detail__thumb" />
            <img src="/dogs/dog4.png" class="dog-detail__thumb" />
            <img src="/dogs/dog5.png" class="dog-detail__thumb" />
            </div>
        </div>

        <!-- Информация -->
        <div class="dog-detail__info">
            <h1 class="dog-detail__name">Сиба-ину</h1>
            <p class="dog-detail__price">52 000 ₽</p>
            <button class="hero__button">Контакты</button>

            <dl class="dog-detail__props">
            <dt class="dog-detail__label">Пол</dt>
            <dd class="dog-detail__value">Муж</dd>

            <dt class="dog-detail__label">Возраст</dt>
            <dd class="dog-detail__value">2 месяца</dd>

            <dt class="dog-detail__label">Размер</dt>
            <dd class="dog-detail__value">Маленький</dd>

            <dt class="dog-detail__label">Окрас</dt>
            <dd class="dog-detail__value">Рыжий с белым</dd>

            <dt class="dog-detail__label">Вакцинация</dt>
            <dd class="dog-detail__value">Да</dd>

            <dt class="dog-detail__label">Паспорт</dt>
            <dd class="dog-detail__value">Да</dd>

            <dt class="dog-detail__label">Месторасположение</dt>
            <dd class="dog-detail__value">Москва</dd>

            <dt class="dog-detail__label">Дата публикации</dt>
            <dd class="dog-detail__value">12.11.2024</dd>

            <dt class="dog-detail__label">Примечание</dt>
            <dd class="dog-detail__value">
                Хорошее телосложение<br/>
                Приучен к пеленкам<br/>
                Отец — чемпион России 2023 г.
            </dd>
            </dl>
        </div>
        </div>
    </section>

    <!-- Хозяева -->
    <section class="categories">
      <div class="container categories__inner">
        <h2 class="categories__title">Хозяева наших питомцев</h2>
        <div class="categories__grid">
          <div
            v-for="own in owners"
            :key="own.id"
            class="category-card"
          >
            <img
              :src="own.image"
              :alt="own.name"
              class="category-card__img"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Больше вариантов -->
    <section class="pets">
      <div class="container pets__inner" style="max-width: 1180px;">
        <div class="pets__header">
          <h2 class="section-title">Больше вариантов</h2>
        </div>

        <div class="cards">
          <div
            v-for="pet in pets"
            :key="pet.id"
            class="card"
          >
            <img
              class="card__image"
              :src="pet.image"
              :alt="pet.name"
            />
            <div class="card__content">
              <h3 class="card__title">{{ pet.name }}</h3>
              <p class="card__info">
                Пол: {{ pet.gender }} &bull; Возраст: {{ pet.age }}
              </p>
              <p class="card__price">{{ pet.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Рассылка -->
    <section class="subscribe">
      <div class="container subscribe__box">
        <div class="subscribe__text">
          Следите за новыми питомцами<br />
          и полезными советами
        </div>
        <form class="subscribe__form" @submit.prevent="onSubmit">
          <input
            type="email"
            v-model="email"
            class="subscribe__input"
            placeholder="Укажите вашу почту"
            required
          />
          <button type="submit" class="subscribe__button">
            Подписаться
          </button>
        </form>
      </div>
    </section>

  </div>
</template>

<script setup>
import owners from '@/assets/data/owners.json'
import pets from '@/assets/data/pets.json'
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0;
}

/* Header */
.header {
  padding: 1rem 0;
  margin-top: -60px;
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__logo {
  font-size: 1.75rem;
  font-weight: bold;
  color: #01303f;
  text-decoration: none;
}
.header__nav .nav__list {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 48px;
  margin-top: -8px;
  font-weight: 800;
}
.nav__link {
  color: #01303f;
  text-decoration: none;
  font-size: 1rem;
}
.header__search {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.search__input {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  width: 250px;
  height: 44px;
  outline: none;
  background-image: url('../assets/search.png');
  background-repeat: no-repeat;
  background-position: 1rem center;  /* можно также: 1rem center */
  background-size: 1rem 1rem;
  background-color: #fff;
  padding-left: 3rem;
}
.search__button {
  padding: 0.5rem 1rem;
  background-color: #01303f;
  color: #fff;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  height: 44px;
  width: 106px;
}
.search__button:hover {
  background-color: #021f2d;
}

.promo {
  position: relative;
  background-color: #003459;
  overflow: hidden;
  padding: 4rem 0;
  width: 1180px;
  margin-left: calc(50% - 590px);
  margin-top: 24px;
  border-radius: 20px;
  height: 378px;
}
.promo__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.promo__inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
  color: #003459;
  text-align: end;
  margin-right: 80px;
}
.promo__content {
  max-width: 50%;
  margin-top: -12px;
}
.promo__title {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.promo__subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.promo__button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #fde8d0;
  color: #01303f;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}
.promo__button:hover { opacity: 0.8; }
.promo__button-icon {
  margin-left: 0.5rem;
}
.promo__image img {
  display: block;
  width: 100%;
  max-width: 500px;
  height: auto;
}

/* кнопка */
.hero__button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #01303f;
  color: #fff;
  font-weight: 500;
  border-radius: 1.5rem;
  text-decoration: none;
  transition: background-color 0.2s;
  height: 48px;
  margin-bottom: 24px;
}
.hero__button:hover {
  background-color: #021f2d;
}
.hero__button-icon {
  margin-left: 0.5rem;
  font-size: 1rem;
}

/* Детально */
.dog-detail {
  padding: 4rem 0;
  background: #fff;
}

.dog-detail__inner {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

/* Галерея */
.dog-detail__gallery {
  flex: 1;
}

.dog-detail__main-img {
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
}

.dog-detail__thumbs {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.dog-detail__thumb {
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  object-fit: cover;
  cursor: default;
}

/* Информация */
.dog-detail__info {
  flex: 1;
  text-align: start;
}

.dog-detail__name {
  font-size: 2rem;
  color: #01303f;
  margin: 0 0 0.5rem;
}

.dog-detail__price {
  font-size: 1.5rem;
  font-weight: 600;
  color: #01303f;
  margin: 0 0 1.5rem;
}

.dog-detail__contact-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #01303f;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
}

.dog-detail__props {
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 1.4rem;
  column-gap: 4rem;
}

.dog-detail__label {
  font-size: 0.875rem;
  color: #555;
}

.dog-detail__value {
  font-size: 0.875rem;
  color: #333;
}

/* Владельцы */
.categories {
  padding: 4rem 0;
  text-align: start;
  font-weight: 800;
}

.categories__inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 1180px;
}

.categories__title {
  font-size: 1.5rem;
  color: #01303f;
  margin: 0;
}

/* grid of cards */
.categories__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

/* each category card */
.category-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.category-card__img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

.category-card__name {
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 32px;
  font-weight: 800;
  text-shadow: 0 2px 6px rgba(0,0,0,0.5);
  pointer-events: none;
}

/* Больше враиантов */
.pets {
  padding: 4rem 0;
  /* background-color: #fff; */
  margin-top: 20px;
}
.pets__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.section-title {
  font-size: 1.5rem;
  color: #01303f;
  margin: 0;
  font-weight: 800;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

/* Карточка питомца */
.card {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: start;
}
.card__image {
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}
.card__content {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card__title {
  font-size: 1.125rem;
  color: #01303f;
  margin: 0 0 0.5rem;
}
.card__info {
  font-size: 0.875rem;
  color: #555;
  margin: 0 0 1rem;
}
.card__price {
  font-size: 1rem;
  font-weight: 800;
  color: #01303f;
  margin: 0;
}

/* Рассылка */
.subscribe {
  background-color: #FED9B8;
  padding: 3rem 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  height: 290px;
}

.subscribe__box {
  background-color: #01303f;
  border-radius: 0.75rem;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 136px;
  margin-top: 32px;
}

.subscribe__text {
  font-size: 1.25rem;
  line-height: 1.4;
  color: #fff;
  font-weight: 800;
  max-width: 50%;
  text-align: left;
}

.subscribe__form {
  display: flex;
  gap: 0.5rem;
  flex: 1;
}

.subscribe__input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
}

.subscribe__button {
  padding: 0.5rem 1.25rem;
  background-color: #FFFFFF;
  color: #01303f;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.2s;
  height: 44px;
}

.subscribe__button:hover {
  opacity: 0.9;
}
</style>