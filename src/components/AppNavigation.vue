<template>
  <nav>
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo">Приложение на Vue</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/" tag="a"> Cписок</router-link></li>
        <li><router-link to="/add" tag="a">Добавить</router-link></li>
      </ul>
    </div>
  </nav>
</template>
<style type="text/css">
.router-link-exact-active {
  background-color: #c3595d;
}
</style>
