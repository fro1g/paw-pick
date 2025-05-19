<template>
  <div class="header_page">
    <!-- Header -->
    <header class="header">
      <div class="container header__inner" style="position: relative; z-index: 99; margin-top: 8px;">
        <div style="display: flex; align-items: center;">
          <a href="/" class="header__logo"><img src="../assets/logo.svg" alt=""></a>
          <nav class="header__nav">
            <ul class="nav__list">
              <li class="nav__item"><a href="/" class="nav__link">Главная</a></li>
              <li class="nav__item"><a @click="goToCategories" class="nav__link">Категории</a></li>
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
      <img class="bg-cover" src="../assets/header_bg.svg" alt="">
    </header>

    <!-- Hero -->
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <h1 class="hero__title">
            Твой питомец<br>
            ждёт тебя
          </h1>
          <p class="hero__subtitle">
            Домашние питомцы — это радость, верность и море счастья.<br>
            У нас более 200+ разных питомцев, которые ждут вас!
          </p>
          <a @click="goToCategories" class="hero__button">
            Категории
            <span class="hero__button-icon">▶︎</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Животные -->
    <section class="pets">
      <div class="container pets__inner" style="max-width: 1180px;">
        <div class="pets__header">
          <h2 class="section-title">Познакомьтесь с питомцами</h2>
          <a @click="goToCategories" class="hero__button" style="background-color: none; border: 1px solid #01303f;">
            Смотреть все
            <span class="hero__button-icon" style="font-size: 28px; line-height: 36px;">›</span>
          </a>
        </div>

        <div class="cards">
          <div
            v-for="pet in pets"
            :key="pet.id"
            class="card"
            @click="goToDetailed"
            style="cursor: pointer;"
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

    <!-- Рекламный блок -->
     <section class="promo">
      <!-- Абсолютный фон (shape-иллюстрация) -->
      <div class="promo__bg"><img src="../assets/middle_bg.svg" alt=""></div>

      <!-- Контент поверх фонового слоя -->
      <div class="container promo__inner">
        <div class="promo__content">
          <h1 class="promo__title">
            Твой питомец<br />
            ждёт тебя
          </h1>
          <p class="promo__subtitle">
            Домашние питомцы — это радость, верность <br />
            и море счасть. У нас более 200+ разных питомцев, <br />
            которые ждут вас!
          </p>
          <a @click="goToCategories" class="hero__button">
            Категории
            <span class="promo__button-icon">▶︎</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Категории -->
    <section class="categories">
      <div class="container categories__inner">
        <h2 class="categories__title">Категории</h2>
        <div class="categories__grid">
          <div
            v-for="cat in categories"
            :key="cat.id"
            class="category-card"
          >
            <img
              :src="cat.image"
              :alt="cat.name"
              class="category-card__img"
            />
            <h3 class="category-card__name">{{ cat.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Лерн -->
    <section class="learn">
      <div class="container learn__inner">
        <div class="learn__header">
          <h2 class="learn__title">Узнайте больше о питомцах</h2>
          <a @click="goToCategories" class="hero__button">
            Смотреть все
            <span class="learn__button-icon">›</span>
          </a>
        </div>

        <div class="learn__grid">
          <div
            v-for="item in articles"
            :key="item.id"
            class="learn-card"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="learn-card__image"
            />
            <span class="learn-card__tag">{{ item.tag }}</span>
            <h3 class="learn-card__title">{{ item.title }}</h3>
            <p class="learn-card__excerpt">{{ item.excerpt }}</p>
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
import pets from '@/assets/data/pets.json'
import categories from '@/assets/data/categories.json'
import articles from '@/assets/data/articles.json'

import { useRouter } from 'vue-router'

const router = useRouter()

function goToCategories() {
  router.push('/categories')
}

function goToDetailed() {
  router.push('/detailed')
}
</script>

<style scoped>
.header_page {
  background-color: #FED9B8; 
  height: 695px;
  margin-top: -60px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

.bg-cover {
  position: absolute; 
  top: 0px; 
  left: calc(50% - 720px); 
  z-index: 0;
}

/* Общий контейнер */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0;
}

/* Header */
.header {
  padding: 1rem 0;
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

/* Hero */
.hero {
  /* background-color: #fde8d0; */
  padding: 4rem 0;
  position: relative;
}
.hero__inner {
  display: flex;
  align-items: left;
  justify-content: space-between;
  gap: 2rem;
  text-align: start;
}
.hero__content {
  max-width: 50%;
}
.hero__title {
  font-size: 3rem;
  line-height: 1.2;
  color: #01303f;
  margin: 0 0 1rem;
  font-weight: 800;
}
.hero__subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #01303f;
  margin-bottom: 2rem;
}
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
}
.hero__button:hover {
  background-color: #021f2d;
}
.hero__button-icon {
  margin-left: 0.5rem;
  font-size: 1rem;
}
.hero__image img {
  display: block;
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 1rem;
}

/* Питомцы */
.pets {
  padding: 4rem 0;
  /* background-color: #fff; */
  margin-top: 190px;
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

/* Рекламный блок */
.promo {
  position: relative;
  background-color: #003459;
  overflow: hidden;
  padding: 4rem 0;
  width: 1180px;
  margin-left: calc(50% - 590px);
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

/* Категории */
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

.learn {
  padding: 4rem 0;
  background-color: #fff;
}

.learn__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.learn__title {
  font-size: 1.5rem;
  color: #01303f;
  margin: 0;
}

.learn__button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #01303f;
  border-radius: 0.5rem;
  color: #01303f;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.2s;
}
.learn__button:hover {
  background-color: rgba(1, 48, 63, 0.1);
}
.learn__button-icon {
  margin-left: 0.5rem;
}

/* сетка карточек */
.learn__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.5rem;
}

/* сама карточка */
.learn-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 500px; 
}

.learn-card__image {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

.learn-card__tag {
  display: inline-block;
  margin: 1rem;
  padding: 0.25rem 0.45rem;
  background-color: #00A7E7;
  color: #fff;
  font-size: 0.75rem;
  border-radius: 0.5rem;
  width: 64px;
}

.learn-card__title {
  font-size: 1.125rem;
  color: #01303f;
  margin: 0 1rem 0.5rem;
}

.learn-card__excerpt {
  font-size: 0.875rem;
  color: #555;
  margin: 0 1rem 1rem;
  flex-grow: 1;
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