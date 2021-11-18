<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails"> {{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}} </li>
            <li><strong>Email:</strong>{{friend.email}} </li>
        </ul>

    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'nur',
                name:'Nur Pehlivan',
                phone:'01234 567 890',
                email: 'nur@localhost.com'
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

};
</script>
