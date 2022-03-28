import Vue from 'vue';

Vue.filter('textColor', val => {
    let color = '';

    switch(val) {
        case 'pending':
            color = 'text-warning';
            break;
        case 'paid':
            color = 'text-success';
            break;
        case 'failed':
            color = 'text-danger';
            break;
    }

    return color;
});

Vue.filter('utcDate', (date) => {
    return Vue.moment(date).format('YYYY-MM-DD HH:mm:ss');
})