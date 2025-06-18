 
document.querySelectorAll('.fade-link').forEach(link => 
{
    link.addEventListener('click', function (e) 
    {
        e.preventDefault();
        const href = this.getAttribute('href');

        document.body.classList.add('fade-out');


        setTimeout(() => 
        {
            window.location.href = href;
        }, 500); 
    });
});
  
document.querySelectorAll(".preview").forEach(video => 
{
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => video.pause());
});