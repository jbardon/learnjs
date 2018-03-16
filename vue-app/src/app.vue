<template functional> <!-- Flag this component to not have component definition (JS) -->
  <div>
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Vue-App</a>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
              <!-- Use router to navigate -->
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/customers">Customers</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Replace content with current page url-->
    <router-view></router-view>
  </div>
</template>
