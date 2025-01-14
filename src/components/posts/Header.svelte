<script lang="ts">
  let { title, date }: { title: string, date: string } = $props();
</script>

<header>
  <p>{date}</p>
  <h1>{title}</h1>
</header>
