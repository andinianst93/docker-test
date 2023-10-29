import cpy from 'cpy';

cpy('src/views/**/*', 'dist/views')
    .then(() => {
        console.log('EJS views copied successfully.');
    })
    .catch((err) => {
        console.error('Error copying EJS views: ', err);
    });