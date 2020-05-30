<template>
<div>
    <header class="section-header">
        <nav class="navbar navbar-dark navbar-expand p-0 bg-primary">
            <div class="container">
                <ul class="navbar-nav d-none d-md-flex mr-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Delivery</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Payment</a></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link"> Call: +99812345678 </a></li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"> English </a>
                        <ul class="dropdown-menu dropdown-menu-right" style="max-width: 100px;">
                            <li><a class="dropdown-item" href="#">Arabic</a></li>
                            <li><a class="dropdown-item" href="#">Russian </a></li>
                        </ul>
                    </li>
                </ul> <!-- list-inline //  -->
            </div> <!-- navbar-collapse .// -->
            <!-- container //  -->
        </nav> <!-- header-top-light.// -->

        <section class="header-main border-bottom">
            <div class="">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-2">
                        <a href="#" class="brand-wrap">
                            <img class="logo" src="/logo.jpg">
                        </a> <!-- brand-wrap.// -->
                    </div>
                    <div class="col-lg-2 col-4">
                        <myExample />
                    </div>

                    <div class="col-lg-4 col-4 col-sm-12">
                        <form action="#" class="search">
                            <div class="input-group w-100">
                                <input type="text" class="form-control" placeholder="Search">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form> <!-- search-wrap .end// -->
                    </div> <!-- col.// -->
                    <div class="col-lg-3 col-sm-3 col-4">
                        <div class="widgets-wrap float-md-right">
                            <div class="widget-header  mr-3">
                                <a href="#" class="icon icon-sm rounded-circle border">
                                    <!-- <i class="fa fa-shopping-cart"></i> -->
                                    <!-- <v-icon>shopping_cart</v-icon> -->
                                    <myCart />
                                </a>
                                <span class="badge badge-pill badge-danger notify">0</span>
                            </div>
                            <div class="widget-header icontext">
                                <a href="#" class="icon icon-sm rounded-circle border">
                                    <!-- <i class="far fa-user"></i> -->
                                    <v-icon>account_circle</v-icon>
                                </a>
                                <div class="text">
                                    <span class="text-muted">Welcome!</span>
                                    <div>
                                        <a href="#">Sign in</a> |
                                        <a href="#"> Register</a>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- widgets-wrap.// -->
                    </div> <!-- col.// -->
                </div> <!-- row.// -->
            </div> <!-- container.// -->
        </section> <!-- header-main .// -->
    </header>

    <!-- <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
        <div class="container">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse" id="main_nav" style="">
                <myExample />
                <ul class="navbar-nav">
                    <v-spacer></v-spacer>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/shop">Shop</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/cart">Cart</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav> -->
</div>
</template>

<script>
import myExample from './example'
import myCart from "./cart";
export default {
    components: {
        myExample, myCart
    },
}
</script>

<style>
</style>
