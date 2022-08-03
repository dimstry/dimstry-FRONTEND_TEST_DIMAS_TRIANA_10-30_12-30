<script setup lang="ts">
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api/'
</script>


<template>
 <div class="row justify-content-md-center">
    <div class="col-12">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form method="POST">
            <div class="form-group">
              <label for="username">username address</label>
              <input type="name" class="form-control" placeholder="username..">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" placeholder="Password..">
            </div>
            <button type="submit" class="btn btn-primary" onclick="">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
