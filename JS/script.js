const gifs = document.querySelectorAll('.GIF');

gifs.forEach(image => 
{
    const gifSrc = image.dataset.gif;
    const stillSrc = image.src;
    
    image.addEventListener('mouseenter', () => 
    {
        image.src = gifSrc;
    });

    image.addEventListener('mouseleave' , ()=>
    {
        image.src = stillSrc;
    });
})

