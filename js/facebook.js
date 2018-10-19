// hide unread message/notification counts in tab title
const title = document.getElementById('pageTitle');
title.textContent = 'Facebook';

// Facebook will keep updating this, so we have to keep hiding it
setInterval(() => {
    title.textContent = 'Facebook';
}, 500);
