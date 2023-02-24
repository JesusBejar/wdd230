let photos = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0, 
  // -500 won't let the images load until the viewport is -500 px away
  // this number should be positive (usually 300) so that the image loads
  // as teh viewport approaches it
  rootMargin: "0px 0px -200px 0px"
};

// this preloads the images
let loadPhotos = (photo) => {
  photo.setAttribute("src", photo.getAttribute("data-src"));
  photo.onload = () => {
    photo.removeAttribute("data-src")
  };
};

if ("IntersectionObserver" in window) {
  // the observer isn't apply to a list of images but to each individual image
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
            loadPhotos(item.target);
            observer.unobserve(item.target);
        }
      });
    }, imgOptions);  

    photos.forEach((img) => {
      observer.observe(img);
    });
  } else {
    photos.forEach((img) => {
      loadPhotos(img);
    });
  }

