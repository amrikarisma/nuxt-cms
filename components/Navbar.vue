<template>
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink" id="mainNav">
        <div class="container">
            <NuxtLink to="/" class="navbar-brand">Nuxt CMS</NuxtLink>
            <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-0 mx-lg-1">
                        <NuxtLink to="/portofolio" class="nav-link py-3 px-0 px-lg-3 rounded">Portfolio</NuxtLink>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <NuxtLink to="/about" class="nav-link py-3 px-0 px-lg-3 rounded">About</NuxtLink>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <NuxtLink to="/contact" class="nav-link py-3 px-0 px-lg-3 rounded">Contact</NuxtLink>
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <NuxtLink to="/blog" class="nav-link py-3 px-0 px-lg-3 rounded">Blog</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>