<template functional> <!-- Flag this component to not have component definition (JS) -->
  <div>
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Vue-App</a>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
              <!-- Use router to navigate -->
              <router-link to="/" tag="li" exact-active-class="active"><a>Home</a></router-link>
              <router-link to="/customers" tag="li" exact-active-class="active"><a>Customers</a></router-link>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Replace content with current page url-->
    <router-view></router-view>
  </div>
</template>
