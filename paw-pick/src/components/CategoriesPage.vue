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

    <!-- Каталог -->
    <section class="catalog">
        <div class="container catalog__inner">
        <!-- Sidebar Filters -->
        <aside class="catalog__sidebar">
            <h2 class="catalog__sidebar-title">Фильтры</h2>

            <div class="filter-group">
            <p class="filter-group__title">Пол</p>
            <label class="filter-group__item">
                <input type="checkbox" /> Мужской
            </label>
            <label class="filter-group__item">
                <input type="checkbox" /> Женский
            </label>
            </div>

            <div class="filter-group">
            <p class="filter-group__title">Окрас</p>
            <label class="filter-group__item">
                <input type="checkbox" /> Рыжий
            </label>
            <label class="filter-group__item">
                <input type="checkbox" /> Черный
            </label>
            <label class="filter-group__item">
                <input type="checkbox" /> Черный и белый
            </label>
            <label class="filter-group__item">
                <input type="checkbox" /> Серый
            </label>
            <label class="filter-group__item">
                <input type="checkbox" /> Бежевый
            </label>
            </div>

            <div class="filter-group filter-group_price">
            <p class="filter-group__title">Цена</p>
            <input type="number" placeholder="Мин" class="filter-group__price-input" />
            <input type="number" placeholder="Макс" class="filter-group__price-input" />
            </div>

            <div class="filter-group">
            <p class="filter-group__title">Размер</p>
            <label class="filter-group__item">
                <input type="checkbox" /> Маленький
            </label>
            <label class="filter-group__item">
                <input type="checkbox" /> Средний
            </label>
            <label class="filter-group__item">
                <input type="checkbox" /> Крупный
            </label>
            </div>
        </aside>

        <!-- Main Content -->
        <div class="catalog__main">
            <div class="catalog__header">
            <h2 class="catalog__title">Собаки</h2>
            <span class="catalog__count">{{ pets.length }} щенка</span>
            <select class="catalog__sort">
                <option>Sort by: Popular</option>
                <option>Price ↑</option>
                <option>Price ↓</option>
            </select>
            </div>

            <div class="catalog__grid">
            <div v-for="pet in pets" :key="pet.id" class="card" 
                @click="goToDetailed"
                style="cursor: pointer;"
            >
                <img :src="pet.image" :alt="pet.name" class="card__image" />
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
import { useRouter } from 'vue-router'

const router = useRouter()

import pets from '@/assets/data/pets.json'

function goToDetailed() {
  router.push('/detailed')
}
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

/* Кнопка */

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

/* Каталог */
.catalog {
  padding: 4rem 0;
  background-color: #fff;
  text-align: start;
}

.catalog__inner {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

/* Sidebar */
.catalog__sidebar {
  flex: 0 0 250px;
}

.catalog__sidebar-title {
  font-size: 1.25rem;
  color: #01303f;
  margin-bottom: 1rem;
}

.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #01303f;
  margin-bottom: 0.5rem;
}

.filter-group__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 0.25rem;
}

.filter-group_price .filter-group__price-input {
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: 112px;
  margin-right: 8px;
}

/* Main area */
.catalog__main {
  flex: 1;
}

.catalog__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.catalog__title {
  font-size: 1.5rem;
  color: #01303f;
  margin: 0;
}

.catalog__count {
  font-size: 1rem;
  color: #555;
}

.catalog__sort {
  margin-left: auto;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background: #fff;
  font-size: 0.875rem;
}

/* Grid of cards */
.catalog__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

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