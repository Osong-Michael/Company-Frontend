const dayOfMonth = dateText => new Date(dateText).toLocaleDateString('en-us', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
});

export { dayOfMonth };