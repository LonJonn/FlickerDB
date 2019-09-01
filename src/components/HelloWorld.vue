<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>
			For a guide and recipes on how to configure / customize this
			project,
			<br />
			check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener">
				vue-cli documentation
			</a>
			.
		</p>
		<h3 class="text-blue-500">Installed CLI Plugins</h3>
		<h3>Essential Links</h3>
		<pre style="text-align: left; width: 30%; margin: 0 auto;">{{
			users
		}}</pre>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { db } from "../firebase";

export default Vue.extend({
	name: "HelloWorld",
	props: {
		msg: String
	},
	data() {
		return {
			users: []
		};
	},
	firestore: {
		users: db.collection("users")
	}
});
</script>

<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
