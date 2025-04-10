<script>
    export let data;
  </script>
  <nav>
    <a href="/">Home</a>
    <a href="/customer">Customer</a>
    <a href="/clerk">Sales Clerk</a>
    <a href="/manager">Manager</a>
  </nav>
  
  <slot />
  
  <style>
    nav {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #eee;
    }
    a {
      text-decoration: none;
    }
  </style>